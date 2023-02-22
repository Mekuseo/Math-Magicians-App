import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Display from '../Display';

describe('Display', () => {
  it('renders the value passed as prop', () => {
    const { getByText } = render(<Display value="123" />);
    const display = getByText('123');
    expect(display).toBeInTheDocument();
  });
});
