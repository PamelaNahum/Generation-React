import React from "react";
import TarjetaComponent from "./TarjetaComponent";
import FormularioComponent from "./FormularioComponent";


const UsuarioComponent = () => {
    return(
    <div className="container mt-4">
    <div className="row">
      <div className="col-8 ">
        <h1>Lista</h1>
        <TarjetaComponent/>
        
      </div>
      <div className="col">
        <h1>Formulario</h1>
        <FormularioComponent/>
        
      </div>
    </div>
  </div>
  );
}

export default UsuarioComponent;