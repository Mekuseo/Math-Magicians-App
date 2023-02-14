import './UI.css';

const Calculator = () => (
  <div className="calculator">
    <div className="calculator__display">0</div>
    <div className="calculator__keys">
      <button
        type="submit"
        className="calculator__key calculator__key--operator"
        value="AC"
      >
        AC
      </button>
      <button
        type="submit"
        className="calculator__key calculator__key--operator"
        value="+/-"
      >
        +/-
      </button>
      <button
        type="submit"
        className="calculator__key calculator__key--operator"
        value="%"
      >
        %
      </button>
      <button
        type="submit"
        className="calculator__key calculator__key--operator"
        value="/"
      >
        &divide;
      </button>
      <button type="submit" className="calculator__key" value="7">
        7
      </button>
      <button type="submit" className="calculator__key" value="8">
        8
      </button>
      <button type="submit" className="calculator__key" value="9">
        9
      </button>
      <button
        type="submit"
        className="calculator__key calculator__key--operator"
        value="X"
      >
        X
      </button>
      <button type="submit" className="calculator__key" value="4">
        4
      </button>
      <button type="submit" className="calculator__key" value="5">
        5
      </button>
      <button type="submit" className="calculator__key" value="6">
        6
      </button>
      <button
        type="submit"
        className="calculator__key calculator__key--operator"
        value="-"
      >
        -
      </button>
      <button type="submit" className="calculator__key" value="1">
        1
      </button>
      <button type="submit" className="calculator__key" value="2">
        2
      </button>
      <button type="submit" className="calculator__key" value="3">
        3
      </button>
      <button
        type="submit"
        className="calculator__key calculator__key--operator"
        value="+"
      >
        +
      </button>
      <button
        type="submit"
        className="calculator__key calculator__key--zero"
        value="0"
      >
        0
      </button>
      <button
        type="submit"
        className="calculator__key calculator__key--decimal"
        value="."
      >
        .
      </button>
      <button
        type="submit"
        className="calculator__key calculator__key--equal"
        value="="
      >
        =
      </button>
    </div>
  </div>
);
export default Calculator;
