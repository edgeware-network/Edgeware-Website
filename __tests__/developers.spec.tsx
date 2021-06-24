import { render } from '../test';

import Developers from '../pages/developers';

describe('Developers Page', () => {
  it('Renders developers with all text sections', async () => {
    const { getByText } = render(<Developers />);

    // Intro text
    expect(getByText(/Build governance focused smart contracts with Edgeware/));

    // Guild
    expect(getByText(/Builders Guild/)).toBeInTheDocument();

    // Tech features
    expect(getByText(/Technical features/)).toBeInTheDocument();

    // Get started
    expect(getByText(/Get Started on Edgeware/)).toBeInTheDocument();
  });
});
