/* eslint-disable react/destructuring-assignment */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const handleClick = () => {
    props.clickHandler(props.name);
  };

  const className = [
    'component-button',
    props.orange ? 'orange' : '',
    props.wide ? 'wide' : '',
  ];

  return (
    <button
      className={className.join(' ').trim()}
      onClick={handleClick}
      type="button"
      // style={{ backgroundColor: props.color }}
    >
      {props.name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  // color: PropTypes.string,
};

Button.defaultProps = {
  orange: false,
  wide: false,
  // color: '#f0f0f0',
};

export default Button;
