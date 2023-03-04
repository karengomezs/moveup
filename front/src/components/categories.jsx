import { useEffect, useState } from "react";
import Card from "../components/common/card";
import P from "../components/common/p";
import H5 from "../components/common/h5";
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
      <Card
        key={category.id}
        role="button"
        className="d-flex flex-column"
        onClick={() => {
          getClassByCategory(category.id).then((data) => {
            onClickCategory(data, category.nombreCategorias);
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
          <H5 className="fw-bolder">{category.nombreCategorias}</H5>
          <P>{category.descripcionCategorias}</P>
        </div>
      </Card>
    );
  });

  return (
    <div className="container mt-4">
      <P className="fs-4 fw-bold">Buscar por tipo de clase</P>
      <div className="cards">{eachCategory}</div>
    </div>
  );
}
