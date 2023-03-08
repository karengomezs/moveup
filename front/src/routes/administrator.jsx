import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { geCities } from "../api/city";
import { getCategories } from "../api/categories";
import { createProduct } from "../api/products";
import { deleteImage } from "../api/aws";
import ThemeContext from "../context/context-theme";
import UserContext from "../context/user-context";
import CARD from "../components/common/card";
import P from "../components/common/p";
import LABEL from "../components/common/label";
import INPUT from "../components/common/input";
import SELECT from "../components/common/select";
import InputImage from "../components/input-image";

export default function Administrator() {
  const themeState = useContext(ThemeContext);
  const userState = useContext(UserContext);
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [address, setAdress] = useState("");
  const [cityId, setCityId] = useState("");
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

  const [arrayImages, setArrayImages] = useState([]);

  const navigate = useNavigate();

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

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "Hey, tus cambios podrian no estar guardados!";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const categories = categoriesData.map((category) => {
    return (
      <option key={category.id} value={category.id}>
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

  const images = arrayImages.map((image) => {
    return (
      <div key={image.key} className="position-relative">
        <img
          style={{ width: 130, maxHeight: 200 }}
          className="border rounded object-fit-cover"
          src={image.url}
          alt=""
        />
        <i
          className="position-absolute bi bi-x-circle-fill fs-3 text-white x-button opacity-25 py-2 px-4"
          onClick={async () => {
            try {
              await deleteImage(image.key);
              const newArrayAfterDelete = arrayImages.filter((img) => {
                return img.key !== image.key;
              });
              setArrayImages(newArrayAfterDelete);
            } catch (error) {
              console.log(error);
            }
          }}
        ></i>
      </div>
    );
  });

  return (
    <>
      <div
        className={`w-100 p-2 ${themeState.theme ? "bg-search" : "bg-light"}`}
      >
        <P className="container fs-4 fw-bold text-primary my-auto">
          Administración de productos
        </P>
      </div>
      <div className="container flex-grow-1">
        <P className=" fs-4 fw-bold mt-5">Crear Clase</P>
        <CARD className="container d-flex flex-column mb-5">
          <form
            className="card-body"
            onSubmit={async (e) => {
              e.preventDefault();

              if (errorPostProduct) {
                setErrorPostProduct(false);
              }

              const isNameValid = name.length > 3;
              const isCategoryValid = categoryId.length > 0;
              const isAddressValid = address.length > 5;
              const isCityValid = cityId.length > 0;
              const isDescriptionValid = description.length > 5;
              const isImagesValid = arrayImages.length === 5;

              if (
                isNameValid &&
                isCategoryValid &&
                isAddressValid &&
                isCityValid &&
                isDescriptionValid &&
                isImagesValid
              ) {
                try {
                  const product = {
                    calificacion: 0.0,
                    nombreClase: name,
                    direccion: address,
                    descripcionClase: description,
                    ciudad: {
                      id: cityId,
                    },
                    imagenes: arrayImages,
                    categorias: {
                      id: categoryId,
                    },
                  };

                  await createProduct(product, userState.user?.token);
                  navigate("/confirmed-product", {
                    state: "confirmed-product",
                  });
                } catch (error) {
                  setErrorPostProduct(true);
                }
              } else {
                setNameError(!isNameValid);
                setCategoryError(!isCategoryValid);
                setAdressError(!isAddressValid);
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
                    setCategoryId(e.target.value);

                    setCategoryError(false);
                  }}
                  value={categoryId}
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
                    setAdressError(false);
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
                    setCityId(e.target.value);
                    setCityError(false);
                  }}
                  value={cityId}
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
            {/* 2. FIN */}
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
            {/* 3. FIN TEXT AREA */}
            {/*           <P className="fw-bold mt-3">Agregar atributos</P>
             */}
            {/* 4. INICIO INPUT FILE*/}

            <InputImage
              setArrayImages={setArrayImages}
              arrayImages={arrayImages}
              imagesError={imagesError}
              setImagesError={setImagesError}
            ></InputImage>
            <div className="d-flex gap-4"> {images}</div>

            {/* 4.FINAL INPUT FILE */}

            <button
              type="submit"
              className="btn btn-primary m-auto d-block mb-3 mt-5 w-50 fw-bold"
            >
              Crear Producto
            </button>
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
