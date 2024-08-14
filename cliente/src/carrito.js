import React, { useContext } from 'react';
import CartContext from './CartContext';

const Carrito = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className='container-fluid vw-100 vh-100'>
      <div className="col-md-8 col-lg-6 mx-auto">
        <div className="card">
          <div className="card-header bg-custom text-white">
            <h1 className="mb-0">Carrito de compras</h1>
          </div>
          <div className="card-body">
            {cart.map((item, index) => (
              <div key={index} className="mb-3">
                <label className="form-label">Nombre del producto: {item.title}</label>
                <p>Precio del producto: ${item.price}</p>
              </div>
            ))}
            <div className="d-flex justify-content-between">
              <button className="btn btn-success" type="submit">Finalizar compra</button>
              <button className="btn btn-secondary" type='button'>Cancelar Compra</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
