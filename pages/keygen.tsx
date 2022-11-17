import { KeygenIntro } from 'components/pages/keygen/keygen-intro';
import { KeygenDeposit } from 'components/pages/keygen/keygen-deposit';
import { KeygenWithdraw } from 'components/pages/keygen/keygen-withdraw';
import { KeygenKeypairGenerator } from 'components/pages/keygen/keygen-keypair-generator';
import { KeygenConvertPublicKey } from 'components/pages/keygen/keygen-convert-public-key';
import { KeygenConvertAddress } from 'components/pages/keygen/keygen-convert-address';

export default function Keygen() {
  return (
    <>
      <KeygenIntro />
      <KeygenKeypairGenerator />
      <KeygenConvertPublicKey />
      <KeygenConvertAddress />
      <KeygenDeposit />
      <KeygenWithdraw />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Edgeware Key Generator',
        description: 'Some useful address conversion tools for Edgeware',
      },
    },
  };
}
