import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ButtonPanel from '../ButtonPanel';
import Button from '../Button';

describe('ButtonPanel', () => {
  it('should render all buttons', () => {
    const clickHandler = jest.fn();
    const { getByText } = render(<ButtonPanel clickHandler={clickHandler} />);

    const buttons = [
      ['AC', '+/-', '%', '/'],
      ['7', '8', '9', '*'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];

    buttons.forEach((row) => {
      row.forEach((buttonName) => {
        const button = getByText(buttonName);
        expect(button).toBeInTheDocument();
      });
    });
  });

  it('should handle button clicks', () => {
    const clickHandler = jest.fn();
    const { getByText } = render(<ButtonPanel clickHandler={clickHandler} />);

    const button = getByText('1');
    fireEvent.click(button);

    expect(clickHandler).toHaveBeenCalledWith('1');
  });
});
