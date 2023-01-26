//import React {useState, useEffect} from "react";
import React from "react";
/*importe de iconos Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import { faCalendar } from '@fortawesome/free-solid-svg-icons'

export default function Searcher() {
  //declaracion de la API


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
                <span class="input-group-text">{<FontAwesomeIcon icon={faLocationDot} className="calendar_icon"/>}</span>
                <input type="text" aria-label="Last name" class="form-control" placeholder="¿A donde vamos ir?"/>
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
              <button type="button" className="btn btn-primary">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
