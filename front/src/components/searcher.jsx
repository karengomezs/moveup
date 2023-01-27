
import React  from "react";
/*importe de iconos Font Awesome */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import { faCalendar } from '@fortawesome/free-solid-svg-icons'


export default function Searcher() {
  
  
  return (
    <>
      <div className="searcher">
      <form>
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
                <select class="form-select">
                  <option selected> ¿A donde vamos ir? </option>
                  <option value="1">Medellin</option>
                  <option value="2">Barranquilla</option>
                  <option value="3">Bogota</option>
                  <option value="4">Cali</option>
                </select>
              </div>
            </div>
            <div className="col-sm-4">
              <div class="input-group">
                {/* {<span class="input-group-text">{<FontAwesomeIcon icon={faCalendar} className="calendar_icon"/>}</span>} */}
                <input type="date" aria-label="checkIn" class="form-control" placeholder="Check in"/>
                <input type="date" aria-label="checkOut" class="form-control" placeholder="Check out"/>
              </div>
            </div>
            <div className="col-sm-2">
              <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </>
  );

}
