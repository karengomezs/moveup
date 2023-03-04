import { Link } from "react-router-dom";
import H2 from "../components/common/h2";
import P from "../components/common/p";

export default function NotFound() {
  return (
    <div className="cotainer flex-grow-1 d-flex justify-content-center align-items-center flex-column">
      <h1 className="h1 text-primary fw-bold">404</h1>
      <H2>
        <strong>Oh no,</strong> no hay nada por acá!{" "}
        <i className="bi bi-search"></i>
      </H2>
      <P className="mt-3">Regresa a la página principal</P>
      <Link to="/">
        <button className="btn btn-primary">Ir al Inicio</button>
      </Link>
    </div>
  );
}
