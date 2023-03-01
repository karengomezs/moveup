import { useEffect, useState } from "react";
import { geCities } from "../api/city";
import { getCategories } from "../api/categories";
import CARD from "../components/common/card";
import P from "../components/common/p";
import LABEL from "../components/common/label";
import INPUT from "../components/common/input";
import SELECT from "../components/common/select";
import Categories from "../components/categories";

export default function Administrator() {
  /*    const [city, setCity] = useState("");
        const [category, setCategory] = useState("");
   */
  const [citiesData, setCitiesData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategoriesData(data);
    });
  }, []);

  useEffect(() => {
    geCities().then((data) => {
      setCitiesData(data);
    });
  }, []);

  const categories = categoriesData.map((category) => {
    return (
      <option key={category.id} value={category.nombreCategorias}>
        {category.nombreCategorias}
      </option>
    );
  });

  const cities = citiesData.map((city) => {
    return (
      <option key={city.id} value={city.id}>
        {city.nombreCiudad}
      </option>
    );
  });

  return (
    <div className="container flex-grow-1">
      <P className=" fs-4 fw-bold mt-5">Crear Clase</P>
      <CARD className="container d-flex flex-column mb-5">
        <form className="card-body" action="">
          {/*1. DIV PRIMEROS DOS INPUTS */}
          <div className="d-sm-flex gap-3">
            <div className="mb-3 flex-grow-1">
              <LABEL className="fw-semibold" htmlFor="name">
                Nombre de la clase
              </LABEL>
              <INPUT
                onChange={(e) => {}}
                id="name"
                type="text"
                className="form-control"
                placeholder="Ejemplo: Taekwondo"
              />

              {/*   <div className="invalid-feedback">
                Por favor ingrese más de 4 caracteres, no agregue espacios en
                blanco
              </div> */}
            </div>
            <div className="mb-3 flex-grow-1">
              <LABEL className="fw-semibold" htmlFor="last-name">
                Categoría
              </LABEL>
              <SELECT
                className="flex-grow-1"
                /*  onChange={(e) => {
                  setCity(e.target.value);
                }}
                value={city} */
              >
                <option value="">Elige una categoría</option>
                {categories}
              </SELECT>
              {/* <div className="invalid-feedback">
                Por favor ingrese su apellido
              </div> */}
            </div>
          </div>
          {/* 1. FIN */}
          {/*2.  DIV SEGUNDOS DOS INPUTS  */}
          <div className="d-sm-flex gap-3">
            <div className="mb-3 flex-grow-1">
              <LABEL className="fw-semibold" htmlFor="name">
                Dirección
              </LABEL>
              <INPUT
                onChange={(e) => {}}
                id="name"
                type="text"
                className="form-control"
                placeholder="Ejemplo: cll 43 # 34-56"
              />

              {/*   <div className="invalid-feedback">
                Por favor ingrese más de 4 caracteres, no agregue espacios en
                blanco
              </div> */}
            </div>
            <div className="mb-3 flex-grow-1">
              <LABEL className="fw-semibold" htmlFor="last-name">
                Ciudad
              </LABEL>
              <SELECT
              /*  onChange={(e) => {
                  setCity(e.target.value);
                }}
                value={city} */
              >
                <option value="">Elige una ciudad</option>
                {cities}
              </SELECT>
              {/* <div className="invalid-feedback">
                Por favor ingrese su apellido
              </div> */}
            </div>
          </div>
          {/* 1. FIN */}
          {/* 3. DIV TEXT AREA */}
          <div>
            <LABEL className="fw-semibold" htmlFor="last-name">
              Descripción
            </LABEL>
            <textarea
              onChange={(e) => {}}
              id="name"
              type="text-area"
              className="form-control"
              placeholder="Ejemplo: Clase con movilidad de artes marciales y defensa personal avanzada"
            ></textarea>
          </div>
          {/* 3. FIN TEXT AREA */}
          {/*           <P className="fw-bold mt-3">Agregar atributos</P>
           */}{" "}
        </form>
      </CARD>
    </div>
  );
}
