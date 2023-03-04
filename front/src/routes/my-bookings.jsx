import { useEffect, useContext } from "react";
import ThemeContext from "../context/context-theme";
import UserContext from "../context/user-context";
import P from "../components/common/p";
import Product from "../components/product";
import { getBookingsByUserId } from "../api/booking";

export default function MyBookings() {
  const themeState = useContext(ThemeContext);
  const userState = useContext(UserContext);
  const userId = userState?.user?.id;
  const userToken = userState?.user?.token;
  console.log(userId);

  useEffect(() => {
    getBookingsByUserId(userId, userToken).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <>
      <div
        className={`w-100 p-2 ${themeState.theme ? "bg-search" : "bg-light"}`}
      >
        <P className="container fs-4 fw-bold text-primary my-auto">
          Mis reservas
        </P>
      </div>
      <div className="d-flex flex-grow-1">
        <p>hola!</p>
      </div>
    </>
  );
}
