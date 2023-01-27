import React from "react";
import { Link } from "react-router-dom";

import Categorias from "../components/categorias";
import Listado from "../components/listado";
import Searcher from "../components/searcher";



export default function Main() {
  return (
    <div className="min-vh-100">
      <Searcher />
      <Link to="/details">Detalles</Link>
      <Categorias />
      <Listado />
    </div>
  );
}
