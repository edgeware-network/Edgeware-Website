import { u8aToHex } from '@polkadot/util';
import Keyring from '@polkadot/keyring';
import { spec } from '@edgeware/node-types';
import { TypeRegistry } from '@polkadot/types';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto';
import Web3 from 'web3';
import BN from 'bn.js';
import { useRef, useState } from 'react';

import { Button } from '../../../common/button/button';
import { P } from '../../../common/typography/typography';

import styles from './evm-withdraw.module.scss';

// conditional import for extension-dapp
let web3Accounts, web3Enable, web3FromAddress;
if (typeof window !== "undefined") {
  const extension = require('@polkadot/extension-dapp');
  web3Accounts = extension.web3Accounts;
  web3Enable = extension.web3Enable;
  web3FromAddress = extension.web3FromAddress;
}

export const EvmWithdraw = () => {
  const inputEl = useRef(null);
  const amountEl = useRef(null);
  const [formState, setFormState] = useState({
    text: null,
    error: false,
  });

  const evmToMainnet = async () => {
    setFormState({});

    const web3 = new Web3(window.ethereum);
    const account = web3?.eth?.accounts?.currentProvider?.selectedAddress;
    if (!account) {
      setFormState({ text: 'Metamask or compatible Web3 wallet required', error: true });
      return;
    }

    const substrateAddress = inputEl.current.value;
    if (!substrateAddress) {
      setFormState({ text: 'Invalid Substrate address', error: true });
      return;
    }

    const amount = amountEl.current.value;
    if (isNaN(+amount)) {
      setFormState({ text: 'Invalid amount', error: true });
      return;
    };

    // are we on the right network?
    if (+web3.eth.accounts.currentProvider.chainId !== 2021 &&
        +web3.eth.accounts.currentProvider.chainId !== 2022) {
      setFormState({ text: 'Wallet must be configured to EVM chain ID 2021 for Edgeware', error: true });
      return;
    }

    try {
      setFormState({ text: 'Confirm the transaction in your wallet', error: true });
      const addressBytes = decodeAddress(substrateAddress);
      const evmAddress = Buffer.from(addressBytes.subarray(0, 20)).toString('hex');
      await web3.eth.sendTransaction({
        from: account,
        to: evmAddress,
        value: Web3.utils.toWei(amount),
        gas: '55000',
      }).on('transactionHash', (_) => {
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

  const evmWithdraw = async () => {
    setFormState({});

    const web3 = new Web3(window.ethereum);
    if (!web3?.eth) {
      setFormState({ text: 'Metamask or compatible Web3 wallet required', error: true });
      return;
    }

    const sender = inputEl.current.value;
    if (!sender) {
      setFormState({ text: 'Invalid Substrate address', error: true });
      return;
    }

    const amount = amountEl.current.value;
    if (isNaN(+amount)) {
      setFormState({ text: 'Invalid amount', error: true });
      return;
    };

    const addressBytes = decodeAddress(sender);
    const addressHex = u8aToHex(addressBytes);
    const evmAddress = '0x' + Buffer.from(addressBytes.subarray(0, 20)).toString('hex');

    if (+web3.eth.accounts.currentProvider.chainId !== 2021 &&
        +web3.eth.accounts.currentProvider.chainId !== 2022) {
      setFormState({ text: 'Wallet must be configured to EVM chain ID 2021 for Edgeware', error: true });
      return;
    }

    setFormState({ text: 'Connecting to polkadot-js...', error: true });
    const polkadotUrl = 'wss://mainnet.edgewa.re';
    const registry = new TypeRegistry();
    const api = await (new ApiPromise({
      provider: new WsProvider(polkadotUrl),
      registry,
      ...spec,
    })).isReady;

    const keyring = new Keyring();
    keyring.setSS58Format(7);

    await web3Enable('Edgeware key management app');
    const allAccounts = await web3Accounts();
    const allAccountsHex = allAccounts.map(({ address }) => u8aToHex(keyring.decodeAddress(address)));
    if (allAccountsHex.indexOf(addressHex) === -1) {
      setFormState({ text: 'Address not found in polkadot-js', error: true });
      return;
    }

    const availableBalance = `${await web3.eth.getBalance(evmAddress) / (10 ** 18)} EDG`;
    const withdrawingBalance = `${amount} EDG`;

    setFormState({
      text: `Withdrawing ${withdrawingBalance} of ${availableBalance} available, please confirm in polkadot-js`,
      error: true
    });
    const injector = await web3FromAddress(sender);
    const tx = api.tx.evm.withdraw(
      evmAddress,
      (amount * (10 ** api.registry.chainDecimals)).toString(),
    ).signAndSend(sender, { signer: injector.signer }, (result) => {
      if (result.isError) {
        setFormState({ text: 'Transaction error', error: true });
      } else if (result.dispatchError && withdrawingBalance > availableBalance) {
        setFormState({
          text: `Transaction error. Attempted to withdraw ${withdrawingBalance} with only ${availableBalance} available`,
          error: true
        });
      } else if (result.dispatchError) {
        setFormState({ text: 'Transaction error', error: true });
      } else if (result.isCompleted && withdrawingBalance === availableBalance) {
        setFormState({ text: `Transaction success. Withdrew ${withdrawingBalance}!` });
      } else if (result.isCompleted) {
        setFormState({
          text: `Transaction success. Withdrew ${withdrawingBalance} of ${availableBalance} available in the withdraw address`
        });
      }
    }).catch((err) => {
      setFormState({ text: err.message, error: true });
    });
  };

  const evmCheckBalance = async () => {
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label className={styles.label} htmlFor="ac-input-withdraw-address" aria-label="Address">
          <input
            id="ac-input-withdraw-address"
            className={styles.input}
            type="text"
            name="input"
            placeholder="Substrate address (e.g. nJrsr...)"
            ref={inputEl}
            autoComplete="off"
            autoCapitalize="off"
	    autoCorrect="off"
          />
        </label>
        <label className={styles.label} htmlFor="ac-input-withdraw-amount" aria-label="Amount">
          <input
            id="ac-input-withdraw-amount"
            className={styles.input}
            type="text"
            name="input"
            placeholder="Amount (EDG)"
            ref={amountEl}
            autoComplete="off"
            autoCapitalize="off"
	    autoCorrect="off"
          />
        </label>
        <div style={{ paddingRight: 10, paddingTop: 10 }}>
          <Button onClick={evmToMainnet} style="primary-small">
            1. Transfer to withdraw address
          </Button>
        </div>
        <div style={{ paddingRight: 10, paddingTop: 10 }}>
          <Button onClick={evmWithdraw} style="primary-small">
            2. Withdraw from EVM
          </Button>
        </div>
        <div className={formState.error ? styles.errorText : styles.successText}>
          {formState.text}
        </div>
      </form>
    </>
  );
};
