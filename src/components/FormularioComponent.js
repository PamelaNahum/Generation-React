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

const autoValues =[
  {
    id:'',
    marca:'',
    modelo:'',
    velocidad:'', 
    color:'', 
    valor : 0
  }
]

const FormularioComponent = ({usuarioAdd, usuarioEditado, usuarioEdit, setUsuarioEditado}) => {
  const [values, setValues] = useState(initialValues);
  const {key, nombre, apellido, edad, password}= values;

  useEffect( 
    ()=>{
      if(usuarioEditado !== null){
        setValues(usuarioEditado)
      }else{
        setValues({
          key:'',
          nombre:'',
          apellido:'',
          edad:'', 
          password:''
        })
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
        <div>
          <button type="submit" className="btn btn-outline-primary me-2">{usuarioEditado ? 'Editar':'Crear'}</button>
          {usuarioEditado ? 
          (<button type="button" className="btn btn-outline-warning" onClick={()=>{setUsuarioEditado(null)}}>Cancelar</button>):''}
          
        </div>
        
      </form>
      );
}

const FormularioAuto = ({autoAdd, autoEditado, autoEdit, setAutoEditado}) => {
  const [values, setValues] = useState(autoValues);
  const {marca, modelo, velocidad, color, valor}= values;

  useEffect( 
    ()=>{
      if(autoEditado !== null){
        setValues(autoEditado)
      }else{
        setValues({
          id:'',
          marca:'',
          modelo:'',
          velocidad:'', 
          color:'', 
          valor : 0
        })
      }
    }
    ,[autoEditado]);

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
      if(autoEditado !== null){
        autoEdit(values)
      }else{
        autoAdd(values)
      }
      
    }

    return(
    <form onSubmit={handleSubmit}>
      <h1>Auto</h1>
        <div className="form-group">
          <label>Marca</label>
          <input
          type="text"
          className="form-control"
          id="marca"
          placeholder="Marca"
          value={marca}
          name='marca'
          onChange={handleInputChange}
          />
          <br/>
        </div>
        <div className="form-group">
          <label>Modelo</label>
          <input
          type="text"
          className="form-control"
          id="modelo"
          placeholder="Modelo"
          value={modelo}
          name='modelo'
          onChange={handleInputChange}
          />
          <br/>
        </div>
        <div className="form-group">
          <label>Velocidad</label>
          <input
          type="numeric"
          className="form-control"
          id="velocidad"
          placeholder="Velocidad"
          value={velocidad}
          name='velocidad'
          onChange={handleInputChange}
          />
          <br/>
        </div>
        <div className="form-group">
          <label>Color</label>
          <input
          type="text"
          className="form-control"
          id="color"
          placeholder="Color"
          value={color}
          name='color'
          onChange={handleInputChange}
          ></input>
          <br/>
        </div>
        <div className="form-group">
          <label>Valor</label>
          <input
          type="numeric"
          className="form-control"
          id="valor"
          placeholder="Valor"
          value={valor}
          name='valor'
          onChange={handleInputChange}
          ></input>
          <br/>
        </div>
        <div>
          <button type="submit" className="btn btn-outline-primary me-2">{autoEditado ? 'Editar':'Crear'}</button>
          {autoEditado ? 
          (<button type="button" className="btn btn-outline-warning" onClick={()=>{setAutoEditado(null)}}>Cancelar</button>):''}
          
        </div>
        
      </form>
      );
}




export {FormularioComponent, FormularioAuto};