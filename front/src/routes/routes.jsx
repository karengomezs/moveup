//acá importas loguin, registro y el resto
//APP SOLO IMPORTA ESTE ARCHIVO ROUTES
//AQUÍ TODA LA CONFIG DE RECT ROUTER

import Signup from "./signup";
import Details from "./details";
import Login from "./login";
import Main from "./main";
import ProtectedRoute from "../components/protected-route";
import { Route, Routes as Router } from "react-router-dom";

export default function Routes() {
  return (
    <>
      <Router>
        <Route path="/" element={<Main />}></Route>
        <Route
          path="details"
          element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Router>
    </>
  );
}
