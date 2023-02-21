import React from 'react';
import PropTypes from 'prop-types';
import './Quotes.css';

function QuoteUI(props) {
  const { quote } = props;

  return (
    <div className="quote-container">
      <div className="quote-box">
        <h2 className="quote-text">{quote}</h2>
      </div>
    </div>
  );
}

QuoteUI.propTypes = {
  quote: PropTypes.string.isRequired,
};

export default QuoteUI;
