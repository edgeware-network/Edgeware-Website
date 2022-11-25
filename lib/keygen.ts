import { mnemonicGenerate } from '@polkadot/util-crypto';
import { u8aToHex, hexToU8a, stringToU8a, u8aConcat } from '@polkadot/util';
import { blake2AsU8a } from '@polkadot/util-crypto/blake2';
import Keyring from '@polkadot/keyring';
import { createPair } from '@polkadot/keyring/pair';

const KEYRING_TYPE = 'sr25519';

export interface KeyPairData {
  phrase: string;
  publicKey: string;
  testnetAddress: string;
  mainnetAddress: string;
}

export function generateKeyPair(): KeyPairData {
  const phrase = mnemonicGenerate();
  const testnetKeyring = new Keyring({ type: KEYRING_TYPE });
  const testnetKeyringPair = testnetKeyring.addFromMnemonic(phrase);
  const mainnetKeyring = new Keyring({ type: KEYRING_TYPE, ss58Format: 7 });
  const mainnetKeyringPair = mainnetKeyring.addFromMnemonic(phrase);

  return {
    phrase,
    publicKey: u8aToHex(testnetKeyringPair.publicKey),
    testnetAddress: testnetKeyringPair.address,
    mainnetAddress: mainnetKeyringPair.address,
  };
}

// Converts EVM address to Substrate address
export function evmConvert(evmAddress = '') {
  try {
    const addr = hexToU8a(evmAddress);
    const data = stringToU8a('evm:');
    const res = blake2AsU8a(u8aConcat(data, addr));

    const mainnetKeyring = new Keyring({ type: 'sr25519', ss58Format: 7 });
    const mainnetPair = createPair(
      { toSS58: mainnetKeyring.encodeAddress, type: 'sr25519' },
      { publicKey: res }
    );

    const convertedMainnetAddress = mainnetPair.address;
    return convertedMainnetAddress;
  } catch (e) {
    return 'error';
  }
}

// Converts Substrate address to EVM address
export function ss58Convert(address = '') {
  const keyring = new Keyring();
  try {
    keyring.addFromAddress(address);
    const publicKey = u8aToHex(keyring.getPublicKeys()[0]);
    return publicKey;
  } catch (e) {
    return 'error';
  }
}

// Converts public key to EVM address
export function publicKeyConvert(publicKey = '') {
  try {
    const testnetKeyring = new Keyring({ type: 'sr25519' });
    const testnetPair = createPair(
      { toSS58: testnetKeyring.encodeAddress, type: 'sr25519' },
      { publicKey: hexToU8a(publicKey) }
    );
    const testnetAddress = testnetPair.address;

    const mainnetKeyring = new Keyring({ type: 'sr25519', ss58Format: 7 });
    const mainnetPair = createPair(
      { toSS58: mainnetKeyring.encodeAddress, type: 'sr25519' },
      { publicKey: hexToU8a(publicKey) }
    );
    const mainnetAddress = mainnetPair.address;

    return {
      testnetAddress,
      mainnetAddress,
    };
  } catch (e) {
    return 'error';
  }
}
