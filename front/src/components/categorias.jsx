import React from "react";

export default function Categorias() {
	const categorias = [
		{
			id: 1,
			nombre: "Hoteles",
			cantidad: 45965,
			image: "https://picsum.photos/198",
		},

		{
			id: 2,
			nombre: "Hostales",
			cantidad: 9865,
			image: "https://picsum.photos/200",
		},
		{
			id: 3,
			nombre: "Apartamentos",
			cantidad: 18783,
			image: "https://picsum.photos/199",
		},
		{
			id: 4,
			nombre: "Bed & Breakfast",
			cantidad: 3992,
			image: "https://picsum.photos/201",
		},
	];

	return (
		<div className="px-3">
			<p className="fw-bold">Buscar por tipo de alojamiento</p>
			<div className="cards">
				{categorias.map((categoria) => (
					<div key={categoria.id} className="card-border">
						<img
							className="cards-image"
							src={categoria.image}
							alt={categoria.nombre}
						/>
						<div className="card-body">
							<h5 className="p-2">{categoria.nombre}</h5>
							<p className="px-2">
								{categoria.cantidad} <span>hoteles</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
