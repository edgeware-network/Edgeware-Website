
import * as React from 'react';

import { H1, H2, P } from '../components/common/typography/typography';
import { Section } from '../components/common/section/section';
import { KeyPairGenerator } from '../components/pages/keygen/keypair-generator/keypair-generator';
import { AddressConverter } from '../components/pages/keygen/address-converter/address-converter';

export default function Keygen() {
  return (
    <>
      <Section id="intro" width="normal" gap="narrow">
        <div>
          <H1 size="1">Edgeware Key Generator</H1>
          <P>
            This page generates public/private keypairs, which you can use to receive EDG from the Edgeware lockdrop.
            <br/>
            Note: The preferred way to generate a private key is using the command line, on an air-gapped computer.
          </P>
        </div>
      </Section>

      <Section id="keypair" width="normal" gap="standard">
        <H2>Generate keypair</H2>
        <P>
          Please keep in mind that this method to generate a public/private key pair is insecure!<br/>
          The preferred way to generate a private key is using the command line or polkadot-js, on an air-gapped computer.
        </P>

        <KeyPairGenerator />
      </Section>

      <Section id="convert-pk" width="normal" gap="standard">
        <H2>Convert public key to address</H2>
        <P>If you have a public key (0x1234...), you can use this tool to convert it into a mainnet/testnet address. </P>

        <AddressConverter type="public-key" />
      </Section>

      <Section id="convert-ss58" width="normal" gap="standard">
        <H2>Convert address to public key</H2>
        <P> If you have a testnet EDG address (5G7Agn...), you can use this tool to convert it into a public key (0x1234...)</P>

        <AddressConverter type="ss58-address" />
      </Section>

      <Section id="convert-evm" width="normal" gap="standard">
        <H2>Convert Metamask/EVM address to mainnet address</H2>
        <P>If you have an Metamask EVM address (e.g. 0x1234...), you can use this tool to convert it into a mainnet address (e.g. i76Ux...) to use with polkadot-js.</P>

        <AddressConverter type="evm-address" />
      </Section>

    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Edgeware Key Generator',
        description: '',
      },
    },
  };
}
