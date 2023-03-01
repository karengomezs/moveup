import { useEffect, useState } from "react";
import { geCities } from "../api/city";
import { getCategories } from "../api/categories";
import CARD from "../components/common/card";
import P from "../components/common/p";
import LABEL from "../components/common/label";
import INPUT from "../components/common/input";
import SELECT from "../components/common/select";
import ButtonOutlinePrimary from "../components/common/button-outline-primary";

export default function Administrator() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  const [citiesData, setCitiesData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  const [nameError, setNameError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [adressError, setAdressError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const [errorPostProduct, setErrorPostProduct] = useState(false);

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
        <form
          className="card-body"
          onSubmit={(e) => {
            e.preventDefault();
            // console.log(city, category, name, description, adress);

            const isNameValid = name.length > 3;
            const isCategoryValid = category.length > 0;
            const isAdressValid = adress.length > 3;
            const isCityValid = city.length > 0;
            const isDescriptionValid = description.length > 5;

            if (
              isNameValid &&
              isCategoryValid &&
              isAdressValid &&
              isCityValid &&
              isDescriptionValid
            ) {
              try {
                // acá va la consulta del response
              } catch (error) {
                setErrorPostProduct(true);
              }
            }
          }}
        >
          {/*1. DIV PRIMEROS DOS INPUTS */}
          <div className="d-sm-flex gap-3">
            <div className="mb-3 w-50">
              <LABEL className="fw-semibold" htmlFor="name">
                Nombre de la clase
              </LABEL>
              <INPUT
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
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
            <div className="mb-3 w-50">
              <LABEL className="fw-semibold" htmlFor="last-name">
                Categoría
              </LABEL>
              <SELECT
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                value={category}
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
            <div className="mb-3 w-50">
              <LABEL className="fw-semibold" htmlFor="name">
                Dirección
              </LABEL>
              <INPUT
                onChange={(e) => {
                  setAdress(e.target.value);
                }}
                value={adress}
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
            <div className="mb-3 w-50">
              <LABEL className="fw-semibold" htmlFor="last-name">
                Ciudad
              </LABEL>
              <SELECT
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                value={city}
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
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
              id="name"
              type="text-area"
              className="form-control"
              placeholder="Ejemplo: Clase con movilidad de artes marciales y defensa personal avanzada"
            ></textarea>
          </div>
          {/* 3. FIN TEXT AREA */}
          {/*           <P className="fw-bold mt-3">Agregar atributos</P>
           */}
          <ButtonOutlinePrimary
            type="submit"
            className="mx-auto d-block mb-3 mt-5 w-50"
          >
            Crear Producto
          </ButtonOutlinePrimary>
        </form>
      </CARD>
      {!errorPostProduct && (
        <div
          className="alert alert-danger d-flex align-items-center mb-4"
          role="alert"
        >
          <i className="bi bi-exclamation-circle-fill me-2"></i>
          <span>
            Lamentablemente, el producto no ha podido crearse. Por favor,
            intente más tarde
          </span>
        </div>
      )}
    </div>
  );
}
