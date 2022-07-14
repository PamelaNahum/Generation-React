import React,{useState} from "react";
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


const initialUsuarios =[
    {
        key:0,
        nombre: 'Joseph',
        apellido:'Joestar',
        edad:'18',
        password: '1234'
    },
    {
        key:1,
        nombre: 'Josuske',
        apellido:'Higashikata',
        edad:'16',
        password: '1234'
    },
    {
        key:2,
        nombre: 'Jonathan',
        apellido:'Higashikata',
        edad:'16',
        password: '1234'
    }
]


const UsuarioComponent = () => {

    const [usuarios, setUsuarios] = useState(initialUsuarios);
    {/* const state = useState(initialUsuarios);
    state[0]=initialUsuarios
    state[1]= funcion que nos permite hacer cambios */}
    const [usuarioEditado, setUsuarioEditado]= useState(null);

    const tarjetaDelete =(usuarioKey)=>{
        const changeUsuarios = usuarios.filter(u => u.key !== usuarioKey)
        setUsuarios(changeUsuarios)
    }
    const usuarioAdd =(usuario)=>{
        const addUsuarios = [
            ...usuarios,
            usuario
        ]
        setUsuarios(addUsuarios)
    }

    const usuarioEdit=(usuarioEditado)=>{
        const changeUsuarios = usuarios.map(usuario => (usuario.key === usuarioEditado.key ? usuarioEditado : usuario))
        setUsuarios(changeUsuarios)
    }

    return(
    <div className="container mt-4">
    <div className="row">
      <div className="col-8 ">
        <h1>Lista</h1>
        {
            usuarios.map(u =>
                <TarjetaComponent 
                key={u.key} 
                usuario={u} 
                tarjetaDelete={tarjetaDelete}
                setUsuarioEditado={setUsuarioEditado}/>)
        }
        
      </div>
      <div className="col">
        <h1>Formulario</h1>
        <FormularioComponent 
        usuarioAdd={usuarioAdd} 
        usuarioEditado={usuarioEditado}
        usuarioEdit={usuarioEdit}/>
        
      </div>
    </div>
  </div>
  );
}

export default UsuarioComponent;