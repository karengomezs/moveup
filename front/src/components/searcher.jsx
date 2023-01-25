import React from "react";
/*importe de iconos Font Awesome */
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
//import { faCalendar } from '@fortawesome/free-solid-svg-icons'

export default function Searcher() {
  return (
    <>
      <div className="searcher">
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-12">
              <h1>Lorem Ipsum</h1>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-sm-4">
              {/*<FontAwesomeIcon icon={faLocationDot} className="calendar_icon"/>*/}

              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="¿A dónde vamos?"
              />
            </div>
            <div className="col-sm-4">
              {/*<FontAwesomeIcon icon={faCalendar} className="calendar_icon"/>*/}

              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Check in - Check out"
              />
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
