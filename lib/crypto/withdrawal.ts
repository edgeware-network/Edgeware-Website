import { decodeAddress } from '@polkadot/util-crypto';
import Web3 from 'web3';
import { initPolkadotAPI, requestEVMWithdrawal } from './polkadot';

type Network = 'mainnet' | 'testnet';

type WithdrawalResult = {
  success: boolean;
  message?: string;
  data?: any;
};

export const processEVMWithdrawal = async (
  sourceAddress: string,
  substrateAddress: string,
  inputAmount: string,
  network: Network
): Promise<WithdrawalResult> => {
  // 1. discover intermediary EVM withdrawal address
  const intermediaryEVMAddress = Buffer.from(
    decodeAddress(substrateAddress).subarray(0, 20)
  ).toString('hex');

  // 2. send withdrawal transaction to intermediary EVM withdrawal address
  const web3 = new Web3((window as any).ethereum);

  // 3. wait for transaction to be mined
  const result = await web3.eth
    .sendTransaction({
      from: sourceAddress,
      to: intermediaryEVMAddress,
      value: Web3.utils.toWei(inputAmount),
      gas: '55000',
    })
    .on('transactionHash', () => {
      console.log('Transaction sent, waiting for confirmation...');
    });

  const receipt = await web3.eth.getTransactionReceipt(result.transactionHash);
  console.log(receipt);

  // 4. sign withdrawal transaction command on substrate
  // Initialize API
  const api = await initPolkadotAPI(network);
  if (!api) {
    return {
      success: false,
      message: 'Failed to connect to the network. Please try again later.',
    };
  }

  // Request withdrawal
  const amount = Number(inputAmount);

  try {
    const tx = await requestEVMWithdrawal(api, intermediaryEVMAddress, substrateAddress, amount);

    if (tx) {
      return {
        success: true,
        message: `Successfully withdrawn ${amount} EDG to ${substrateAddress}.`,
        data: {
          tx,
        },
      };
    } else {
      return {
        success: false,
        message: 'Failed to send transaction. Please try again later.',
      };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: error?.message || 'Failed to request transfer. Please try again later.',
    };
  }
};
