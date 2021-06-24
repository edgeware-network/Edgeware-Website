import { screen } from '@testing-library/react'
import { render } from '../test'

import Collectives from '../pages/collectives'

describe('Collectives Page', () => {
  it('Renders collectives with all text sections', async () => {
    const { getByText } = render(<Collectives />)

    // Intro text
    expect(getByText(/Edgeware collectives/))

    // Start your own...
    expect(getByText(/Start your own collective/)).toBeInTheDocument()
  })
})
