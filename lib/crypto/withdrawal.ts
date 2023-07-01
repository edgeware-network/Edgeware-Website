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

  // 3a. Check ballance on intermediary EVM withdrawal address
  const balanceInWei = await web3.eth.getBalance(intermediaryEVMAddress);
  const availableBalance = parseFloat(web3.utils.fromWei(balanceInWei, 'ether'));

  console.log('IntermediaryEVMAddress', intermediaryEVMAddress);
  console.log('Found additional EDG balance in intermediary account:', availableBalance);

  // 4. sign withdrawal transaction command on substrate
  // Initialize API
  const api = await initPolkadotAPI(network);
  if (!api) {
    return {
      success: false,
      message: 'Failed to connect to the network. Please try again later.',
    };
  }

  // Calculate amounts

  // Reserve 1 EDG as a buffer for fees etc
  const BUFFER = 1;
  const amount = Number(inputAmount);
  const withdrawExtra = availableBalance - BUFFER > amount;
  const actualAmount = withdrawExtra ? availableBalance - BUFFER : amount;
  const difference = Math.round(actualAmount - amount);

  // Request withdrawal:
  try {
    const { txHash, blockHash } = await requestEVMWithdrawal(
      api,
      intermediaryEVMAddress,
      substrateAddress,
      actualAmount
    );

    console.log({
      txHash,
      blockHash,
    });

    if (txHash) {
      let message = `Successfully withdrawn ${amount} EDG`;
      if (withdrawExtra) {
        message += ` (${inputAmount} EDG requested + ${difference} EDG recovered from intermediary account)`;
      }

      return {
        success: true,
        message: message,
        data: {
          tx: txHash,
          block: blockHash,
        },
      };
    } else {
      return {
        success: false,
        message: 'Failed to send transaction.',
      };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: error?.message || 'Failed to request transfer.',
    };
  }
};
