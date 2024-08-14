import React, { useContext } from "react";
import CartContext from "./CartContext";

const TecladosCustom = () => {
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
              src="https://www.profesionalreview.com/wp-content/uploads/2022/03/keychron-q1.jpg"
              alt="Banner"
            />
          </div>
      
          <div className="container">
            <div className="TecladosWired">
              <h3>Teclados Custom Yunzii</h3>
              <div className="container mt-4">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="https://m.media-amazon.com/images/I/61zZEjhB2DL._AC_SX679_.jpg"
                        alt="YUNZII AL66"
                      />
                      <div className="card-body">
                        <h5 className="card-title">YUNZII AL66</h5>
                        <p className="card-text">
                          Teclado mecánico inalámbrico, 65% de control de perilla, teclado de aluminio para juegos BT/2.4G/interruptores prelubricados intercambiables en caliente, teclado RGB.
                        </p>
                        <h5>Precio: $89.99</h5>
                        <button
                          onClick={() => handleAddToCart({ title: 'YUNZII AL66', price: 89.99 })}
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
                        src="https://m.media-amazon.com/images/I/61I74tHG-hL._AC_SX679_PIbundle-82,TopRight,0,0_SH20_.jpg"
                        alt="YUNZII YZ75"
                      />
                      <div className="card-body">
                        <h5 className="card-title">YUNZII YZ75</h5>
                        <p className="card-text">
                          Teclado mecánico inalámbrico para juegos 75% intercambiable en caliente, retroiluminación RGB, BT5.0/2.4G/USB-C, teclas subPBT.
                        </p>
                        <h5>Precio: $74.99</h5>
                        <button
                          onClick={() => handleAddToCart({ title: 'YUNZII YZ75', price: 74.99 })}
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
                        src="https://m.media-amazon.com/images/I/61TGv5THrIL._AC_SX466_.jpg"
                        alt="YUNZII B75 PRO"
                      />
                      <div className="card-body">
                        <h5 className="card-title">YUNZII B75 PRO</h5>
                        <p className="card-text">
                          Teclado mecánico inalámbrico, 75% junta de teclado para juegos, teclado personalizado de intercambio en caliente con perilla, interruptores prelubricados RGB, Bluetooth/Tipo-C/2.4G.
                        </p>
                        <h5>Precio: $79.99</h5>
                        <button
                          onClick={() => handleAddToCart({ title: 'YUNZII B75 PRO', price: 79.99 })}
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
                        src="https://m.media-amazon.com/images/I/61JzW8PAQFL._AC_SX466_.jpg"
                        alt="YUNZII YZ98"
                      />
                      <div className="card-body">
                        <h5 className="card-title">YUNZII YZ98</h5>
                        <p className="card-text">
                          Teclado mecánico de 99 teclas intercambiable en caliente BT5.0/2.4G/USB-C para juegos inalámbricos con relleno de sonido de 5 capas NKRO 98% 1800 Layout con RGB.
                        </p>
                        <h5>Precio: $82.99</h5>
                        <button
                          onClick={() => handleAddToCart({ title: 'YUNZII YZ98', price: 82.99 })}
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
              <h3>Teclados EPOMAKER</h3>
              <div className="container mt-4">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src="https://m.media-amazon.com/images/I/614U66QoZQL._AC_SX679_.jpg"
                        alt="EPOMAKER Ajazz AK820 Pro"
                      />
                      <div className="card-body">
                        <h5 className="card-title">EPOMAKER Ajazz AK820 Pro</h5>
                        <p className="card-text">
                          Teclado mecánico 75%, teclado para juegos montado en junta con pantalla inteligente TFT y perilla, Bluetooth 5.1/2.4G inalámbrico/teclado personalizado con cable tipo C.
                        </p>
                        <h5>Precio: $55.99</h5>
                        <button
                          onClick={() => handleAddToCart({ title: 'EPOMAKER Ajazz AK820 Pro', price: 55.99 })}
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
                        src="https://m.media-amazon.com/images/I/61YZkEqwhaL._AC_SX300_SY300_QL70_FMwebp_.jpg"
                        alt="EPOMAKER EK68"
                      />
                      <div className="card-body">
                        <h5 className="card-title">EPOMAKER EK68</h5>
                        <p className="card-text">
                          Teclado inalámbrico 65% para juegos, teclado mecánico con junta intercambiable en caliente con perilla de metal, Bluetooth 5.0/2.4Ghz inalámbrico/teclado personalizado con cable USB-C
                        </p>
                        <h5>Precio: $89.99</h5>
                        <button
                          onClick={() => handleAddToCart({ title: 'EPOMAKER EK68', price: 89.99 })}
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
                        src="https://m.media-amazon.com/images/I/61MC8BK0w0L._AC_SX679_.jpg"
                        alt="AULA F75 Pro"
                      />
                      <div className="card-body">
                        <h5 className="card-title">AULA F75 Pro</h5>
                        <p className="card-text">
                          Teclado mecánico inalámbrico 75%, teclado personalizado intercambiable en caliente, retroiluminación RGB, interruptores Reaper prelubricados, teclas PBT
                        </p>
                        <h5>Precio: $82.99</h5>
                        <button
                          onClick={() => handleAddToCart({ title: 'AULA F75 Pro', price: 82.99 })}
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
                        src="https://m.media-amazon.com/images/I/61EtsD0mfLL._AC_SX466_.jpg"
                        alt="EPOMAKER x Aula F75"
                      />
                      <div className="card-body">
                        <h5 className="card-title">EPOMAKER x Aula F75</h5>
                        <p className="card-text">
                            Teclado mecánico inalámbrico 75%, teclado para juegos con perilla y pantalla LED, retroiluminación RGB, inalámbrico/BT5.0/2.4G/teclado para juegos con cable
                        </p>
                        <h5>Precio: $79.99</h5>
                        <button
                            onClick={() => handleAddToCart({ title: 'EPOMAKER x Aula F75', price: 79.99 })}
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

export default TecladosCustom;