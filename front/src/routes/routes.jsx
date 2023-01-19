//acá importas loguin, registro y el resto
//APP SOLO IMPORTA ESTE ARCHIVO ROUTES
//AQUÍ TODA LA CONFIG DE RECT ROUTER

import Login from "./login";
import Signup from "./signup";

export default function Routes() {
  return (
    <>
      <Login />
      {/* <Signup /> */}
    </>
  );
}
