import React, { useState } from "react";

export default function Searcher({ onSearch }) {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("01/06/2024");
  return (
    <>
      <div className="bg-buscador py-5">
        <div className="d-flex justify-content-center">
          <h1 className="fs-2 fw-bold text-light">Lorem Ipsum</h1>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(city, date);
          }}
        >
          <div className="container d-flex justify-content-center">
            <div className="row justify-content-center input-group">
              <div className="col-sm-12 col-md-5 p-2">
                <div className="input-group">
                  <select
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    className="form-select border border-0 shadow-none"
                    value={city}
                  >
                    <option disabled value="">
                      ¿A donde vamos ir?
                    </option>
                    <option value="Medellín CO">Medellin</option>
                    <option value="Armenia CO">Armenia</option>
                    <option value="Cartagena CO">Cartagena</option>
                    <option value="Jardin CO">Jardín</option>
                    <option value="Amazonas CO">Amazonas</option>
                    <option value="Santa Martha CO">Santa Martha</option>
                    <option value="Cali CO">Cali</option>
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
