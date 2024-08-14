import React, { useContext } from "react";
import CartContext from "./CartContext";

const TecladosMecanicos = () => {
    const { dispatch } = useContext(CartContext);

    const handleAddToCart = (product) => {
        dispatch({ type: 'ADD_PRODUCT', product });
        alert('Producto agregado al carrito de compra')
    };

    return (
        <div>
          <div className="banner">
            <img
              className="img"
              src="https://www.muycomputerpro.com/wp-content/uploads/2021/02/logitech_g_pro_x_mechanical_gaming_keyboard.jpg"
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
                        className="card-img-top"
                        src="https://m.media-amazon.com/images/I/51J+ecqGagL._AC_SX300_SY300_.jpg"
                        alt="Logitech G Pro TKL"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Logitech G Pro TKL</h5>
                        <p className="card-text">
                          Teclado mecánico con cable para juegos, interruptor de clic azul GX y teclas retroiluminadas RGB LIGHTSYNC.
                        </p>
                        <h5>Precio: $59.99</h5>
                        <button
                          onClick={() => handleAddToCart({ title: 'Logitech G Pro TKL', price: 59.99 })}
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
                        src="https://m.media-amazon.com/images/I/71OAwYenQUL._AC_SX466_.jpg"
                        alt="Razer BlackWidow V3 TKL"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Razer BlackWidow V3 TKL</h5>
                        <p className="card-text">
                          Teclado mecánico para juegos: interruptores mecánicos amarillos - lineal y silencioso - Iluminación Chroma RGB
                        </p>
                        <h5>Precio: $79.99</h5>
                        <button
                          onClick={() => handleAddToCart({ title: 'Razer BlackWidow V3 TKL', price: 79.99 })}
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
                        src="https://m.media-amazon.com/images/I/61f+pqReaHL._AC_SX466_.jpg"
                        alt="CORSAIR K60 RGB TKL RGB"
                      />
                      <div className="card-body">
                        <h5 className="card-title">CORSAIR K60 RGB TKL RGB</h5>
                        <p className="card-text">
                          Teclado óptico mecánico para juegos con cable - Interruptores OPX - Teclas de policarbonato - Compatible con iCUE.
                        </p>
                        <h5>Precio: $89.99</h5>
                        <button
                          onClick={() => handleAddToCart({ title: 'CORSAIR K60 RGB TKL RGB', price: 89.99 })}
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
                        src="https://m.media-amazon.com/images/I/71+hr28liUL._AC_SX466_.jpg"
                        alt="HyperX Alloy Origins"
                      />
                      <div className="card-body">
                        <h5 className="card-title">HyperX Alloy Origins</h5>
                        <p className="card-text">
                          Teclado mecánico para juegos, interruptor acuático, táctil, RGB, NGENUITY, teclas retroiluminadas, ghosting
                        </p>
                        <h5>Precio: $59.99</h5>
                        <button
                          onClick={() => handleAddToCart({ title: 'HyperX Alloy Origins', price: 59.99 })}
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
              <h3>Teclados Wireless</h3>
              <div className="container mt-4">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="https://m.media-amazon.com/images/I/51O52xSYQ5L._AC_SX466_.jpg"
                        alt="Logitech MX Keys Mini"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Logitech MX Keys Mini</h5>
                        <p className="card-text">
                          Teclado inalámbrico minimalista y ergonómico para mayor comodidad y precisión.
                        </p>
                        <h5>Precio: $89.99</h5>
                        <button
                          onClick={() => handleAddToCart({ title: 'Logitech MX Keys Mini', price: 89.99 })}
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
                        src="https://m.media-amazon.com/images/I/61c+Yg9r-3L._AC_SX466_.jpg"
                        alt="Razer Pro Type Ultra"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Razer Pro Type Ultra</h5>
                        <p className="card-text">
                          Teclado inalámbrico mecánico silencioso con interruptores amarillos, ergonomía avanzada y retroiluminación blanca.
                        </p>
                        <h5>Precio: $169.99</h5>
                        <button
                          onClick={() => handleAddToCart({ title: 'Razer Pro Type Ultra', price: 169.99 })}
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
                        src="https://m.media-amazon.com/images/I/61fsryQ2CpL._AC_SX466_.jpg"
                        alt="Keychron K8 Pro"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Keychron K8 Pro</h5>
                        <p className="card-text">
                          Teclado mecánico inalámbrico con interruptores intercambiables, retroiluminación RGB y compatibilidad con múltiples dispositivos.
                        </p>
                        <h5>Precio: $99.99</h5>
                        <button
                          onClick={() => handleAddToCart({ title: 'Keychron K8 Pro', price: 99.99 })}
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
                        src="https://m.media-amazon.com/images/I/71vgqk5lm4L._AC_SX466_.jpg"
                        alt="Royal Kludge RK61"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Royal Kludge RK61</h5>
                        <p className="card-text">
                          Teclado mecánico inalámbrico compacto con interruptores rojos, iluminación RGB y conexión Bluetooth.
                        </p>
                        <h5>Precio: $49.99</h5>
                        <button
                          onClick={() => handleAddToCart({ title: 'Royal Kludge RK61', price: 49.99 })}
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
}

export default TecladosMecanicos;