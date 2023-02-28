import { useState, useEffect, useContext } from "react";
import { geCities } from "../api/city";
import ThemeContext from "../context/context-theme";
import { CalendarWithInput } from "./calendar";

export default function Searcher({ onSearch }) {
  const themeState = useContext(ThemeContext);
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
                <select
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  className={`form-select shadow-none ${
                    themeState.theme
                      ? "text-bg-dark dark-select"
                      : " border border-0"
                  }`}
                  value={city}
                >
                  <option value="">¿A dónde vamos a ir?</option>
                  {cities}
                </select>
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
