import Web3 from 'web3';
import { decodeAddress, encodeAddress } from '@polkadot/keyring';
import { hexToU8a, isHex } from '@polkadot/util';

type ValidationResult = {
  valid: boolean;
  message?: string;
};

export const validateEVMAddress = (address: string): ValidationResult => {
  if (!address) {
    return {
      valid: false,
      message: 'Address is required!',
    };
  }

  if (!Web3.utils.isAddress(address)) {
    return {
      valid: false,
      message: 'Invalid address format! Please check if your address is an EVM address.',
    };
  }

  return {
    valid: true,
  };
};

export const validateSubstrateAddress = (address: string): ValidationResult => {
  if (!address) {
    return {
      valid: false,
      message: 'Address is required!',
    };
  }

  try {
    encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address));

    return {
      valid: true,
    };
  } catch (error) {
    return {
      valid: false,
      message: 'Invalid address format! Please check if your address is a Substrate address.',
    };
  }
};

export const validateTokenAmount = (amount: string): ValidationResult => {
  if (!amount) {
    return {
      valid: false,
      message: 'Amount is required!',
    };
  }

  if (isNaN(Number(amount))) {
    return {
      valid: false,
      message: 'Invalid amount format! Please check if your amount is a number.',
    };
  }

  if (Number(amount) <= 0) {
    return {
      valid: false,
      message: 'Invalid amount! Please check if your amount is greater than 0.',
    };
  }

  return {
    valid: true,
  };
};
