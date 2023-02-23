import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  test('renders calculator component', () => {
    render(<Calculator />);

    // const calculatorTitle = screen.getByRole('heading', { name: 'Let us do Some Maths' });

    // expect(calculatorTitle).toBeInTheDocument();

    // const button7 = screen.getByRole('button', { name: '7' });
    // const buttonAdd = screen.getByRole('button', { name: '+' });
    // const buttonEquals = screen.getByRole('button', { name: '=' });

    // fireEvent.click(button7);
    // fireEvent.click(buttonAdd);
    // fireEvent.click(button7);
    // fireEvent.click(buttonEquals);

    // expect(screen.getByTestId('display')).toHaveTextContent('14');
  });
});
