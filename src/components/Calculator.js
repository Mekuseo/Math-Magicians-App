/* eslint-disable no-unused-vars */
import React from 'react';
import './UI.css';
import calculate from './logic/Calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      // operation: null,
    };
  }

  handleClick = (event) => {
    const { value } = event.target;
    this.setState((prevState) => calculate(prevState, value));
  }

  render() {
    const { total, next } = this.state;
    const displayValue = next || total || '0';
    return (
      <div className="calculator">
        <div className="calculator__display">{displayValue}</div>
        <div className="calculator__keys">
          <button
            type="submit"
            className="calculator__key calculator__key--operator"
            value="AC"
            onClick={this.handleClick}
          >
            AC
          </button>
          <button
            type="submit"
            className="calculator__key calculator__key--operator"
            value="+/-"
            onClick={this.handleClick}
          >
            +/-
          </button>
          <button
            type="submit"
            className="calculator__key calculator__key--operator"
            value="%"
            onClick={this.handleClick}
          >
            %
          </button>
          <button
            type="submit"
            className="calculator__key calculator__key--operator"
            value="/"
            onClick={this.handleClick}
          >
            /
          </button>
          <button type="submit" className="calculator__key" value="7" onClick={this.handleClick}>
            7
          </button>
          <button type="submit" className="calculator__key" value="8" onClick={this.handleClick}>
            8
          </button>
          <button type="submit" className="calculator__key" value="9" onClick={this.handleClick}>
            9
          </button>
          <button
            type="submit"
            className="calculator__key calculator__key--operator"
            value="*"
            onClick={this.handleClick}
          >
            *
          </button>
          <button type="submit" className="calculator__key" value="4" onClick={this.handleClick}>
            4
          </button>
          <button type="submit" className="calculator__key" value="5" onClick={this.handleClick}>
            5
          </button>
          <button type="submit" className="calculator__key" value="6" onClick={this.handleClick}>
            6
          </button>
          <button
            type="submit"
            className="calculator__key calculator__key--operator"
            value="-"
            onClick={this.handleClick}
          >
            -
          </button>
          <button type="submit" className="calculator__key" value="1" onClick={this.handleClick}>
            1
          </button>
          <button type="submit" className="calculator__key" value="2" onClick={this.handleClick}>
            2
          </button>
          <button type="submit" className="calculator__key" value="3" onClick={this.handleClick}>
            3
          </button>
          <button
            type="submit"
            className="calculator__key calculator__key--operator"
            value="+"
            onClick={this.handleClick}
          >
            +
          </button>
          <button
            type="submit"
            className="calculator__key calculator__key--zero"
            value="0"
            onClick={this.handleClick}
          >
            0
          </button>
          <button
            type="submit"
            className="calculator__key calculator__key--decimal"
            value="."
            onClick={this.handleClick}
          >
            .
          </button>
          <button
            type="submit"
            className="calculator__key calculator__key--equal"
            value="="
            onClick={this.handleClick}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
