import React, { useContext, useEffect, useState } from 'react';
import CartContext from './CartContext';
import { useUser } from './App';

const Carrito = () => {
  const { cart, dispatch } = useContext(CartContext);
  const { userID } = useUser();
  const [compras, setCompras] = useState([]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    const fetchCompras = async () => {
      try {
        const response = await fetch(`http://localhost:5000/compras/${userID}`);
        const data = await response.json();
        setCompras(data);
      } catch (error) {
        console.error('Error al obtener las compras:', error);
      }
    };

    fetchCompras();
  }, [userID]);

  const handleFinalizarCompra = async () => {
    try {
      const response = await fetch('http://localhost:5000/guardar-compra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID,
          productos: cart,
          total: total.toFixed(2),
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('Compra finalizada y guardada exitosamente.');
        dispatch({ type: 'CLEAR_CART' });

        // Refrescar la lista de compras después de guardar una nueva
        const response = await fetch(`http://localhost:5000/compras/${userID}`);
        const data = await response.json();
        setCompras(data);
      } else {
        alert('Hubo un problema al guardar la compra.');
      }

    } catch (error) {
      console.error('Error al finalizar la compra:', error);
      alert('Ocurrió un error al guardar la compra.');
    }
  };

  const handleEliminarProducto = (index) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: index });
  };

  return (
    <div className='container-fluid vw-200 vh-100'>
      <div className="col-md-8 col-lg-6 mx-auto">
        <div className="card">
          <div className="card-header bg-custom text-white">
            <h1 className="mb-0">Carrito de compras</h1>
          </div>
          <div className="card-body">
            {cart.map((item, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <label className="form-label mb-0">Nombre del producto: {item.title}</label>
                  <p className="mb-0">Precio del producto: ${item.price}</p>
                </div>
                <button
                  className="btn btn-danger ml-3"
                  onClick={() => handleEliminarProducto(index)}
                >
                  Eliminar
                </button>
              </div>
            ))}
            <hr />
            <div className="d-flex justify-content-between">
              <h4>Total:</h4>
              <h4>${total.toFixed(2)}</h4>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <button
                className="btn btn-success"
                type="button"
                onClick={handleFinalizarCompra}
              >
                Finalizar compra
              </button>
            </div>
          </div>
        </div>

        <div className='card mt-4'>
          <div className='card-header bg-custom text-white'>
            <h1 className='mb-0'>Orden de compra</h1>
          </div>
          <div className='card-body'>
            {compras.length > 0 ? (
              compras.map((compra, index) => (
                <div key={index} className="mb-3">
                  <h5>Compra #{compra.id}</h5>
                  <p><strong>Fecha:</strong> {new Date(compra.fecha).toLocaleString()}</p>
                  <p><strong>Total:</strong> ${compra.total}</p>
                  <p><strong>Productos:</strong></p>
                  <ul>
                    {JSON.parse(compra.productos).map((producto, i) => (
                      <li key={i}>{producto.title} - ${producto.price}</li>
                    ))}
                  </ul>
                  <hr />
                </div>
              ))
            ) : (
              <p>No has realizado ninguna compra.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
