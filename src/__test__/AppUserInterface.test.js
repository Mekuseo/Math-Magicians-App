import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('test calculator user interaction', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('Calculator'));

    const calculatorTitle = screen.getAllByText('Math Magicians');
    expect(calculatorTitle.length).toBe(1);

    const button7 = screen.getByRole('button', { name: '7' });
    const buttonAdd = screen.getByRole('button', { name: '+' });
    const buttonEquals = screen.getByRole('button', { name: '=' });

    fireEvent.click(button7);
    fireEvent.click(buttonAdd);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);

    expect(screen.getByTestId('display').textContent).toBe('14');
  });
  it('test nav bar Home button interaction', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('Home'));
    expect(screen.getAllByText('Math Magicians').length).toBe(2);
  });

  it('test nav bar Calculator button interaction', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('Calculator'));
    expect(screen.getAllByText('Let us do Some Maths').length).toBe(1);
  });
  it('test nav bar Quote button interaction', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('Quote'));
    expect(screen.getAllByText('Read a random math-related quote').length).toBe(1);
  });
});
