import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function List({ data }) {
  const navigate = useNavigate();

  const classes = data.map((eachClass) => {
    return (
      <div key={eachClass.id} className="card mb-3 anchoLista">
        <div className="row g-0 shadow">
          <div className="col-3">
            <img
              alt=""
              src={eachClass.img}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-9">
            <div className="card-body h-100 d-flex flex-column justify-content-between">
              <div className="d-flex justify-content-between">
                <div className="mb-2">
                  <div className="d-flex align-items-end">
                    <h6 className="m-0 pe-1 text-muted">
                      {"Categoría: "}
                      {eachClass.categoria}
                    </h6>
                    {/* <div className="text-primary">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div> */}
                  </div>
                  <h5 className="card-title">{eachClass.nombreClase}</h5>
                </div>
                <div className="text-end">
                  {/* <i className="bi bi-8-square-fill fs-3" /> */}
                  <h6 className="text-nowrap">
                    Calificación: {eachClass.calificación}
                  </h6>
                </div>
              </div>
              <div className="d-flex justify-content-around">
                <i className="bi bi-geo-alt-fill fs-3" />
                <div className="d-flex justify-content-between">
                  <p className="card-text">{eachClass.ubicacionClase}</p>&nbsp;
                  <a className="text-nowrap" href="/">
                    Mostrar ubicación
                  </a>
                </div>
              </div>
              <p className="card-text">{eachClass.descripcionClase}</p>
              <div className="d-grid align-items-end">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                    navigate(`/details/${eachClass.id}`);
                  }}
                >
                  ver mas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container py-5">
      <p className="fs-4 fw-bold">Recomendaciones</p>
      <div className="anchoLista">{classes}</div>
    </div>
  );
}
