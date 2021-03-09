import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { FavoriteFoodSearch }  from '../FavoriteFoodSearch';

expect.extend(toHaveNoViolations)

describe('FavoriteFoodSearch', () => {
  it('should not fail any accessibility tests', async () => { 
    const { container } = render(<FavoriteFoodSearch />); 
    expect(await axe(container)).toHaveNoViolations();
  });
});
