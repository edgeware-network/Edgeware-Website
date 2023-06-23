import { useReducer, useRef, useEffect } from 'react';
import { useWeb3Context } from './web3-context';
import { validateEVMAddress, validateSubstrateAddress, validateTokenAmount } from 'lib/crypto';
import { processEVMDeposit } from 'lib/crypto/deposit';
import { processEVMWithdrawal } from 'lib/crypto/withdrawal';

// Shared types
export type Network = 'mainnet' | 'testnet';
type FormState = 'initial' | 'ready' | 'in-progress' | 'success' | 'error';
type TargetTransferType = 'deposit' | 'withdrawal';
type FormErrorsState = {
  global?: string;
  substrateAddress?: string;
  evmAddress?: string;
  amount?: string;
};

// State
type State = {
  formState: FormState;
  network: Network;
  ethereumConnected: boolean;
  polkadotConnected: boolean;
  targetTransferType: TargetTransferType;
  selectedPolkadotAccount: string | undefined;
  selectedEthereumAccount: string | undefined;
  errors: FormErrorsState;
  message: string | null;
  tx: string | null;
  block: string | null;
};

// Initial state
const initialState: State = {
  formState: 'initial',
  network: 'mainnet',
  ethereumConnected: false,
  polkadotConnected: false,
  targetTransferType: 'deposit',
  selectedPolkadotAccount: undefined,
  selectedEthereumAccount: undefined,
  errors: {},
  message: null,
  tx: null,
  block: null,
};

// Action types
type Action =
  | { type: 'SET_FORM_STATE'; payload: FormState }
  | { type: 'SET_NETWORK'; payload: Network }
  | { type: 'SET_ETHEREUM_CONNECTED'; payload: boolean }
  | { type: 'SET_POLKADOT_CONNECTED'; payload: boolean }
  | { type: 'SET_TARGET_TRANSFER_TYPE'; payload: TargetTransferType }
  | { type: 'SET_SELECTED_POLKADOT_ACCOUNT'; payload: string | undefined }
  | { type: 'SET_SELECTED_ETHEREUM_ACCOUNT'; payload: string | undefined }
  | { type: 'SET_ERRORS'; payload: FormErrorsState }
  | { type: 'SET_MESSAGE'; payload: string | null }
  | { type: 'SET_TX'; payload: string | null }
  | { type: 'SET_BLOCK'; payload: string | null };

// Reducer
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_FORM_STATE':
      return { ...state, formState: action.payload };
    case 'SET_NETWORK':
      return {
        ...state,
        network: action.payload,
      };
    case 'SET_ETHEREUM_CONNECTED':
      return { ...state, ethereumConnected: action.payload };
    case 'SET_POLKADOT_CONNECTED':
      return { ...state, polkadotConnected: action.payload };
    case 'SET_TARGET_TRANSFER_TYPE':
      return { ...state, targetTransferType: action.payload };
    case 'SET_SELECTED_POLKADOT_ACCOUNT':
      return { ...state, selectedPolkadotAccount: action.payload };
    case 'SET_SELECTED_ETHEREUM_ACCOUNT':
      return { ...state, selectedEthereumAccount: action.payload };
    case 'SET_ERRORS':
      return { ...state, errors: action.payload };
    case 'SET_MESSAGE':
      return { ...state, message: action.payload };
    case 'SET_TX':
      return { ...state, tx: action.payload };
    case 'SET_BLOCK':
      return { ...state, block: action.payload };
    default:
      return state;
  }
};

export const useTransferWidget = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const amountInputRef = useRef<HTMLInputElement>(null);
  const {
    connectToEthereum,
    disconnectFromEthereum,
    ethereumAccounts,
    connectToPolkadot,
    disconnectFromPolkadot,
    polkadotAccounts,
    updateBalances,
  } = useWeb3Context();

  // Actions
  const setFormState = (formState: FormState) =>
    dispatch({ type: 'SET_FORM_STATE', payload: formState });
  const setNetwork = (network: Network) => dispatch({ type: 'SET_NETWORK', payload: network });
  const setEthereumConnected = (connected: boolean) =>
    dispatch({ type: 'SET_ETHEREUM_CONNECTED', payload: connected });
  const setPolkadotConnected = (connected: boolean) =>
    dispatch({ type: 'SET_POLKADOT_CONNECTED', payload: connected });
  const setTargetTransferType = (transferType: TargetTransferType) =>
    dispatch({ type: 'SET_TARGET_TRANSFER_TYPE', payload: transferType });
  const setSelectedPolkadotAccount = (account: string | undefined) =>
    dispatch({ type: 'SET_SELECTED_POLKADOT_ACCOUNT', payload: account });
  const setSelectedEthereumAccount = (account: string | undefined) =>
    dispatch({ type: 'SET_SELECTED_ETHEREUM_ACCOUNT', payload: account });
  const setErrors = (errors: FormErrorsState) => dispatch({ type: 'SET_ERRORS', payload: errors });
  const setMessage = (message: string | null) =>
    dispatch({ type: 'SET_MESSAGE', payload: message });
  const setTx = (tx: string | null) => dispatch({ type: 'SET_TX', payload: tx });
  const setBlock = (block: string | null) => dispatch({ type: 'SET_BLOCK', payload: block });

  // Logic functions
  const handleDepositSubmit = () => {
    // reset state to ready and clear errors
    setFormState('ready');
    setErrors({});

    // get data
    const { selectedPolkadotAccount: substrateAddress, selectedEthereumAccount: evmAddress } =
      state;
    const amount = amountInputRef.current?.value;

    // validate substrate address
    const substrateAddressValidation = validateSubstrateAddress(substrateAddress);
    if (!substrateAddressValidation.valid) {
      setErrors({
        substrateAddress: substrateAddressValidation.message,
      });

      return;
    }

    // validate EVM address
    const evmAddressValidation = validateEVMAddress(evmAddress);
    if (!evmAddressValidation.valid) {
      setErrors({
        evmAddress: evmAddressValidation.message,
      });

      return;
    }

    // validate amount
    const amountValidation = validateTokenAmount(amount);
    if (!amountValidation.valid) {
      setErrors({
        amount: amountValidation.message,
      });

      return;
    }

    // validate balance
    const balance = polkadotAccounts.find((a) => a.address === substrateAddress)?.balance || '0';
    if (parseFloat(balance) < parseFloat(amount)) {
      setErrors({
        amount: 'Insufficient balance',
      });

      return;
    }

    // submit form and continue with processing
    setFormState('in-progress');

    async function process() {
      try {
        const result = await processEVMDeposit(evmAddress, substrateAddress, amount, state.network);
        if (result.success) {
          setFormState('success');
          setMessage(result?.message);
          setTx(result?.data?.tx);
          setBlock(result?.data?.block);
        } else {
          setErrors({
            global: result.message,
          });
          setFormState('error');
        }
      } catch (error) {
        setErrors({
          global: error.message,
        });
        setFormState('error');
        return;
      }
    }

    process();
  };

  const handleWithdrawalSubmit = () => {
    // reset state to ready and clear errors
    setFormState('ready');
    setErrors({});

    // get data
    const { selectedPolkadotAccount: substrateAddress, selectedEthereumAccount: evmAddress } =
      state;
    const amount = amountInputRef.current?.value;

    // validate substrate address
    const substrateAddressValidation = validateSubstrateAddress(substrateAddress);
    if (!substrateAddressValidation.valid) {
      setErrors({
        substrateAddress: substrateAddressValidation.message,
      });

      return;
    }

    // validate EVM address
    const evmAddressValidation = validateEVMAddress(evmAddress);
    if (!evmAddressValidation.valid) {
      setErrors({
        evmAddress: evmAddressValidation.message,
      });

      return;
    }

    // validate amount
    const amountValidation = validateTokenAmount(amount);
    if (!amountValidation.valid) {
      setErrors({
        amount: amountValidation.message,
      });

      return;
    }

    // validate balance
    const balance = ethereumAccounts.find((a) => a.address === evmAddress)?.balance || '0';
    if (parseFloat(balance) < parseFloat(amount)) {
      setErrors({
        amount: 'Insufficient balance',
      });

      return;
    }

    // submit form and continue with processing
    setFormState('in-progress');

    async function process() {
      try {
        const result = await processEVMWithdrawal(
          evmAddress,
          substrateAddress,
          amount,
          state.network
        );

        if (result.success) {
          setTx(result?.data?.tx);
          setMessage(result?.message);
          setBlock(result?.data?.block);
          setFormState('success');
        } else {
          setErrors({
            global: result.message,
          });
          setFormState('error');
        }
      } catch (error) {
        console.error(error);
        setErrors({
          global: error.message,
        });
        setFormState('error');
        return;
      }
    }

    process();
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (state.targetTransferType === 'deposit') {
      handleDepositSubmit();
    } else {
      handleWithdrawalSubmit();
    }

    handleBalanceUpdate();
  };

  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (state.polkadotConnected && state.ethereumConnected) {
      setFormState('ready');
    } else {
      setFormState('initial');
    }
    setErrors({});
    setTx(null);
    setBlock(null);
    setMessage(null);
    amountInputRef.current.value = '';
  };

  const handleConnect = (type: 'polkadot' | 'ethereum') => {
    if (
      (type === 'polkadot' && state.polkadotConnected) ||
      (type === 'ethereum' && state.ethereumConnected)
    ) {
      return;
    }

    async function connect() {
      if (type === 'polkadot') {
        const result = await connectToPolkadot(state.network);
        if (result) {
          setPolkadotConnected(true);
          if (state.ethereumConnected) {
            setFormState('ready');
          }
        }
      } else {
        try {
          const result = await connectToEthereum(state.network);
          if (result) {
            setEthereumConnected(true);
            if (state.polkadotConnected) {
              setFormState('ready');
            }
          }
        } catch (error) {
          setErrors({
            ...state.errors,
            evmAddress: "Couldn't connect to Ethereum.",
          });
        }
      }
    }

    connect();
  };

  const handleDisconnect = (type: 'polkadot' | 'ethereum') => {
    const isConnected = type === 'polkadot' ? state.polkadotConnected : state.ethereumConnected;
    if (!isConnected) {
      return;
    }

    async function disconnect() {
      if (type === 'polkadot') {
        await disconnectFromPolkadot();
        setPolkadotConnected(false);
        setSelectedPolkadotAccount(undefined);
        setFormState('initial');
      }

      if (type === 'ethereum') {
        await disconnectFromEthereum();
        setEthereumConnected(false);
        setSelectedEthereumAccount(undefined);
        setFormState('initial');
      }
    }

    disconnect();
  };

  const handleNetworkChange = (network: Network) => {
    // reset state to ready and clear errors
    setFormState('initial');
    setPolkadotConnected(false);
    setEthereumConnected(false);
    setSelectedPolkadotAccount(undefined);
    setSelectedEthereumAccount(undefined);
    setErrors({});
    setNetwork(network);
  };

  const handleBalanceUpdate = () => {
    // Balance will update by just connecting to the network again
    async function update() {
      console.log('Periodically updating balances');
      await updateBalances(state.network);
    }
    [0, 5, 15, 30, 60, 120].map((s) => window.setTimeout(update, s * 1000));
  };

  // useEffect hooks to synchronize hook state with useWeb3Context state
  useEffect(() => {
    if (state.polkadotConnected && polkadotAccounts && polkadotAccounts.length > 0) {
      if (!state.selectedPolkadotAccount) {
        setSelectedPolkadotAccount(polkadotAccounts[0].address);
      }
    }

    if (state.ethereumConnected && ethereumAccounts && ethereumAccounts.length > 0) {
      if (!state.selectedEthereumAccount) {
        setSelectedEthereumAccount(ethereumAccounts[0].address);
      }
    }
  }, [state, polkadotAccounts, ethereumAccounts]);

  useEffect(() => {
    if (state.formState === 'success') {
      handleBalanceUpdate();
    }
  }, [state.formState]);

  return {
    state,
    polkadotAccounts,
    ethereumAccounts,
    amountInputRef,
    setFormState,
    setEthereumConnected,
    setPolkadotConnected,
    setTargetTransferType,
    setSelectedPolkadotAccount,
    setSelectedEthereumAccount,
    setErrors,
    setTx,
    setBlock,
    handleSubmit,
    handleReset,
    handleConnect,
    handleDisconnect,
    handleNetworkChange,
  };
};
