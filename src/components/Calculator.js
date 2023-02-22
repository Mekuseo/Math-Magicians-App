import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from './logic/Calculate';
import NavBar from './pages/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import QuotesLogic from './pages/Quotes/QuotesLogic';
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
    <Router>
      <div className="calculator-page">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/calculator"
            element={(
              <div className="calculator-container">
                <h1>Let us do Some Maths</h1>
                <div className="calculator-display">
                  <Display value={displayValue} data-testid="display" />
                  <ButtonPanel clickHandler={handleClick} />
                </div>
              </div>
            )}
          />
          <Route path="/quote" element={<QuotesLogic />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Calculator;
