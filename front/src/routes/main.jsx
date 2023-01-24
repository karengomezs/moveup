import React from "react";
import Categorias from "../components/categorias";
import userContext from "../context/user-context";
import { useContext } from "react";
import Searcher from "../components/searcher";


export default function Main() {
	const userState = useContext(userContext);

	return (
		<>
		<Searcher/>
		<div className="vh-100">
			{userState.user && <h1>Hola! {userState?.user?.name}</h1>}
			<Categorias />
		</div>		
		</>
	);
}
