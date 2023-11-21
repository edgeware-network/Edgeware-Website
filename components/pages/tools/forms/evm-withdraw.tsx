import { u8aToHex } from '@polkadot/util';
import Keyring from '@polkadot/keyring';
import { spec } from '@edgeware/node-types';
import { RegistryTypes} from '@polkadot/types';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { decodeAddress } from '@polkadot/util-crypto';
import Web3 from 'web3';
import React, { useRef, useState } from 'react';

import { Button } from 'components/common/button';

// conditional import for extension-dapp
let web3Accounts, web3Enable, web3FromAddress;
if (typeof window !== 'undefined') {
  // eslint-disable-next-line
  const extension = require('@polkadot/extension-dapp');
  web3Accounts = extension.web3Accounts;
  web3Enable = extension.web3Enable;
  web3FromAddress = extension.web3FromAddress;
}

interface EvmWithdrawFormState {
  evmText?: string;
  substrateText?: string;
  evmError?: boolean;
  substrateError?: boolean;
  evmTransactionSuccess?: boolean;
  substrateTransactionSuccess?: boolean;
  showAddNetwork?: boolean;
}

type formStep = 'initial' | 'transfer' | 'withdraw' | 'complete';

export const EvmWithdraw = () => {
  const addressInputEl = useRef(null);
  const amountInputEl = useRef(null);
  const evmAddressInputEl = useRef(null);

  const [formStep, setFormStep] = useState<formStep>('initial');
  const [formState, setFormState] = useState<EvmWithdrawFormState>({
    evmText: null,
    evmError: false,
  });

  const [evmAddress, setEvmAddress] = useState('');

  const handleDiscoverButton = async (event: React.MouseEvent) => {
    event.preventDefault();

    // Reset state
    setFormState({});
    setFormStep('initial');

    // 1. Validate form
    const substrateAddress = addressInputEl.current.value;
    if (!substrateAddress) {
      setFormState({ evmText: 'Invalid Substrate address', evmError: true });
      addressInputEl.current.focus();
      return;
    }

    // 2. Continue with transfer
    try {
      const addressBytes = decodeAddress(substrateAddress);
      const evmAddress = Buffer.from(addressBytes.subarray(0, 20)).toString('hex');

      setFormStep('transfer');
      setEvmAddress(Web3.utils.toChecksumAddress(evmAddress));
    } catch (err) {
      console.log(err);
      setFormState({ evmText: 'Transaction error', evmError: true });
    }
  };

  // Will initiate the transfer from the EVM to the intermediary address (via Metamask)
  const handleTransferButton = async (event: React.MouseEvent) => {
    event.preventDefault();

    // 1. Validate form
    const substrateAddress = addressInputEl.current.value;
    if (!substrateAddress) {
      setFormState({ evmText: 'Invalid Substrate address', evmError: true });
      addressInputEl.current.focus();
      return;
    }

    const amount = amountInputEl.current.value;
    if (amount === '' || amount === '0' || isNaN(+amount)) {
      setFormState({ evmText: 'Invalid EDG amount', evmError: true });
      amountInputEl.current.focus();
      return;
    }

    // 2. Check for Web3 accounts
    const web3 = new Web3((window as any).ethereum);
    const currentProvider = web3?.eth?.accounts?.currentProvider as any;
    try {
      await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    } catch (e) {
      setFormState({ evmText: 'Metamask or EVM compatible Web3 wallet required', evmError: true });
      return;
    }
    const account = currentProvider?.selectedAddress;
    if (!account) {
      setFormState({ evmText: 'Metamask or EVM compatible Web3 wallet required', evmError: true });
      return;
    }

    // Are we on the right network?
    if (+currentProvider?.chainId !== 2021 && +currentProvider?.chainId !== 2022) {
      setFormState({
        evmText:
          'Please switch to Edgeware EdgeEVM network in your web3 wallet manually or click on the `Switch to EdgeEVM` button below.',
        evmError: true,
        showAddNetwork: true,
      });
      return;
    }

    // 3. Continue with transfer
    try {
      const addressBytes = decodeAddress(substrateAddress);
      const evmAddress = Buffer.from(addressBytes.subarray(0, 20)).toString('hex');

      setFormStep('withdraw');
      setFormState({ evmText: 'Confirm the transaction in your wallet', evmError: false });

      await web3.eth
        .sendTransaction({
          from: account,
          to: evmAddress,
          value: Web3.utils.toWei(amount),
          gas: '55000',
        })
        .on('transactionHash', () => {
          setFormState({
            evmText: 'Transaction sent, waiting for confirmation...',
            evmError: false,
          });
        });
      setFormState({
        evmText: 'Transfer to intermediary withdrawal address succeeded.',
        evmError: false,
        evmTransactionSuccess: true,
      });
    } catch (err) {
      console.log(err);
      if (err.code === 4001) {
        setFormState({ evmText: 'Transaction canceled', evmError: true });
      } else {
        setFormState({ evmText: 'Transaction error', evmError: true });
      }
    }
  };

  const handleManualTransfer = async (event: React.MouseEvent) => {
    event.preventDefault();

    // Validate amount
    const amount = amountInputEl.current.value;
    if (amount === '' || amount === '0' || isNaN(+amount)) {
      setFormState({ evmText: 'Invalid EDG amount', evmError: true });
      amountInputEl.current.focus();
      return;
    }

    setFormStep('withdraw');
    setFormState({
      ...formState,
      evmError: false,
      evmText: 'Transfer performed manually!',
      evmTransactionSuccess: true,
    });
  };

  // Will sign the withdrawal extrinsic from the Substrate account (via polkadot-js)
  const handleWithdrawButton = async (event: React.MouseEvent) => {
    event.preventDefault();
    if (!formState.evmTransactionSuccess) {
      return;
    }

    const web3 = new Web3((window as any).ethereum);
    const currentProvider = web3?.eth?.accounts?.currentProvider as any;
    try {
      await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    } catch (e) {
      setFormState({
        ...formState,
        substrateText: 'Metamask or compatible Web3 wallet required!',
        substrateError: true,
      });
      return;
    }

    if (!currentProvider) {
      setFormState({
        ...formState,
        substrateText: 'Metamask or compatible Web3 wallet required!',
        substrateError: true,
      });
      return;
    }

    const sender = addressInputEl.current.value;
    if (!sender) {
      setFormState({
        ...formState,
        substrateText: 'Invalid Substrate address!',
        substrateError: true,
      });
      return;
    }

    const amount = amountInputEl.current.value;
    if (amount === '' || amount === '0' || isNaN(+amount)) {
      setFormState({
        ...formState,
        substrateText: 'Invalid amount!',
        substrateError: true,
      });
      return;
    }

    const addressBytes = decodeAddress(sender);
    const addressHex = u8aToHex(addressBytes);
    const evmAddress = '0x' + Buffer.from(addressBytes.subarray(0, 20)).toString('hex');

    if (+currentProvider?.chainId !== 2021 && +currentProvider?.chainId !== 2022) {
      setFormState({
        ...formState,
        substrateText:
          'Please switch to Edgeware EdgeEVM network in your web3 wallet/signer manually or click on the `Switch to EdgeEVM` button below.',
        substrateError: true,
        showAddNetwork: true,
      });
      return;
    }

    setFormState({
      ...formState,
      substrateText: 'Connecting to polkadot-js...',
      substrateError: false,
    });

    const polkadotUrl = 'wss://edgeware.jelliedowl.net';
    const registry = new RegistryTypes();

    const api = await new ApiPromise({
      provider: new WsProvider(polkadotUrl),
      registry,
      ...spec,
    }).isReady;

    const keyring = new Keyring();
    keyring.setSS58Format(7);

    await web3Enable('Edgeware key management app');
    const allAccounts = await web3Accounts();
    const allAccountsHex = allAccounts.map(({ address }) =>
      u8aToHex(keyring.decodeAddress(address))
    );
    if (allAccountsHex.indexOf(addressHex) === -1) {
      setFormState({
        ...formState,
        substrateText: 'Address not found in polkadot-js!',
        substrateError: true,
      });
      return;
    }

    const availableBalance = `${+(await web3.eth.getBalance(evmAddress)) / 10 ** 18} EDG`;
    const withdrawingBalance = `${amount} EDG`;

    setFormState({
      ...formState,
      substrateText: `Withdrawing ${withdrawingBalance} of ${availableBalance} available, please confirm in polkadot-js...`,
      substrateError: false,
    });

    const injector = await web3FromAddress(sender);
    api.tx.evm
      .withdraw(evmAddress, (+amount * 10 ** +api.registry.chainDecimals).toString())
      .signAndSend(sender, { signer: injector.signer }, (result) => {
        if (result.isError) {
          setFormState({
            ...formState,
            substrateText: 'Transaction error!',
            substrateError: true,
          });
        } else if (result.dispatchError && withdrawingBalance > availableBalance) {
          setFormState({
            ...formState,
            substrateText: `Transaction error. Attempted to withdraw ${withdrawingBalance} with only ${availableBalance} available.`,
            substrateError: true,
          });
        } else if (result.dispatchError) {
          setFormState({ ...formState, substrateText: 'Transaction error!', substrateError: true });
        } else if (result.isCompleted && withdrawingBalance === availableBalance) {
          setFormState({
            ...formState,
            substrateTransactionSuccess: true,
            substrateText: `Transaction success. Withdrew ${withdrawingBalance}!`,
          });

          setFormStep('complete');
        } else if (result.isCompleted) {
          setFormState({
            ...formState,
            substrateTransactionSuccess: true,
            substrateText: `Transaction success. Withdrew ${withdrawingBalance} of ${availableBalance} available in the withdraw address.`,
          });

          setFormStep('complete');
        }
      })
      .catch((err) => {
        setFormState({ evmText: err.message, evmError: true });
      });
  };

  const handleNetworkSwitchButton = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      await (window as any).ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x7E5',
            chainName: 'Edgeware EdgeEVM',
            rpcUrls: ['https://edgeware-evm.jelliedowl.net/'],
            nativeCurrency: {
              name: 'Edgeware',
              symbol: 'EDG',
              decimals: 18,
            },
            blockExplorerUrls: ['https://edgscan.live/'],
          },
        ],
      });
    } catch (err) {
      setFormState({ evmText: err.message, evmError: true, showAddNetwork: true });
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();

    if (addressInputEl.current) {
      addressInputEl.current.value = '';
    }

    if (amountInputEl.current) {
      amountInputEl.current.value = '';
    }

    setFormState({});
    setFormStep('initial');
  };

  const stepVisible = (step: number) => {
    if (step === 1) {
      return true;
    }

    if (step === 2) {
      return ['transfer', 'withdraw', 'complete'].includes(formStep);
    }

    if (step === 3) {
      return ['transfer', 'withdraw', 'complete'].includes(formStep);
    }

    if (step === 4) {
      const isActiveStep = ['withdraw', 'complete'].includes(formStep);
      return isActiveStep && formState.evmTransactionSuccess;
    }

    if (step === 5) {
      const isActiveStep = ['complete'].includes(formStep);
      return isActiveStep && formState.substrateTransactionSuccess;
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="my-8 max-w-2xl">
        {stepVisible(1) && (
          <div id="step-1">
            <label className="my-4 block" htmlFor="ac-input-withdraw-address" aria-label="Address">
              <span className="text-gray-700">1. Enter target withdrawal address:</span>
              <input
                id="ac-input-withdraw-address"
                className="w-full rounded border border-grey-700 bg-grey-900 px-4 py-2 disabled:bg-grey-700"
                type="text"
                name="input"
                placeholder="Substrate address (e.g. nJrsr...)"
                ref={addressInputEl}
                required
                autoComplete="off"
                autoCapitalize="none"
                autoCorrect="off"
                disabled={formStep !== 'initial'}
              />
            </label>
            <p className="text-sm text-grey-200">
              Based on the Substrate address, the corresponding EVM address will be discovered.
            </p>
            {formStep === 'initial' && (
              <div className="mt-4">
                <Button onClick={handleDiscoverButton} colorStyle="primary" sizing="normal">
                  Discover EVM withdrawal address
                </Button>
              </div>
            )}
          </div>
        )}

        {stepVisible(2) && (
          <div id="step-2">
            <label
              className="my-4 block"
              htmlFor="ac-input-withdraw-address-evm"
              aria-label="Address"
            >
              <span className="text-gray-700">2. Discovered withdrawal address (EVM):</span>
              <input
                id="ac-input-withdraw-address-evm"
                className="w-full rounded border border-grey-700 bg-grey-700 px-4 py-2 focus:outline-none focus:ring-0"
                type="text"
                disabled
                name="input"
                placeholder=""
                defaultValue={evmAddress}
                ref={evmAddressInputEl}
              />
            </label>
            <p className="text-sm text-grey-200">
              This is your algorithmically determined, intermediary EVM withdrawal address that
              corresponds to your substrate address. To continue with the withdrawal process, you
              must now send the funds from your EVM address to this intermediary address.
              <br />
              <br />
              You can do this by manually sending the funds to the intermediary address displayed
              above or by initiating the transfer directly from here using the button below.
            </p>
          </div>
        )}

        {stepVisible(3) && (
          <div id="step-3">
            <label className="my-4 block" htmlFor="ac-input-withdraw-amount" aria-label="Amount">
              <span className="text-gray-700">3. Transfer EDG to intermediary account:</span>
              <div className="flex flex-row space-x-2">
                <input
                  id="ac-input-withdraw-amount"
                  className="w-full rounded border border-grey-700 bg-grey-900 px-4 py-2 disabled:bg-grey-700"
                  type="text"
                  name="input"
                  required
                  placeholder="Amount (EDG)"
                  ref={amountInputEl}
                  autoComplete="off"
                  autoCapitalize="none"
                  autoCorrect="off"
                  disabled={formStep !== 'transfer'}
                />
                <Button
                  onClick={handleTransferButton}
                  colorStyle="primary"
                  sizing="normal"
                  disabled={formStep !== 'transfer'}
                >
                  Transfer
                </Button>
              </div>
              <div className="my-2">
                If you transferred the funds manually,
                <button
                  className="ml-2 underline hover:text-primary-500"
                  onClick={handleManualTransfer}
                >
                  click here to go to final step →
                </button>
              </div>
            </label>
            <div className={formState.evmError ? 'my-4 text-red-500' : 'my-4 text-green-600'}>
              {formState.evmText}
            </div>
          </div>
        )}

        {stepVisible(4) && (
          <div id="step-4">
            <p className="mb-2">4. Finalize the withdrawal from your Substrate account</p>
            <p className="my-2 text-sm text-grey-200">
              Now you can withdraw the funds from the EVM to your Substrate address. This can be
              done by initiating the
              <code className="mx-1 rounded bg-black px-1 py-1 font-mono text-xs text-white">
                evm.withdraw(address,value)
              </code>
              extrinsic from your Substrate account using the{' '}
              <a
                href="https://polkadot.js.org/apps/#/extrinsics"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                polkadot-js
              </a>
              {' or '}
              <a
                href="https://www.edgeware.app/#/extrinsics"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                edgeware.app
              </a>{' '}
              extrinsics.
              <br />
              <br />
              For convenience, you can use the button below to sign the transaction.
            </p>
            <Button
              disabled={formStep !== 'withdraw'}
              onClick={handleWithdrawButton}
              colorStyle="primary"
              sizing="normal"
            >
              Submit withdrawal transaction
            </Button>
            <div className={formState.substrateError ? 'my-4 text-red-500' : 'my-4 text-green-600'}>
              {formState.substrateText}
            </div>
          </div>
        )}

        {stepVisible(5) && (
          <div id="step-5">
            <p className="mb-2">5. Withdrawal complete</p>
            <p className="my-2 text-sm text-grey-200">
              Your withdrawal is complete. You can now check your balance in your Substrate wallet.
            </p>
          </div>
        )}

        <div className="mt-8">
          <button onClick={handleReset}>
            Reset form <span className="text-sm text-grey-200">(start over)</span>
          </button>
        </div>

        {formState.showAddNetwork && (window as any).ethereum && (
          <div className="py-1">
            <Button onClick={handleNetworkSwitchButton} colorStyle="white" sizing="normal">
              Switch to EdgeEVM
            </Button>
          </div>
        )}
      </form>
    </>
  );
};
