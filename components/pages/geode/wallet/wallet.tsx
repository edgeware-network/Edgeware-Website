import * as React from 'react';
import { connectWallet } from '../../../../lib/geode';
import { Button } from '../../../common/button/button';

export default function Wallet() {
  const [address, setAddress] = React.useState<string | undefined>()

  const handleClick = async () => {
    const address = await connectWallet()
    setAddress(address)
  }

  if (address) {
    return (
      <div>
        Connected with <code>{address}</code>
      </div>
    )
  }


  return (
    <Button onClick={handleClick}>Connect your EDG wallet</Button>
  )
}
