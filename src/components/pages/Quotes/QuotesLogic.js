import React, { useState } from 'react';
import mathQuotes from './Quotes';
import QuoteUI from './QuoteUI';
import './Quotes.css';

function QuotesLogic() {
  const [quote, setQuote] = useState('');

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * mathQuotes.length);
    setQuote(mathQuotes[randomIndex]);
  };

  return (
    <div className="quote-page-container">
      <button type="submit" onClick={handleClick} className="quote-button">Read a random math-related quote</button>
      <QuoteUI quote={quote} />
    </div>
  );
}

export default QuotesLogic;
