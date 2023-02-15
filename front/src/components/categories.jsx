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
        role="button"
        className="card d-flex flex-column"
        onClick={() => {
          getClassByCategory(category.id).then((data) => {
            onClickCategory(data);
          });
        }}
      >
        <div className="d-flex justify-content-center w-100 flex-grow-1">
          <img
            className="card-img-top object-fit-cover brightness-effect"
            src={category.url}
            alt={category.nombreCategorias}
          />
        </div>
        <div className="p-3">
          <h5 className="fw-bolder">{category.nombreCategorias}</h5>
          <p>{category.descripcionCategorias}</p>
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
