import { useEffect, useState, useContext } from "react";
import { geCities } from "../api/city";
import { getCategories } from "../api/categories";
import ThemeContext from "../context/context-theme";
import CARD from "../components/common/card";
import P from "../components/common/p";
import LABEL from "../components/common/label";
import INPUT from "../components/common/input";
import SELECT from "../components/common/select";
import InputImage from "../components/upload-image";
import ButtonOutlinePrimary from "../components/common/button-outline-primary";

export default function Administrator() {
  const themeState = useContext(ThemeContext);
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  const [citiesData, setCitiesData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  const [nameError, setNameError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [addressError, setAdressError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [imagesError, setImagesError] = useState(false);

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
    <>
      <div
        className={`w-100 p-2 ${themeState.theme ? "bg-search" : "bg-light"}`}
      >
        <P className="container fs-4 fw-bold text-primary my-auto">
          Administración
        </P>
      </div>
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
              const isAdressValid = address.length > 3;
              const isCityValid = city.length > 0;
              const isDescriptionValid = description.length > 5;
              const isImagesValid = description.length > 4;

              if (
                isNameValid &&
                isCategoryValid &&
                isAdressValid &&
                isCityValid &&
                isDescriptionValid &&
                isImagesValid
              ) {
                try {
                  // acá va la consulta del response
                } catch (error) {
                  setErrorPostProduct(true);
                }
              } else {
                setNameError(!isNameValid);
                setCategoryError(!isCategoryValid);
                setAdressError(!isAdressValid);
                setCityError(!isCityValid);
                setDescriptionError(!isDescriptionValid);
                setImagesError(!isImagesValid);
              }
            }}
          >
            {/*1. DIV PRIMEROS DOS INPUTS */}
            <div className="d-sm-flex gap-3">
              <div className="mb-3 w-100">
                <LABEL className="fw-semibold" htmlFor="name">
                  Nombre de la clase
                </LABEL>
                <INPUT
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameError(false);
                  }}
                  value={name}
                  id="name"
                  type="text"
                  className={`form-control ${nameError ? "is-invalid" : ""}`}
                  placeholder="Ejemplo: Taekwondo"
                />

                <div className="invalid-feedback">
                  Por favor ingrese más de 3 caracteres
                </div>
              </div>
              <div className="mb-3 w-100">
                <LABEL className="fw-semibold" htmlFor="last-name">
                  Categoría
                </LABEL>
                <SELECT
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setCategoryError(false);
                  }}
                  value={category}
                  className={`${categoryError ? "is-invalid" : ""} `}
                >
                  <option value="">Elige una categoría</option>
                  {categories}
                </SELECT>
                {categoryError && (
                  <div className="invalid-feedback">
                    Por favor seleccione una categoría
                  </div>
                )}
              </div>
            </div>
            {/* 1. FIN */}
            {/*2.  DIV SEGUNDOS DOS INPUTS  */}
            <div className="d-sm-flex gap-3">
              <div className="mb-3 w-100">
                <LABEL className="fw-semibold" htmlFor="name">
                  Dirección
                </LABEL>
                <INPUT
                  onChange={(e) => {
                    setAdress(e.target.value);
                  }}
                  value={address}
                  id="name"
                  type="text"
                  className={`form-control ${addressError ? "is-invalid" : ""}`}
                  placeholder="Ejemplo: cll 43 # 34-56"
                />

                <div className="invalid-feedback">
                  Por favor ingrese más de 3 caracteres
                </div>
              </div>
              <div className="mb-3 w-100">
                <LABEL className="fw-semibold" htmlFor="last-name">
                  Ciudad
                </LABEL>
                <SELECT
                  onChange={(e) => {
                    setCity(e.target.value);
                    setCityError(false);
                  }}
                  value={city}
                  className={`${cityError ? "is-invalid" : ""}  `}
                >
                  <option value="">Elige una ciudad</option>
                  {cities}
                </SELECT>
                {cityError && (
                  <div className="invalid-feedback">
                    Por favor seleccione una ciudad
                  </div>
                )}
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
                  setDescriptionError(false);
                }}
                value={description}
                id="name"
                type="text-area"
                className={`form-control ${
                  descriptionError ? "is-invalid" : ""
                } ${themeState.theme ? "text-bg-dark" : ""}`}
                placeholder="Ejemplo: Clase con movilidad de artes marciales y defensa personal avanzada"
              ></textarea>
              <div className="invalid-feedback">
                Por favor ingrese más de 5 caracteres
              </div>
            </div>
            <div className="mt-3">
              <InputImage
                onLoaded={(newImage) => {
                  setImages((currentImages) => [...currentImages, newImage]);
                }}
                onSelect={() => setImagesError(false)}
                disabledButton={images.length > 4}
                invalid={imagesError}
              />
            </div>
            <div className="d-flex gap-3 mt-3">
              {images.map((image, index) => (
                <img
                  key={`image-${index}`}
                  src={image}
                  alt=""
                  style={{ maxHeight: 150, width: "auto" }}
                  className="rounded"
                />
              ))}
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
        {errorPostProduct && (
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
    </>
  );
}
