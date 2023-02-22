import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <h1 className="nav-header">Math Magicians</h1>
      <ul className="nav-list">
        <li className="border-line"><Link to="/home">Home</Link></li>
        <li className="border-line"><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/quote">Quote</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
