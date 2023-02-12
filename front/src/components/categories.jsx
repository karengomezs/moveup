import React, { useEffect, useState } from "react";
import { getCategories } from "../api/categories";
import { getClassByCategory } from "../api/products";

export default function Categories({ onClickCategory }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setData(data);
    });
  }, []);

  const eachCategory = data.map((category) => {
    return (
      <div
        key={category.id}
        className="cards-border d-flex flex-column"
        onClick={() => {
          getClassByCategory(category.id).then((data) => {
            onClickCategory(data);
            console.log(data);
          });
        }}
      >
        <div className="d-flex justify-content-center w-100 flex-grow-1">
          <img
            className="cards-image object-fit-cover"
            src={category.url}
            alt={category.nombreCategorias}
          />
        </div>
        <div>
          <h5 className="fw-bolder pt-2 px-3">{category.nombreCategorias}</h5>
          <p className="px-3">{category.descripcionCategorias}</p>
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
