import React from "react";

const TarjetaComponent = () => {
    return(
    <div className = "card">
    <div className = "card-body">
      <h3 className="card-title">Nombre Apellido</h3>
      <p>Edad: 25</p>
      <hr/>
      <div className="d-flex justify-content-end">
        <button className="btn btn-sm btn-outline-primary me-2">Editar</button>
        <button className="btn btn-sm btn-outline-danger">Eliminar</button>
      </div>
    </div>
  </div>);
}

export default TarjetaComponent;
