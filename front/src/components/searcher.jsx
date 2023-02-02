import React from "react";

export default function Searcher() {
  return (
    <>
      <div className="bg-buscador py-5">
        <div className="d-flex justify-content-center">
          <h1 className="fs-2 fw-bold text-light">Lorem Ipsum</h1>
        </div>
        <form>
          <div className="container d-flex justify-content-center">
            <div className="row justify-content-center input-group">
              <div className="col-sm-12 col-md-5 p-2">
                <div className="input-group">
                  <select
                    onChange={() => {}}
                    value={"0"}
                    className="form-select border border-0 shadow-none"
                  >
                    <option disabled value="0">
                      ¿A donde vamos ir?
                    </option>
                    <option value="1">Medellin</option>
                    <option value="2">Barranquilla</option>
                    <option value="3">Bogota</option>
                    <option value="4">Cali</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-12 col-md-5 p-2">
                <div className="input-group">
                  <input
                    type="date"
                    aria-label="checkIn"
                    className="form-control border border-0 shadow-none"
                    placeholder="Check in"
                  />
                  <input
                    type="date"
                    aria-label="checkOut"
                    className="form-control border border-0 shadow-none"
                    placeholder="Check out"
                  />
                </div>
              </div>
              <div className="col p-2">
                <div className="d-grid">
                  <button type="submit" className="btn boton-busqueda">
                    Buscar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
