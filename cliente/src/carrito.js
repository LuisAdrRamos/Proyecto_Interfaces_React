import React from "react";

const carrito = () =>{  
    return(
        <div className='container-fluid vw-100 vh-100'>
            <div className="col-md-8 col-lg-6 mx-auto">
                <div className="card">
                    <div className="card-header bg-custom text-white">
                        <h1 className="mb-0">Carrito de compras</h1>
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <label className="form-label">Nombre del producto</label>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Precio del producto</label>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Cantidad del producto</label>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Total del producto</label>
                        </div>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-success" type="submit">Finalizar compra</button>
                            <button className="btn btn-secondary" type='button'>Cancelar Compra</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-8 col-lg-6 mx-auto">
                <div className="card">
                    <div className="card-header bg-custom text-white">
                        <h1 className="mb-0">Ordenes de compra</h1>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default carrito;