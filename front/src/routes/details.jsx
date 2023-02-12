import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Gallery from "../components/gallery";
import { getClass } from "../api/products";

export default function Details() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    getClass(id).then((data) => {
      setData(data);
    });
  }, [id]);

  return (
    <>
      <div class="bg-light">
        <div class="container d-flex">
          <p class="col mb-2 mt-2">Clase: {data?.nombreClase}</p>
          <p class="col mb-2 mt-2">Ubicación: {data?.ciudad.nombreCiudad}</p>
          <p class="col mb-2 mt-2">Calificación: {data?.calificacion}</p>
        </div>
      </div>

      <div className="flex-grow-1 d-flex justify-content-center align-items-center container">
        <Gallery />
      </div>
      <div className="bg-light">
        <h5 className="container fw-semibold mb-2 mt-2 ">
          {data?.descripcionClase}
        </h5>
      </div>
    </>
  );
}
