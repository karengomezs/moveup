import React, { useContext } from "react";

import { ContextGlobal } from "../context/context.global";

export default function Categorias() {
	const { detalles } = useContext(ContextGlobal);

	console.log(detalles);

	const grupoCategorias = detalles.reduce((allCategorias, detalles) => {
		return Array.from(new Set([...allCategorias, detalles.categoria]));
	}, []);

	console.log(grupoCategorias);

	const indiceCategorias = grupoCategorias.map((categoria) => ({ categoria }));

	return (
		<div className="container pt-5">
			<p className="fs-4 fw-bold">Buscar por tipo de alojamiento</p>
			<div className="cards">
				{indiceCategorias.map((detalle, i) => (
					<div key={i} className="cards-border">
						<div className="d-flex justify-content-center w-100">
							<img
								className="cards-image"
								src={detalle.img}
								alt={detalle.nombre}
							/>
						</div>
						<div>
							<h5 className="fw-bolder pt-2 px-3">{detalle.categoria}</h5>
							<p className="px-3">
								{detalle.cantidad} <span>hoteles</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
