import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/user-context';

export default function List({ data }) {
  const userState = useContext(UserContext);
  const navigate = useNavigate();
  const isEmpty = data.length === 0;

  const classes = data?.map((eachClass) => {
    return (
      <div key={eachClass.id} className="card mb-3 anchoLista">
        <div className="row g-0 shadow">
          <div className="col-3">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbGV6YSUyMHBhaXNhamV8ZW58MHx8MHx8&w=1000&q=80"
              className="img-fluid rounded-start "
            />
          </div>
          <div className="col-9">
            <div className="card-body h-100 d-flex flex-column justify-content-between">
              <div className="d-flex justify-content-between">
                <div className="mb-2">
                  <div className="d-flex align-items-end">
                    <h6 className="m-0 pe-1 text-muted">
                      {'Categoría: '}
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
                  <p className="card-text me-2">
                    {eachClass.ciudad.nombreCiudad}:
                  </p>
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
      <p className="fs-4 fw-bold">
        {userState.user ? 'Clases' : 'Recomendados'}
      </p>
      <div className="anchoLista">
        {isEmpty ? 'No hay resultados, selecciona una ciudad o fecha' : classes}
      </div>
    </div>
  );
}
