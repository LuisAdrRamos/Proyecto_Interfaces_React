import React from 'react';

const Card = ({ imgSrc, title, text }) => (
  <div className="col-md-4">
    <div className="card">
      <img src={imgSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">Ver Catalogo</a>
      </div>
    </div>
  </div>
);

export default Card;
