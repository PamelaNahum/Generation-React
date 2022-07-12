import React from "react";
import TarjetaComponent from "./TarjetaComponent";
import FormularioComponent from "./FormularioComponent";

{/* const usuario1 ={
    nombre: 'Joseph',
    apellido:'Joestar',
    edad:'18'
}

const usuario2 ={
    nombre: 'Josuske',
    apellido:'Higashikata',
    edad:'16'
}*/}


const usuarios =[
    {
        key:0,
        nombre: 'Joseph',
        apellido:'Joestar',
        edad:'18'
    },
    {
        key:1,
        nombre: 'Josuske',
        apellido:'Higashikata',
        edad:'16'
    },
    {
        key:2,
        nombre: 'Jonathan',
        apellido:'Higashikata',
        edad:'16'
    }
]


const UsuarioComponent = () => {
    return(
    <div className="container mt-4">
    <div className="row">
      <div className="col-8 ">
        <h1>Lista</h1>
        {
            usuarios.map(u => <TarjetaComponent key={u.key} usuario={u}/>)
        }
        
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