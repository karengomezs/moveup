import React, { useContext } from "react";
import ThemeContext from "../context/context-theme";
import Product from "./product";
import UserContext from "../context/user-context";

export default function List({ data }) {
  const userState = useContext(UserContext);
  const themeState = useContext(ThemeContext);
  const isEmpty = data.length === 0;

  const classes = data?.map((eachClass) => {
    return (
      <Product
        key={eachClass.id}
        category={eachClass.categorias.nombreCategorias}
        name={eachClass.nombreClase}
        score={eachClass.calificacion}
        city={eachClass.ciudad.nombreCiudad}
        id={eachClass.id}
        description={eachClass.descripcionClase}
        images={eachClass.imagenes}
      />
    );
  });

  return (
    <div className="container mt-4">
      <p className={`fs-4 fw-bold ${themeState.theme ? "text-white" : ""}`}>
        {userState.user ? "Clases" : "Recomendados"}
      </p>
      <div className="list-width">
        {isEmpty ? "No hay resultados, selecciona una ciudad o fecha" : classes}
      </div>
    </div>
  );
}
