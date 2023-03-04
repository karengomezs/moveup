import { useEffect, useContext, useState } from "react";
import ThemeContext from "../context/context-theme";
import UserContext from "../context/user-context";
import P from "../components/common/p";
import Product from "../components/product";
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
    console.log(booking?.producto?.imagenes[0].url);
    return (
      <Product
        className=""
        key={booking.id}
        category={booking?.producto?.categorias?.nombreCategorias}
        name={booking?.producto?.nombreClase}
        score={booking?.producto?.calificacion}
        city={booking?.producto?.ciudad?.nombreCiudad}
        id={booking?.producto?.id}
        description={booking?.producto?.descripcionClase}
        images={booking?.producto?.imagenes}
      ></Product>
    );
  });
  console.log(bookings);

  return (
    <>
      <div
        className={`w-100 p-2 ${themeState.theme ? "bg-search" : "bg-light"}`}
      >
        <P className="container fs-4 fw-bold text-primary my-auto">
          Mis reservas
        </P>
      </div>

      <div className="container mt-4 ">
        <P className="fs-4 fw-bold">Aquí puedes ver tus reservas</P>
        <div className="row ">
          {bookings}
          {/* {isEmpty
            ? "No hay resultados, selecciona una ciudad o fecha"
            : classes} */}
        </div>
      </div>
    </>
  );
}
