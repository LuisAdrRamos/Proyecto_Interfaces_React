import React, { useContext } from 'react';
import CartContext from './CartContext';

const TecladosOficina = () => {
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    alert('Podructo agragado al carrito de compra');
  };

  return (
    <div>
      <div className="banner">
        <img
          className="img"
          src="https://www.info-computer.com/img/cms/Blog%20Camila%20Sa/Teclado%20para%20Escribir%20o%20Trabajar%20en%20Oficina.jpg"
          alt="Banner"
        />
      </div>

      <div className="container">
        <div className="TecladosWired">
          <h3>Teclados USB/Wired</h3>
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://m.media-amazon.com/images/I/81cg9myC9kL._AC_SX466_.jpg"
                    className="card-img-top"
                    alt="Amazon Basics"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Amazon Basics</h5>
                    <p className="card-text">
                      Teclado USB con cable de perfil bajo con diseño de EE. UU. Negro mate
                    </p>
                    <h5>Precio: $19.99</h5>
                    <button
                      onClick={() => handleAddToCart({ title: 'Amazon Basics', price: 19.99 })}
                      className="btn btn-primary"
                    >
                      Añadir al Carrito
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://m.media-amazon.com/images/I/61VemcsGNBL._AC_SX466_.jpg"
                    className="card-img-top"
                    alt="Lenovo Preferred Pro II"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Lenovo Preferred Pro II</h5>
                    <p className="card-text">
                      Teclado USB externo con cable. Producto al por menor sellado de fábrica para EE. UU., negro
                    </p>
                    <h5>Precio: $19.99</h5>
                    <button
                      onClick={() => handleAddToCart({ title: 'Lenovo Preferred Pro II', price: 19.99 })}
                      className="btn btn-primary"
                    >
                      Añadir al Carrito
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    src="https://m.media-amazon.com/images/I/61tB3MA5hRL._AC_SX466_.jpg"
                    className="card-img-top"
                    alt="Teclado CHERRY Stream"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Teclado CHERRY Stream</h5>
                    <p className="card-text">
                      Teclado con cable USB SX. Pulsación de teclas silenciosa para oficina en casa, trabajo o computadora personal. Negro
                    </p>
                    <h5>Precio: $29.99</h5>
                    <button
                      onClick={() => handleAddToCart({ title: 'Teclado CHERRY Stream', price: 29.99 })}
                      className="btn btn-primary"
                    >
                      Añadir al Carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="TecladosWireless">
          <h3>Teclados Bluetooth/Wireless</h3>
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://m.media-amazon.com/images/I/61FKpihhZaL._AC_SX466_.jpg"
                    alt="Teclado MEETION wireless"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Teclado MEETION wireless</h5>
                    <p className="card-text">
                      Teclado inalámbrico para Mac, multidispositivo delgado Bluetooth recargable de bajo perfil Apple Layout
                    </p>
                    <h5>Precio: $19.99</h5>
                    <button
                      onClick={() => handleAddToCart({ title: 'Teclado MEETION wireless', price: 19.99 })}
                      className="btn btn-primary"
                    >
                      Añadir al Carrito
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://m.media-amazon.com/images/I/61cQPww5CUL._AC_SX466_.jpg"
                    alt="Teclado Macally Mini Bluetooth"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Teclado Macally Mini Bluetooth</h5>
                    <p className="card-text">
                      Teclado Bluetooth para Mac - Teclado multidispositivo premium - Teclado inalámbrico compatible con Apple
                    </p>
                    <h5>Precio: $34.99</h5>
                    <button
                      onClick={() => handleAddToCart({ title: 'Teclado Macally Mini Bluetooth', price: 34.99 })}
                      className="btn btn-primary"
                    >
                      Añadir al Carrito
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://m.media-amazon.com/images/I/51BOC78+sjL._AC_SX679_.jpg"
                    alt="Teclado Arteck"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Teclado Arteck</h5>
                    <p className="card-text">
                      Teclado inalámbrico 2.4G de acero inoxidable ultra delgado de tamaño completo con teclado numérico
                    </p>
                    <h5>Precio: $36.99</h5>
                    <button
                      onClick={() => handleAddToCart({ title: 'Teclado Arteck', price: 36.99 })}
                      className="btn btn-primary"
                    >
                      Añadir al Carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TecladosOficina;
