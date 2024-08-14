import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg" style={{ backgroundColor: '#002856' }}>
    <Link className="navbar-brand" to="/">
      <FontAwesomeIcon icon={faHome} />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className='nav-link' to={'/tecladosOficina'}>Teclados de Oficina</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to={'/tecladosMecanicos'}>Teclados Mecanico</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to={'/tecladosCustom'}>Teclados Custom</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
        <button className="btn btn-outline-success" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
      </form>
    </div>
  </nav>
);

export default NavBar;