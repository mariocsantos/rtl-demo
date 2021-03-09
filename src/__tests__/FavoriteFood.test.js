import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FavoriteFood }  from '../FavoriteFood';

describe('FavoriteFood', () => {
  it('should disable add food button', () => {
    render(<FavoriteFood />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should enable add food button', () => {
    render(<FavoriteFood />);
    const input = screen.getByLabelText(/Favorite food/i);
    userEvent.type(input, 'Taco 🌮');
    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('should submit form', () => {
    const onSubmitMock = jest.fn();
    render(<FavoriteFood onSubmit={onSubmitMock} />);

    const input = screen.getByLabelText(/Favorite food/i);
    userEvent.type(input, 'Taco 🌮');

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(onSubmitMock).toHaveBeenCalled();
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith('Taco 🌮');
  });
});
