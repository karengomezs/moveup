import React, { useEffect, useState, useContext } from "react";
import { getCategories } from "../api/categories";

// import { ContextGlobal } from "../context/context.global";

export default function Categorias() {
  // const { detalles } = useContext(ContextGlobal);

  // console.log(detalles);

  // const grupoCategorias = detalles.reduce((allCategorias, detalles) => {
  //   return Array.from(new Set([...allCategorias, detalles.categoria]));
  // }, []);

  // console.log(grupoCategorias);

  // const indiceCategorias = grupoCategorias.map((categoria) => ({ categoria }));

  const [data, setData] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setData(data);
    });
  }, []);

  const eachCategory = data.map((category) => {
    return (
      <div key={category.id} className="cards-border d-flex flex-column">
        <div className="d-flex justify-content-center w-100 flex-grow-1">
          <img
            className="cards-image object-fit-cover"
            src={category.url}
            alt={category.nombre}
          />
        </div>
        <div>
          <h5 className="fw-bolder pt-2 px-3">{category.nombre}</h5>
          <p className="px-3">{category.descripcion}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container pt-5">
      <p className="fs-4 fw-bold">Buscar por tipo de clase</p>
      <div className="cards">{eachCategory}</div>
    </div>
  );
}
