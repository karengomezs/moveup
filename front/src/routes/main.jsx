import React from "react";
import Categorias from "../components/categorias";
import loginContext from "../context/login-context";
import { useContext } from "react";

export default function Main() {
  const loginState = useContext(loginContext);

  return (
		<div className="vh-100">
			{loginState.user && <h1>Hola! {loginState?.user?.name}</h1>}
			<Categorias />
		</div>
	);
}
