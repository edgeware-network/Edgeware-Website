import { u8aToHex } from '@polkadot/util';
import Keyring from '@polkadot/keyring';
import { spec } from '@edgeware/node-types';
import { TypeRegistry } from '@polkadot/types';
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
  text?: string;
  error?: boolean;
  showAddNetwork?: boolean;
}

export const EvmWithdraw = () => {
  const addressInputEl = useRef(null);
  const amountInputEl = useRef(null);
  const [formState, setFormState] = useState({
    text: null,
    error: false,
  } as EvmWithdrawFormState);

  const handleTransferButton = async (event: React.MouseEvent) => {
    event.preventDefault();
    setFormState({});

    // 1. Validate form
    const substrateAddress = addressInputEl.current.value;
    if (!substrateAddress) {
      setFormState({ text: 'Invalid Substrate address', error: true });
      addressInputEl.current.focus();
      return;
    }

    const amount = amountInputEl.current.value;
    if (amount === '' || amount === '0' || isNaN(+amount)) {
      setFormState({ text: 'Invalid EDG amount', error: true });
      amountInputEl.current.focus();
      return;
    }

    // 2. Check for Web3 accounts
    const web3 = new Web3((window as any).ethereum);
    const currentProvider = web3?.eth?.accounts?.currentProvider as any;
    try {
      await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    } catch (e) {
      setFormState({ text: 'Metamask or EVM compatible Web3 wallet required', error: true });
      return;
    }
    const account = currentProvider?.selectedAddress;
    if (!account) {
      setFormState({ text: 'Metamask or EVM compatible Web3 wallet required', error: true });
      return;
    }

    // Are we on the right network?
    if (+currentProvider?.chainId !== 2021 && +currentProvider?.chainId !== 2022) {
      setFormState({
        text: 'Please switch to Edgeware EdgeEVM network in your web3 wallet manually or click on the `Switch to EdgeEVM` button below.',
        error: true,
        showAddNetwork: true,
      });
      return;
    }

    // 3. Continue with transfer
    try {
      setFormState({ text: 'Confirm the transaction in your wallet', error: true });
      const addressBytes = decodeAddress(substrateAddress);
      const evmAddress = Buffer.from(addressBytes.subarray(0, 20)).toString('hex');
      await web3.eth
        .sendTransaction({
          from: account,
          to: evmAddress,
          value: Web3.utils.toWei(amount),
          gas: '55000',
        })
        .on('transactionHash', () => {
          setFormState({ text: 'Transaction sent, waiting for confirmation...', error: true });
        });
      setFormState({ text: 'Transfer to withdraw address succeeded. Please continue to step 2.' });
    } catch (err) {
      if (err.code === 4001) {
        setFormState({ text: 'Transaction canceled', error: true });
      } else {
        setFormState({ text: 'Transaction error', error: true });
      }
    }
  };

  const handleWithdrawButton = async (event: React.MouseEvent) => {
    event.preventDefault();
    setFormState({});

    const web3 = new Web3((window as any).ethereum);
    const currentProvider = web3?.eth?.accounts?.currentProvider as any;
    try {
      await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    } catch (e) {
      setFormState({ text: 'Metamask or compatible Web3 wallet required', error: true });
      return;
    }

    if (!currentProvider) {
      setFormState({ text: 'Metamask or compatible Web3 wallet required', error: true });
      return;
    }

    const sender = addressInputEl.current.value;
    if (!sender) {
      setFormState({ text: 'Invalid Substrate address', error: true });
      return;
    }

    const amount = amountInputEl.current.value;
    if (amount === '' || isNaN(+amount)) {
      setFormState({ text: 'Invalid amount', error: true });
      return;
    }

    const addressBytes = decodeAddress(sender);
    const addressHex = u8aToHex(addressBytes);
    const evmAddress = '0x' + Buffer.from(addressBytes.subarray(0, 20)).toString('hex');

    if (+currentProvider?.chainId !== 2021 && +currentProvider?.chainId !== 2022) {
      setFormState({
        text: 'Please switch to Edgeware EdgeEVM network in your web3 wallet/signer manually or click on the `Switch to EdgeEVM` button below.',
        error: true,
        showAddNetwork: true,
      });
      return;
    }

    setFormState({ text: 'Connecting to polkadot-js...', error: true });
    const polkadotUrl = 'wss://edgeware.jelliedowl.net';
    const registry = new TypeRegistry();

    // eslint-disable-next-line
    // @ts-ignore
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
      setFormState({ text: 'Address not found in polkadot-js', error: true });
      return;
    }

    const availableBalance = `${+(await web3.eth.getBalance(evmAddress)) / 10 ** 18} EDG`;
    const withdrawingBalance = `${amount} EDG`;

    setFormState({
      text: `Withdrawing ${withdrawingBalance} of ${availableBalance} available, please confirm in polkadot-js`,
      error: true,
    });
    const injector = await web3FromAddress(sender);
    api.tx.evm
      .withdraw(evmAddress, (+amount * 10 ** +api.registry.chainDecimals).toString())
      .signAndSend(sender, { signer: injector.signer }, (result) => {
        if (result.isError) {
          setFormState({ text: 'Transaction error', error: true });
        } else if (result.dispatchError && withdrawingBalance > availableBalance) {
          setFormState({
            text: `Transaction error. Attempted to withdraw ${withdrawingBalance} with only ${availableBalance} available`,
            error: true,
          });
        } else if (result.dispatchError) {
          setFormState({ text: 'Transaction error', error: true });
        } else if (result.isCompleted && withdrawingBalance === availableBalance) {
          setFormState({ text: `Transaction success. Withdrew ${withdrawingBalance}!` });
        } else if (result.isCompleted) {
          setFormState({
            text: `Transaction success. Withdrew ${withdrawingBalance} of ${availableBalance} available in the withdraw address`,
          });
        }
      })
      .catch((err) => {
        setFormState({ text: err.message, error: true });
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
      setFormState({ text: err.message, error: true, showAddNetwork: true });
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="my-8 max-w-2xl">
        <label className="my-4 block" htmlFor="ac-input-withdraw-address" aria-label="Address">
          <span className="text-gray-700">Withdraw address (Substrate):</span>
          <input
            id="ac-input-withdraw-address"
            className="w-full rounded border border-grey-700 bg-grey-900 px-4 py-2"
            type="text"
            name="input"
            placeholder="Substrate address (e.g. nJrsr...)"
            ref={addressInputEl}
            required
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
          />
        </label>
        <label className="my-4 block" htmlFor="ac-input-withdraw-amount" aria-label="Amount">
          <span className="text-gray-700">Withdrawal amount (EDG):</span>
          <input
            id="ac-input-withdraw-amount"
            className="w-full rounded border border-grey-700 bg-grey-900 px-4 py-2"
            type="text"
            name="input"
            required
            placeholder="Amount (EDG)"
            ref={amountInputEl}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
          />
        </label>
        <div className="py-1">
          <Button onClick={handleTransferButton} colorStyle="primary" sizing="normal">
            1. Transfer to withdraw address
          </Button>
        </div>
        <div className="py-1">
          <Button onClick={handleWithdrawButton} colorStyle="primary" sizing="normal">
            2. Withdraw from EVM
          </Button>
        </div>
        <div className={formState.error ? 'mt-4 text-[#DC2626]' : 'mt-4 text-green-600'}>
          {formState.text}
        </div>
        {formState.showAddNetwork && (window as any).ethereum && (
          <Button onClick={handleNetworkSwitchButton} colorStyle="white" sizing="normal">
            Switch to EdgeEVM
          </Button>
        )}
      </form>
    </>
  );
};
