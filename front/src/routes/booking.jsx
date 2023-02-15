// import { useState } from "react";
// import CalendarNoInput from "../components/calendar/Calendar";

export default function Booking() {
  //   const [dates, setDates] = useState({});

  return (
    <div className="container text-center d-flex flex-grow-1 mt-5">
      <div className="container-sm column ">
        <div className="card ">
          <div className="d-flex flex-column gap-4 card-body shadow-sm p-4">
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
                  type="text"
                  className="form-control border-0 "
                />
              </div>
              <div className="text-start flex-grow-1">
                <label htmlFor="city" className="form-label fw-semibold">
                  Ciudad
                </label>
                <input
                  id="city"
                  type="text"
                  className="form-control  border-0 bg-light"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2 contenedor de la izquierda con calendario */}
        <div className=" bg-warning">
          {/* <div> */}
          {/* <CalendarNoInput dates={dates} setDates={setDates} /> */}
          {/* </div> */}
        </div>
      </div>

      <div className="container-sm ">
        <div className="col-xxl bg-info w-auto vh-auto">Level 1: .col-sm-3</div>
      </div>
    </div>
  );
}
