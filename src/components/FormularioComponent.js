import React, {useState, useEffect} from "react";

const initialValues =[
  {
    key:'',
    nombre:'',
    apellido:'',
    edad:'', 
    password:''
  }
]

const FormularioComponent = ({usuarioAdd, usuarioEditado, usuarioEdit}) => {
  const [values, setValues] = useState(initialValues);
  const {key, nombre, apellido, edad, password}= values;

  useEffect( 
    ()=>{
      if(usuarioEditado !== null){
        setValues(usuarioEditado)
      }
    }
    ,[usuarioEditado]);

    {/*useEffect(accion que debe hacer, [estado del cual debe estar pendiente])*/}

  const handleInputChange=(e)=>{
    
    const changedFormValue ={
      ...values, 
      [e.target.name]:e.target.value
      //key:key
    }
    setValues(changedFormValue)
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(usuarioEditado !== null){
      usuarioEdit(values)
    }else{
      usuarioAdd(values)
    }
    
  }

    return(
    <form onSubmit={handleSubmit}>
      <h1>{usuarioEditado ? 'Editar Usuario':'Crear Usuario'}</h1>
      {/*usuarioEditado es nulo? si no muestra 'Editar usuario', si es nulo muestra 'Ingresar Usuario' */}
        <div className="form-group">
        <label>ID</label>
          <input
          type="text"
          className="form-control"
          id="key"
          placeholder="Key"
          value={key}
          name='key'
          onChange={handleInputChange}
          />
          <br/>
          <label>Nombre</label>
          <input
          type="text"
          className="form-control"
          id="nombre"
          placeholder="Nombre"
          value={nombre}
          name='nombre'
          onChange={handleInputChange}
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
          value={apellido}
          name='apellido'
          onChange={handleInputChange}
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
          value={edad}
          name='edad'
          onChange={handleInputChange}
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
          value={password}
          name='password'
          onChange={handleInputChange}
          ></input>
          <br/>
        </div>
        <button type="submit" className="btn btn-outline-primary">{usuarioEditado ? 'Editar':'Crear'}</button>
      </form>
      );
}

export default FormularioComponent;