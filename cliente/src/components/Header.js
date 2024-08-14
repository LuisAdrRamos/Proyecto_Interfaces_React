import React from 'react';
import logo from '../assets/image-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="header-left">
      <img className="logo" src={logo} alt="Logo" />
      <h1>BestKeyboard</h1>
    </div>
    <div className="header-right login">
      <Link to="/perfil" className="profile">
        <FontAwesomeIcon icon={faUser} />
      </Link>
      <Link to="/carrito" className="cart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
      <Link to="/login" className="logout">
        <FontAwesomeIcon icon={faSignOutAlt} />
      </Link>
    </div>
  </header>
);

export default Header;
