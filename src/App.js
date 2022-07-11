import { Button } from "bootstrap";
import React from "react";

const App = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8 ">
          <h1>Lista</h1>
          
        </div>
        <div className="col">
          <h1>Formulario</h1>
          <form>
            <div class="form-group">
              <label>Nombre tarea</label>
              <input
                type="text"
                class="form-control"
                id="nombre_tarea"
                placeholder="Nombre tarea"
              />
            </div>
            <br/>
            <div class="form-group">
              <label>Descripcion</label>
              <input
                type="text"
                class="form-control"
                id="descripcion"
                placeholder="Descripcion"
              />
            </div>
            <br/>
            <button type="submit" class="btn btn-outline-primary">
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
