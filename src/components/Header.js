import React from 'react';
import logo from '../assets/image-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header>
    <div className="header-left">
      <img className="logo" src={logo} alt="Logo" />
      <h1>BestKeyboard</h1>
    </div>
    <div className="header-right login">
      <a href="/login" className="profile"><FontAwesomeIcon icon={faSignOutAlt} /></a>
    </div>
  </header>
);

export default Header;