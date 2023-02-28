import { format, isValid, parse, isWithinInterval } from "date-fns";
import { toast } from "react-toastify";
import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userContext from "../context/user-context";
import { Calendar } from "../components/calendar";
import Stars from "../components/product/stars";
import ThemeContext from "../context/context-theme";
import { createBooking, getUnavailableDatesByProductId } from "../api/booking";
import { getClass } from "../api/products";

export default function Booking() {
  const userState = useContext(userContext);
  const themeState = useContext(ThemeContext);
  const { id } = useParams();
  const [dates, setDates] = useState({});
  const [hour, setHour] = useState("");
  const [city, setCity] = useState(userState.user.city || "");
  const [showError, setShowError] = useState(false);
  const [product, setProduct] = useState({});
  const [disabledDates, setDisabledDate] = useState([]);
  const [cityError, setCityError] = useState(false);
  const [datesError, setDatesError] = useState(false);
  const [hourError, setHourError] = useState(false);

  const invalidRange = disabledDates.some((date) => {
    if (isValid(dates.start) && isValid(dates.end)) {
      return isWithinInterval(date, dates);
    }
    return false;
  });

  useEffect(() => {
    getUnavailableDatesByProductId(id, userState.user.token).then((data) => {
      const list = data || [];
      const result = list.map((date) => {
        const parsedDate = parse(date, "yyyy-MM-dd", new Date());
        return parsedDate;
      });
      setDisabledDate(result);
    });
  }, [id, userState.user.token]);

  useEffect(() => {
    getClass(id).then((data) => {
      setProduct(data);
    });
  }, [id]);

  const startDate = isValid(dates.start)
    ? format(dates.start, "MM/dd/yyyy")
    : "_/_/_";

  const endDate = isValid(dates.end)
    ? format(dates.end, "MM/dd/yyyy")
    : "_/_/_";

  const navigate = useNavigate();

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
    <>
      <form
        className="container  d-flex flex-grow-1 my-5 gap-5 flex-wrap"
        onSubmit={async (e) => {
          e.preventDefault();

          if (showError) {
            setShowError(false);
          }

          const validCity = city.length > 0;

          const validDates = isValid(dates.start) && isValid(dates.end);
          const validHour = hour.length > 0;
          const validRange = !invalidRange;

          if (validCity && validDates && validHour && validRange) {
            try {
              const booking = {
                horaInicio: hour,
                fechaInicial: format(dates.start, "yyyy-MM-dd"),
                fechaFinal: format(dates.end, "yyyy-MM-dd"),
                producto: {
                  id,
                },
                usuario: {
                  id: userState.user.id,
                  ciudad: city,
                },
              };
              const result = await createBooking(booking, userState.user.token);
              if (!result) {
                setShowError(true);
                return;
              }
              userState.setUser({ ...userState.user, city });
              navigate("/confirmed-booking", { state: "booking-success" });
            } catch (error) {
              setShowError(true);
            }
          } else {
            setCityError(!validCity);
            setDatesError(!validDates);
            setHourError(!validHour);
            if (!validCity) {
              toast.warning("No olvides ingresar una ciudad");
            }

            if (!validDates) {
              toast.warning("Verifica las fechas seleccionadas");
            }

            if (!validHour) {
              toast.warning("No olvides seleccionar una hora");
            }
          }
        }}
      >
        <div className="d-flex flex-column gap-5 col">
          {/* 1 div con h3 y el form  */}
          <div>
            <h4
              className={`h4 fw-semibold ${
                themeState.theme ? "text-white" : ""
              }`}
            >
              Completa tus datos
            </h4>
            <div
              className={`card shadow-sm ${
                themeState.theme ? "border-secondary text-bg-dark" : ""
              }`}
            >
              <div className="d-flex flex-column gap-4 card-body  p-4">
                <div className="d-flex gap-4 flex-column flex-sm-row">
                  <div className="text-start flex-grow-1">
                    <label htmlFor="name" className="form-label fw-semibold">
                      Nombre
                    </label>
                    <input
                      onChange={() => {}}
                      value={userState.user.name}
                      disabled
                      id="name"
                      type="text"
                      className={`form-control border-0 ${
                        themeState.theme ? "text-bg-secondary" : ""
                      }`}
                    />
                  </div>
                  <div className="text-start flex-grow-1">
                    <label
                      htmlFor="last-name"
                      className="form-label fw-semibold"
                    >
                      Apellido
                    </label>
                    <input
                      onChange={() => {}}
                      value={userState.user.lastName}
                      disabled
                      id="last-name"
                      type="text"
                      className={`form-control border-0 ${
                        themeState.theme ? "text-bg-secondary" : ""
                      }`}
                    />
                  </div>
                </div>

                <div className="d-flex gap-4 flex-column flex-sm-row">
                  <div className="text-start flex-grow-1">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Correo electrónico
                    </label>
                    <input
                      onChange={() => {}}
                      disabled
                      value={userState.user.email}
                      id="email"
                      type="email"
                      className={`form-control border-0 ${
                        themeState.theme ? "text-bg-secondary" : ""
                      }`}
                    />
                  </div>
                  <div className="text-start flex-grow-1">
                    <label htmlFor="city" className="form-label fw-semibold">
                      Ciudad
                    </label>
                    <input
                      onChange={(e) => {
                        setCity(e.target.value);
                        setCityError(false);
                      }}
                      value={city}
                      id="city"
                      type="text"
                      className={`form-control border-1 ${
                        cityError ? "is-invalid" : ""
                      } ${themeState.theme ? "text-bg-dark" : ""}`}
                    />
                  </div>
                </div>
              </div>
            </div>
            {cityError && (
              <p className="text-danger mt-2">Por favor ingresa una ciudad</p>
            )}
          </div>
          {/* fin form */}
          {/* ------------------------------------------------------------------------- */}
          {/* 2 contenedor de la izquierda con calendario */}
          <div>
            <h4
              className={`h4 fw-semibold ${
                themeState.theme ? "text-white" : ""
              }`}
            >
              Selecciona tu fecha de reserva
            </h4>
            <div
              className={`card shadow-sm align-items-center ${
                datesError || invalidRange ? "border-danger" : ""
              } ${themeState.theme ? "border-secondary text-bg-dark" : ""}`}
            >
              <Calendar
                dates={dates}
                setDates={setDates}
                disabledDates={disabledDates}
              />
            </div>
            {datesError && (
              <p className="text-danger mt-2">
                Por favor seleccione una <strong>fecha de inicio</strong> y una
                <strong> fecha final</strong>
              </p>
            )}
            {invalidRange && (
              <p className="text-danger mt-2">
                Rango de fecha inválido, ya existen reservas en los días
                seleccionados
              </p>
            )}
          </div>
          {/* fin calendario */}
          {/* ------------------------------------------------------------------------- */}
          {/*    3 contenedor horario de llegada */}
          <div>
            <h4
              className={`h4 fw-semibold ${
                themeState.theme ? "text-white" : ""
              }`}
            >
              Tu horario de llegada
            </h4>
            <div
              className={`card shadow-sm ${
                themeState.theme ? "border-secondary text-bg-dark" : ""
              }`}
            >
              <div className="card-body text-start">
                <div className="">
                  <label htmlFor="time" className="form-label">
                    Indica tu horario estimado de llegada
                  </label>

                  <select
                    onChange={(e) => {
                      const selectHour = e.target.value;
                      setHour(selectHour);
                    }}
                    value={hour}
                    className={`form-select ${hourError ? "is-invalid" : ""} ${
                      themeState.theme
                        ? "text-bg-dark dark-select"
                        : " border border-0"
                    }`}
                    id="floatingSelect"
                    required
                  >
                    <option value="0">Selecciona tu hora de llegada</option>
                    {hours}
                  </select>
                </div>

                {hour && (
                  <h6 className="card-title h6 fw-semibold mt-4">
                    <i className="bi bi-check-circle me-2 fs-5" />
                    Tu clase comenzará a las: {hour}
                  </h6>
                )}
              </div>
            </div>
            {hourError && (
              <p className="text-danger mt-2">
                Por favor ingresa una hora de llegada
              </p>
            )}
          </div>
        </div>
        {/* fin horario llegada */}

        {/* ---------------------- */}
        <div className="pt-xl-4 mt-xl-1 col col-xl-4">
          <div
            className={`card shadow-sm mt-2 ${
              themeState.theme ? "border-secondary text-bg-dark" : ""
            }`}
          >
            <h4 className="h4 fw-semibold p-3 m-0">Detalle de la reserva</h4>

            <img
              src={product?.imagenes?.[0].url}
              className="h-100 object-fit-cover booking__height-image"
              alt=""
            />
            <div className="card-body d-flex flex-column gap-2">
              <span className="text-secondary">CLASE</span>
              <h4 className="h4">{product?.nombreClase}</h4>
              <Stars quality={product?.calificacion} className="fs-6" />

              <p>
                <i className="bi bi-geo-alt-fill fs-6 text-primary me-2" />
                {product?.ciudad?.nombreCiudad}
              </p>
              <hr />
              <div className="d-flex">
                <p className="fw-semibold flex-grow-1">Inicio de la clase</p>
                <span>{startDate}</span>
              </div>
              <hr />
              <div className="d-flex">
                <p className="fw-semibold flex-grow-1">Fin de la clase</p>
                <span>{endDate}</span>
              </div>
              <hr />

              <button type="submit" className="btn btn-primary mt-3">
                Confirmar reserva
              </button>
            </div>
          </div>

          {showError && (
            <div
              className="alert alert-danger d-flex align-items-center mt-4"
              role="alert"
            >
              <i className="bi bi-exclamation-circle-fill me-2"></i>

              <span>
                Lamentablemente la reserva no ha podido realizarse. Por favor
                intente más tarde
              </span>
            </div>
          )}
        </div>
      </form>

      <div className="container">
        <h4
          className={`h4 fw-semibold ${themeState.theme ? "text-white" : ""}`}
        >
          ¿Qué tienes que saber?
        </h4>
        <hr className={`${themeState.theme ? "text-white" : ""}`} />
        <div className="d-flex flex-column gap-4 flex-sm-row py-3">
          <div className="col">
            <p
              className={`fw-semibold ${themeState.theme ? "text-white" : ""}`}
            >
              Normas de la clase
            </p>
          </div>
          <div className="col">
            <p
              className={`fw-semibold ${themeState.theme ? "text-white" : ""}`}
            >
              Salud y seguridad
            </p>
          </div>
          <div className="col">
            <p
              className={`fw-semibold ${themeState.theme ? "text-white" : ""}`}
            >
              Política de cancelación
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
