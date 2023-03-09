import { format, isValid, parse, isWithinInterval } from "date-fns";
import { toast } from "react-toastify";
import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userContext from "../context/user-context";
import { Calendar } from "../components/calendar";
import Stars from "../components/product/stars";
import ThemeContext from "../context/context-theme";
import { createBooking, getUnavailableDatesByProductId } from "../api/booking";
import H4 from "../components/common/h4";
import CARD from "../components/common/card";
import INPUT from "../components/common/input";
import SELECT from "../components/common/select";
import P from "../components/common/p";
import LI from "../components/common/li";
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
            <H4 className="fw-semibold">Completa tus datos</H4>
            <CARD>
              <div className="d-flex flex-column gap-4 card-body  p-4">
                <div className="d-flex gap-4 flex-column flex-sm-row">
                  <div className="text-start flex-grow-1">
                    <label htmlFor="name" className="form-label fw-semibold">
                      Nombre
                    </label>
                    <INPUT
                      onChange={() => {}}
                      value={userState.user.name}
                      disabled
                      id="name"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="text-start flex-grow-1">
                    <label
                      htmlFor="last-name"
                      className="form-label fw-semibold"
                    >
                      Apellido
                    </label>
                    <INPUT
                      onChange={() => {}}
                      value={userState.user.lastName}
                      disabled
                      id="last-name"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="d-flex gap-4 flex-column flex-sm-row">
                  <div className="text-start flex-grow-1">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Correo electrónico
                    </label>
                    <INPUT
                      onChange={() => {}}
                      disabled
                      value={userState.user.email}
                      id="email"
                      type="email"
                      className="form-control"
                    />
                  </div>
                  <div className="text-start flex-grow-1">
                    <label htmlFor="city" className="form-label fw-semibold">
                      Ciudad
                    </label>
                    <INPUT
                      onChange={(e) => {
                        setCity(e.target.value);
                        setCityError(false);
                      }}
                      value={city}
                      id="city"
                      type="text"
                      className={`form-control ${
                        cityError ? "is-invalid" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            </CARD>
            {cityError && (
              <p className="text-danger mt-2">Por favor ingresa una ciudad</p>
            )}
          </div>
          {/* fin form */}
          {/* ------------------------------------------------------------------------- */}
          {/* 2 contenedor de la izquierda con calendario */}
          <div>
            <H4 className="fw-semibold">Selecciona tu fecha de reserva</H4>
            <CARD
              className={`align-items-center ${
                datesError || invalidRange ? "border-danger" : ""
              }`}
            >
              <Calendar
                dates={dates}
                setDates={(result) => {
                  setDates(result);
                  setDatesError(false);
                }}
                disabledDates={disabledDates}
              />
            </CARD>
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
            <H4 className="fw-semibold">Tu horario de llegada</H4>
            <CARD>
              <div className="card-body text-start">
                <div className="">
                  <label htmlFor="time" className="form-label">
                    Indica tu horario estimado de llegada
                  </label>

                  <SELECT
                    onChange={(e) => {
                      const selectHour = e.target.value;
                      setHour(selectHour);
                      setHourError(false);
                    }}
                    value={hour}
                    className={`${hourError ? "is-invalid" : ""} `}
                    id="floatingSelect"
                  >
                    <option value="">Selecciona tu hora de llegada</option>
                    {hours}
                  </SELECT>
                </div>

                {hour && (
                  <h6 className="card-title h6 fw-semibold mt-4">
                    <i className="bi bi-check-circle me-2 fs-5" />
                    Tu clase comenzará a las: {hour}
                  </h6>
                )}
              </div>
            </CARD>
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
          <CARD className="shadow-sm mt-2">
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
          </CARD>

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
        <H4 className="fw-semibold">¿Qué tienes que saber?</H4>
        <hr className={`${themeState.theme ? "text-white" : ""}`} />
        <div className="d-flex flex-column gap-4 flex-sm-row py-3">
          <div className="col">
            <P className="fw-semibold mb-2">Normas de la clase</P>

            <ul className="list-group list-group-numbered">
              <LI>Llegar a tiempo</LI>
              <LI>Ropa y calzado adecuado</LI>
              <LI>Respetar al instructor</LI>
              <LI>No interrumpir la clase</LI>
              <LI>Utilizar el equipo correctamente</LI>
              <LI>Respetar a los demás participantes</LI>
              <LI>Seguir las instrucciones</LI>
            </ul>
          </div>
          <div className="col">
            <P className="fw-semibold mb-2">Salud y seguridad</P>
            <ul className="list-group list-group-numbered">
              <LI>Realizar un calentamiento previo</LI>
              <LI>Hidratación</LI>
              <LI>Respetar pausas y descansos</LI>
              <LI>Evitar la sobreexigencia física</LI>
              <LI>
                Informar al instructor de cualquier lesión o problema de salud
              </LI>
            </ul>
          </div>
          <div className="col">
            <P className="fw-semibold mb-2">Política de cancelación</P>

            <ul className="list-group list-group-numbered">
              <LI>
                Aviso previo de cancelación: Es importante avisar al instructor
                o al centro deportivo con anticipación si se necesita cancelar
                la clase. El plazo de aviso suele variar, pero en general se
                recomienda avisar con al menos 24 horas de anticipación.
              </LI>
              <LI>
                Reembolso: Si se ha pagado por adelantado la clase y se cancela
                con el plazo suficiente de aviso, es posible que se pueda
                solicitar un reembolso o que se permita reprogramar la clase
                para una fecha posterior.
              </LI>
              <LI>
                Cancelación por parte del instructor o centro deportivo: En caso
                de que el instructor o el centro deportivo deba cancelar la
                clase por algún motivo (como enfermedad o problemas técnicos),
                se suele ofrecer la posibilidad de reprogramar la clase o de
                recibir un reembolso.
              </LI>
              <LI>
                Ausencia sin aviso previo: Si el participante no avisa de la
                cancelación y simplemente no se presenta a la clase, es posible
                que se pierda el derecho a recibir un reembolso o a reprogramar
                la clase.
              </LI>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
