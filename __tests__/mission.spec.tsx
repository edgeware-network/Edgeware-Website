import { screen } from '@testing-library/react'
import { render } from '../test'

import Mission from '../pages/mission'

describe('Mission Page', () => {
  it('Renders mission page', async () => {
    const { getByText } = render(<Mission />)

    // Intro text
    expect(getByText(/Mission/))
  })
})
