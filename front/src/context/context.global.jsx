import React, { useState, useEffect, createContext } from "react";

import datos from "../api/datos";

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
	const [detalles, setDetalles] = useState([]);

	useEffect(() => {
		function getDetalles() {

			setDetalles(
				datos.map((detalle) => {
					return {
						id: detalle.id,
						img: detalle.img,
						categoria: detalle.producto
					};
				})
			)
		}
		getDetalles();
	}, []);
	return (
		<ContextGlobal.Provider value={{ detalles }}>
			{children}
		</ContextGlobal.Provider>
	);
};
