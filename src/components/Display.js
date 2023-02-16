/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

function Display({ value }) {
  return <div className="display">{value}</div>;
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
