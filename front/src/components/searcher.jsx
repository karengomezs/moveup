import { useState, useEffect } from "react";
import { geCities } from "../api/city";
import { CalendarWithInput } from "./calendar";
import SELECT from "./common/select";

export default function Searcher({ onSearch }) {
  const [dataCities, setDataCities] = useState([]);
  const [city, setCity] = useState("");
  const [dates, setDates] = useState({
    start: "",
    end: "",
  });

  useEffect(() => {
    geCities().then((data) => {
      setDataCities(data);
    });
  }, []);

  const cities = dataCities?.map((city) => {
    return (
      <option key={city.id} value={city.id}>
        {city.nombreCiudad}
      </option>
    );
  });

  return (
    <>
      <div className="bg-search py-4">
        <div className="d-flex justify-content-center">
          <h1 className="fs-2 fw-bold text-light mb-3">Busca tu clase</h1>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(city, dates);
          }}
        >
          <div className="container d-flex justify-content-center">
            <div className="justify-content-center input-group gap-3">
              <div className="col col-md-5 d-flex">
                <SELECT
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  value={city}
                >
                  <option value="">¿A dónde vamos a ir?</option>
                  {cities}
                </SELECT>
              </div>
              <div className="col-sm-12 col-md-5">
                <CalendarWithInput dates={dates} setDates={setDates} />
              </div>
              <div className="col d-flex">
                <button type="submit" className="btn btn-primary w-100">
                  Buscar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
