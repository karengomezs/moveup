import { useState } from "react";
import CalendarNoInput from "../components/calendar/Calendar";
import Stars from "../components/product/stars";

export default function Booking() {
  const [dates, setDates] = useState({});
  const hours = Array(24)
    .fill()
    .map((_, i) => {
      const hour = i < 10 ? `0${i}:00` : `${i}:00`;
      return (
        <option key={`${i}-hour`} value={hour}>
          {hour}
        </option>
      );
    });

  return (
    <div className="container  d-flex flex-grow-1 my-5 gap-5 flex-wrap">
      <div className="d-flex flex-column gap-5 col">
        {/* 1 div con h3 y el form  */}
        <div>
          <h4 className="h4 fw-semibold">Completa tus datos</h4>
          <div className="card shadow-sm">
            <div className="d-flex flex-column gap-4 card-body  p-4">
              <div className="d-flex gap-4">
                <div className="text-start flex-grow-1">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Nombre
                  </label>
                  <input
                    disabled
                    id="name"
                    type="text"
                    className="form-control border-0"
                  />
                </div>
                <div className="text-start flex-grow-1">
                  <label htmlFor="last-name" className="form-label fw-semibold">
                    Apellido
                  </label>
                  <input
                    disabled
                    id="last-name"
                    type="text"
                    className="form-control  border-0 "
                  />
                </div>
              </div>

              <div className="d-flex gap-4">
                <div className="text-start flex-grow-1">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Correo electrónico
                  </label>
                  <input
                    disabled
                    id="email"
                    type="email"
                    className="form-control border-0 "
                  />
                </div>
                <div className="text-start flex-grow-1">
                  <label htmlFor="city" className="form-label fw-semibold">
                    Ciudad
                  </label>
                  <input
                    required
                    id="city"
                    type="text"
                    className="form-control  border-0 bg-light"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* fin form */}
        {/* ------------------------------------------------------------------------- */}
        {/* 2 contenedor de la izquierda con calendario */}
        <div>
          <h4 className="h4 fw-semibold">Selecciona tu fecha de reserva</h4>
          <div className=" card shadow-sm align-items-center">
            <CalendarNoInput dates={dates} setDates={setDates} />
          </div>
        </div>
        {/* fin calendario */}
        {/* ------------------------------------------------------------------------- */}
        {/*    3 contenedor horario de llegada */}
        <div>
          <h4 className="h4 fw-semibold">Tu horario de llegada</h4>
          <div className=" card shadow-sm">
            <div className="card-body text-start">
              <h6 className="card-title h6 fw-semibold">
                <i className="bi bi-check-circle me-2 fs-5" />
                Tu clase comenzará entre las 10:00 AM y las 11:00 AM
              </h6>

              <div className="mt-4">
                <label htmlFor="time" className="form-label">
                  Indica tu horario estimado de llegada
                </label>

                <select
                  className="form-select"
                  id="floatingSelect"
                  defaultValue="0"
                >
                  <option value="0">Selecciona tu hora de llegada</option>
                  {hours}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* fin horario llegada */}

      {/* ---------------------- */}
      <div className="pt-xl-4 mt-xl-1 col col-xl-4">
        <div className="card shadow-sm mt-2">
          <h4 className="h4 fw-semibold p-3 m-0">Detalle de la reserva</h4>
          <img src="https://picsum.photos/200/300" className="h-100" alt="" />
          <div className="card-body d-flex flex-column gap-2">
            <span className="text-secondary">CLASE</span>
            <h4 className="h4">Surf</h4>
            <Stars quality={5} className="fs-6" />

            <p>
              <i className="bi bi-geo-alt-fill fs-6 text-primary me-2" />
              Ubicacion de la clase
            </p>
            <hr />
            <div className="d-flex">
              <p className="fw-semibold flex-grow-1">Inicio de la clase</p>
              <span>01/05/95</span>
            </div>
            <hr />
            <div className="d-flex">
              <p className="fw-semibold flex-grow-1">Fin de la clase</p>
              <span>07/08/22</span>
            </div>
            <hr />

            <button className="btn btn-primary mt-3">Confirmar reserva</button>
          </div>
        </div>
      </div>
    </div>
  );
}
