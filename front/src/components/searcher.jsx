
import React, { useState } from "react";
/*importe de iconos Font Awesome */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import { faCalendar } from '@fortawesome/free-solid-svg-icons'



export default function Searcher() {
  //declaracion de state
  const [form, stepForm] = useState(initialForm)
  //declaacion de funcion Handle
  const handleChange = (e) =>{}
  const handleSubmit = (e) =>{}
  
  const initialForm = {
    id: null,
    name:""
  };



  return (
    <>
      <div className="searcher">
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-12">
              <h1>Lorem Ipsum</h1>
            </div>
          </div>
          <div className="row justify-content-md-center input-group">
            <div className="col-sm-4">
            <div class="input-group">
                {/* <span class="input-group-text">{<FontAwesomeIcon icon={faLocationDot} className="calendar_icon"/>}</span> */}
                <input type="text" aria-label="Last name" class="form-control" placeholder="¿A donde vamos ir?" onChange={handleChange} value="form.city"/>
              </div>
            </div>
            <div className="col-sm-4">
              <div class="input-group">
                {/* {<span class="input-group-text">{<FontAwesomeIcon icon={faCalendar} className="calendar_icon"/>}</span>} */}
                <input type="date" aria-label="First name" class="form-control" placeholder="Check in"/>
                <input type="date" aria-label="Last name" class="form-control" placeholder="Check out"/>
              </div>
            </div>
            <div className="col-sm-2">
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
