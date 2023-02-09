import React, { useState, useEffect } from "react";
import { geCities } from "../api/city";

export default function Searcher({ onSearch }) {
  const [dataCities, setDataCities] = useState([]);
  const [city, setCity] = useState("");
  const [date] = useState("01/06/2024");

  useEffect(() => {
    geCities().then((data) => {
      setDataCities(data);
    });
  }, []);

  const cities = dataCities?.map((city) => {
    return (
      <option key={city.id} value={city.nombreCiudad}>
        {city.nombreCiudad}
      </option>
    );
  });

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
                    {cities}
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
