import React from "react";

const listado = [
	{
		id: 1,
		categoria: "Hotel",
		nombre: "Hotel Realeza",
		ubicacion: "Laureles, Medellin, CO",
		descripcion:
			"Hotel con todos los servicios incluidos, zonas humedas y bar-restaurante con platos a la carta",
		img: "https://picsum.photos/200/400",
	},
	{
		id: 2,
		categoria: "Hostal",
		nombre: "El Paraiso",
		ubicacion: "Vía San Geronimo - Medellín Km 15",
		descripcion:
			"Perfecto para un descanso y dias soleados incluye el desayuno y servicio a la habitación",
		img: "https://picsum.photos/199/400",
	},
	{
		id: 3,
		categoria: "Apartamento",
		nombre: "Apartaestudio en Laureles",
		ubicacion: "Calle 35 # 76-114 Laureles- Estado",
		descripcion: "Comodo y central",
		img: "https://picsum.photos/201/400",
	},
	{
		id: 4,
		categoria: "Bed & Breakfast",
		nombre: "Habitacion con wifi y baño privado",
		ubicacion: "Carrera 39D #47Sur9",
		descripcion: "AirB&B en Envigado",
		img: "https://picsum.photos/200/399",
	},
	{
		id: 5,
		categoria: "Hotel",
		nombre: "Hotel El Bosque",
		ubicacion: "Carrera 23 # 36ASur27. Envigado, Antioquia",
		descripcion:
			"Dormitorios cálidos, algunos con balcón y vistas rurales, en pintoresco hotel con restaurante y una granja.",
		img: "https://picsum.photos/200/401",
	},
	{
		id: 6,
		categoria: "Hostal",
		nombre: "Manantial",
		ubicacion: "Carrera 50 #87-29, San Fernando, Itagüi, Antioquia",
		descripcion: "Excelente precio y servicio",
		img: "https://picsum.photos/199/399",
	},
	{
		id: 7,
		categoria: "Apartamento",
		nombre: "Apartamento Amoblado",
		ubicacion: "Barrio Provenza Calle 8av #39-151",
		descripcion: "Cerca de la zona rosa",
		img: "https://picsum.photos/201/401",
	},
	{
		id: 8,
		categoria: "Bed & Breakfast",
		nombre: "Habitacion acojedora desayuno incluido",
		ubicacion: "Calle 10 #41-21, El Poblado, Medellín, Antioquia",
		descripcion:
			"Este hotel sencillo se encuentra a 3 minutos a pie del parque Lleras y su vida nocturna.",
		img: "https://picsum.photos/199/401",
	},
];

export default function Listado() {
	return (
		<div className="container py-5">
			<p className="fs-4 fw-bold">Recomendaciones</p>
			<div className="anchoLista">
				{listado.map((itemListado) => (
					<div key={itemListado.id} className="card mb-3 anchoLista">
						<div className="row g-0 shadow">
							<div className="col-3">
								<img
									src={itemListado.img}
									className="img-fluid rounded-start"
									alt={itemListado.nombre}
								/>
							</div>
							<div className="col-9">
								<div className="card-body h-100 d-flex flex-column justify-content-between">
									<div className="d-flex justify-content-between">
										<div className="mb-2">
											<div className="d-flex align-items-end">
												<h6 className="m-0 pe-1 text-muted">
													{itemListado.categoria}
												</h6>
												<div className="text-primary">
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
													<i className="bi bi-star-fill" />
												</div>
											</div>
											<h5 className="card-title">{itemListado.nombre}</h5>
										</div>
										<div className="text-end">
											<i className="bi bi-8-square-fill fs-3" />
											<p className="text-nowrap">Muy bueno</p>
										</div>
									</div>
									<div className="d-flex justify-content-around">
										<i className="bi bi-geo-alt-fill fs-3" />
										<div className="d-flex justify-content-between">
											<p className="card-text">{itemListado.ubicacion}</p>&nbsp;
											<a className="text-nowrap" href="/">
												Mostrar ubicación
											</a>
										</div>
									</div>
									<p className="card-text">{itemListado.descripcion}</p>
									<div className="d-grid align-items-end">
										<button className="btn btn-outline-primary">ver mas</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
