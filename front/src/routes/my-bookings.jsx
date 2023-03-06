import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/context-theme";
import UserContext from "../context/user-context";
import P from "../components/common/p";
import AlertWarning from "../components/common/alert-warning";
import BookProduct from "../components/book-product";
import { getBookingsByUserId } from "../api/booking";

export default function MyBookings() {
  const themeState = useContext(ThemeContext);
  const userState = useContext(UserContext);
  const [arrayBookings, setArrayBookings] = useState([]);

  const userId = userState?.user?.id;
  const userToken = userState?.user?.token;

  useEffect(() => {
    getBookingsByUserId(userId, userToken).then((data) => {
      setArrayBookings(data);
    });
  }, [userId, userToken]);

  const bookings = arrayBookings.map((booking) => {
    return (
      <BookProduct
        key={booking.id}
        category={booking?.producto?.categorias?.nombreCategorias}
        name={booking?.producto?.nombreClase}
        score={booking?.producto?.calificacion}
        city={booking?.producto?.ciudad?.nombreCiudad}
        address={booking?.producto?.direccion}
        startDate={booking?.fechaInicial}
        endDate={booking?.fechaFinal}
        hour={booking?.horaInicio}
        images={booking?.producto?.imagenes}
      />
    );
  });

  const isEmpty = arrayBookings.length === 0;

  return (
    <div className="flex-grow-1">
      <div
        className={`w-100 p-2 ${themeState.theme ? "bg-search" : "bg-light"}`}
      >
        <P className="container fs-4 fw-bold text-primary my-auto">
          Mis reservas
        </P>
      </div>
      <div className="container mt-4">
        <div className="list-width">
          {isEmpty ? (
            <div>
              <AlertWarning>
                <i className="bi bi-search fs-4 me-2"></i>
                Aún no tienes reservas.
              </AlertWarning>
              <Link to="/">
                <button className="btn btn-primary">Ir al Inicio</button>
              </Link>
            </div>
          ) : (
            bookings
          )}
        </div>
      </div>
    </div>
  );
}
