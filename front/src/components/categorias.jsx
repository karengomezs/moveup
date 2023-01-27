import React from "react";

export default function Categorias() {
	const categorias = [
		{
			id: 1,
			nombre: "Hoteles",
			cantidad: 45965,
			image: "https://picsum.photos/200/198",
		},

		{
			id: 2,
			nombre: "Hostales",
			cantidad: 9865,
			image: "https://picsum.photos/200/200",
		},
		{
			id: 3,
			nombre: "Apartamentos",
			cantidad: 18783,
			image: "https://picsum.photos/200/199",
		},
		{
			id: 4,
			nombre: "Bed & Breakfast",
			cantidad: 3992,
			image: "https://picsum.photos/200/201",
		},
	];

	return (
		<div className="container pt-5">
			<p className="fs-4 fw-bold">Buscar por tipo de alojamiento</p>
			<div className="cards">
				{categorias.map((categoria) => (
					<div key={categoria.id} className="cards-border">
						<div className="d-flex justify-content-center w-100">
							<img
								className="cards-image"
								src={categoria.image}
								alt={categoria.nombre}
							/>
						</div>
						<div>
							<h5 className="fw-bolder pt-2 px-3">{categoria.nombre}</h5>
							<p className="px-3">
								{categoria.cantidad} <span>hoteles</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
