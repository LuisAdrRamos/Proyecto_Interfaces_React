import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg" style={{ backgroundColor: '#002856' }}>
    <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faHome} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" href="/tecladosOficina">Teclados de Oficina</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/tecladosMecanicos">Teclados Mecanicos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/tecladosCustom">Teclados Custom</a>
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