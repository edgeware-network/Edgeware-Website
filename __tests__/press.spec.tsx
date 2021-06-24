import { render } from '../test';

import Press from '../pages/press';

describe('Press Page', () => {
  it('Renders press page', async () => {
    const { getByRole } = render(<Press />);

    // Brand assets text
    expect(getByRole('heading', { name: 'Brand Assets' }));
  });
});
