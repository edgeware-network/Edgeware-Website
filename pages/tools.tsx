import { ToolsIntro } from 'components/pages/tools/tools-intro';
import { ToolsEVMDeposit } from 'components/pages/tools/tools-evm-deposit';
import { ToolsEVMWithdrawal } from 'components/pages/tools/tools-evm-withdrawal';
import { ToolsKeypairGenerator } from 'components/pages/tools/tools-keypair-generator';
import { ToolsConvertPublicKey } from 'components/pages/tools/tools-convert-public-key';
import { ToolsConvertAddress } from 'components/pages/tools/tools-convert-address';

export default function ToolsPage() {
  return (
    <>
      <ToolsIntro />
      <ToolsKeypairGenerator />
      <ToolsConvertPublicKey />
      <ToolsConvertAddress />
      <ToolsEVMDeposit />
      <ToolsEVMWithdrawal />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Edgeware Tools',
        description: 'A collection of keygen and address conversion tools for Edgeware',
      },
    },
  };
}
