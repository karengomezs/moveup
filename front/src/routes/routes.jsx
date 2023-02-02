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
          path="detalle/:id"
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
