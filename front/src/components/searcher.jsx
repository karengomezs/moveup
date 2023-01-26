
import React, { useState, useEffect } from "react";
import { helperHttp } from "../api/helperHttp";
/*importe de iconos Font Awesome */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import { faCalendar } from '@fortawesome/free-solid-svg-icons'


//se declara formulario vacio como inicializacion fake para que cargue el state con estos valores por default
const initialForm = {
  "id":null,
  "city":""
}


export default function Searcher() {
  

  //se declaran useStates
  const [form,setForm] = useState(initialForm)
  
  //captura de cambios
  const handleChange = (e) => {}
  const handleSubmit = (e) => {}
  //inicializamos la base de datos
  const [cities, setCities] = useState([]);
  
  return (
    <>
      <div className="searcher">
      <form onSubmit={handleSubmit}>
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-12">
              <h1>Lorem Ipsum</h1>
            </div>
          </div>
          <div className="row justify-content-md-center input-group">
            <div className="col-sm-4">
            
            <div class="input-group">
                {/* <span class="input-group-text"><i class="bi bi-geo-alt"></i></span> */}
                <input type="text" aria-label={form.city} class="form-control" placeholder="¿A donde vamos ir?" onChange={handleChange}/>
              </div>
            </div>
            <div className="col-sm-4">
              <div class="input-group">
                {/* {<span class="input-group-text">{<FontAwesomeIcon icon={faCalendar} className="calendar_icon"/>}</span>} */}
                <input type="date" aria-label="First name" class="form-control" placeholder="Check in" onChange={handleChange}/>
                <input type="date" aria-label="Last name" class="form-control" placeholder="Check out" onChange={handleChange}/>
              </div>
            </div>
            <div className="col-sm-2">
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Buscar</button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </>
  );

}


//==================================================
//funcion CRUD
const searcherApi = () =>{
  //POR ESTABLECER CONEXION CON API Y GENERAR PETICIONES

  //invocamos el helper para las peticiones
  const api = helperHttp();
  //declaramos el endpoint
  const url = "localhost:5000/cities"


  return(
    null
  );   
}

//