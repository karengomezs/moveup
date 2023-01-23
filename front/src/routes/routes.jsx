import Signup from "./signup";
import Detalle from "./detalle";
import Login from "./login";
import Main from "./main";
import { Route, Routes as Router } from "react-router-dom";

export default function Routes() {
  return (
    <>
      <Router>
        <Route path="/" element={<Main />}></Route>
        <Route path="detalle" element={<Detalle />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Router>
    </>
  );
}
