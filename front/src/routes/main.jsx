import React from "react";
import Categorias from "../components/categorias";
import Listado from "../components/listado";
import Searcher from "../components/searcher";

export default function Main() {
	return (
		<div className="min-vh-100">
			<Searcher />
			<Categorias />
			<Listado />
		</div>
	);
}
