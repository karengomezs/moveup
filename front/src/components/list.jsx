import React, { useContext } from "react";
import Product from "./product";
import UserContext from "../context/user-context";
import P from "./common/p";

export default function List({ data }) {
  const userState = useContext(UserContext);
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
      <P className="fs-4 fw-bold">
        {userState.user ? "Clases" : "Recomendados"}
      </P>
      <div className="list-width">
        {isEmpty ? "No hay resultados, selecciona una ciudad o fecha" : classes}
      </div>
    </div>
  );
}
