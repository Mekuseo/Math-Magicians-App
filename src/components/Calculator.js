import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from './logic/Calculate';
import './Calculator.css';

function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setState((prevState) => calculate(prevState, buttonName));
  };

  const { total, next } = state;
  const displayValue = next || total || '0';

  return (
    <div className="component-app">
      <Display value={displayValue} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default Calculator;
