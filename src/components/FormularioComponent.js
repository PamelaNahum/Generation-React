import React from "react";

const FormularioComponent = () => {
    return(
    <form>
        <div className="form-group">
          <label>Nombre</label>
          <input
          type="text"
          className="form-control"
          id="nombre"
          placeholder="Nombre"
          />
          <br/>
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <input
          type="text"
          className="form-control"
          id="apellido"
          placeholder="Apellido"
          />
          <br/>
        </div>
        <div className="form-group">
          <label>Edad</label>
          <input
          type="text"
          className="form-control"
          id="edad"
          placeholder="Edad"
          />
          <br/>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          ></input>
          <br/>
        </div>
        <button type="submit" className="btn btn-outline-primary">Crear usuario</button>
      </form>
      );
}

export default FormularioComponent;