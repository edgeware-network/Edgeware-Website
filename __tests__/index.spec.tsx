import { fireEvent, screen } from '@testing-library/react'
import { render } from '../test'

import Home from '../pages/index'

describe('Homepage', () => {
  it('Renders homepage with all text sections', async () => {
    const { getByText } = render(<Home />)

    // HERO (async check due to animated text component render)
    await screen.findByText(/What will you/)

    // Intro
    expect(getByText(/Your blockchain project starts here/)).toBeInTheDocument()

    // Features
    expect(getByText(/The best place to/)).toBeInTheDocument()

    // Collective
    expect(getByText(/Find your people/)).toBeInTheDocument()

    // Structure
    // expect(getByText(/A crypto-native organizational structure/)).toBeInTheDocument()

    // Token
    expect(getByText(/An introduction to the/)).toBeInTheDocument()

    // Build
    expect(getByText(/Want to build on the Edgeware ecosystem/)).toBeInTheDocument()

    // Mentions
    expect(getByText(/Mentions from the cryptoverse/)).toBeInTheDocument()
  })

  it('Renders the "Get Started" modal', async () => {
    render(<Home />)

    const button = screen.getByRole('button', { name: 'Start your journey' })
    fireEvent.click(button)

    // check if modal actually appeared
    await screen.findByText(/Join the Conversation/)
    await screen.findByText(/Browse Collectives/)
    await screen.findByText(/Start Developing/)
  })
})
