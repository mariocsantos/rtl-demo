import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { FavoriteFoodList }  from '../FavoriteFoodList';

describe('FavoriteFoodList', () => {
  it('should render my favorites food', async () => {
    render(<FavoriteFoodList />);
    await waitFor(() => expect(screen.getAllByRole('listitem')).toHaveLength(3));
  });
});
