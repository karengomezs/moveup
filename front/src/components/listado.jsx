import React from "react";

// style="max-width: 540px"

const listado = [
	{
		id: 1,
		categoria: "Hotel",
		nombre: "Hotel Realeza",
		ubicacion: "Laureles, Medellin, CO",
		descripcion:
			"Hotel con todos los servicios incluidos, zonas humedas y bar-restaurante con platos a la carta",
		img: "https://picsum.photos/200/300",
	},
	{
		id: 2,
		categoria: "Hostal",
		nombre: "El Paraiso",
		ubicacion: "Vía San Geronimo - Medellín Km 15",
		descripcion:
			"Perfecto para un descanso y dias soleados incluye el desayuno y servicio a la habitación",
		img: "https://picsum.photos/199/300",
	},
	{
		id: 3,
		categoria: "Apartamento",
		nombre: "Apartaestudio en Laureles",
		ubicacion: "Calle 35 # 76-114 Laureles- Estado",
		descripcion: "Comodo y central",
		img: "https://picsum.photos/201/300",
	},
	{
		id: 4,
		categoria: "Bed & Breakfast",
		nombre: "Habitacion con wifi y baño privado",
		ubicacion: "Carrera 39D #47Sur9",
		descripcion: "AirB&B en Envigado",
		img: "https://picsum.photos/200/299",
	},
	{
		id: 5,
		categoria: "Hotel",
		nombre: "Hotel El Bosque",
		ubicacion: "Carrera 23 # 36ASur27. Envigado, Antioquia",
		descripcion:
			"Dormitorios cálidos, algunos con balcón y vistas rurales, en pintoresco hotel con restaurante y una granja.",
		img: "https://picsum.photos/200/301",
	},
	{
		id: 6,
		categoria: "Hostal",
		nombre: "Manantial",
		ubicacion: "Carrera 50 #87-29, San Fernando, Itagüi, Antioquia",
		descripcion: "Excelente precio y servicio",
		img: "https://picsum.photos/199/299",
	},
	{
		id: 7,
		categoria: "Apartamento",
		nombre: "Apartamento Amoblado",
		ubicacion: "Barrio Provenza Calle 8av #39-151",
		descripcion: "Cerca de la zona rosa",
		img: "https://picsum.photos/201/301",
	},
	{
		id: 8,
		categoria: "Bed & Breakfast",
		nombre: "Habitacion acojedora desayuno incluido",
		ubicacion: "Calle 10 #41-21, El Poblado, Medellín, Antioquia",
		descripcion:
			"Este hotel sencillo se encuentra a 3 minutos a pie del parque Lleras y su vida nocturna.",
		img: "https://picsum.photos/199/301",
	},
];

export default function Listado() {
	return (
		<div className="container py-5">
			<p className="fs-4 fw-bold">Recomendaciones</p>
			<div className="anchoLista">
				{listado.map((itemListado) => (
					<div className="card mb-3 anchoLista">
						<div key={itemListado.id} className="row g-0 shadow">
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
												<h6 className="m-0 pe-1">{itemListado.categoria}</h6>
												<div >
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														class="bi bi-star-fill"
														viewBox="0 0 16 16"
													>
														<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														class="bi bi-star-fill"
														viewBox="0 0 16 16"
													>
														<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														class="bi bi-star-fill"
														viewBox="0 0 16 16"
													>
														<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														class="bi bi-star-fill"
														viewBox="0 0 16 16"
													>
														<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="16"
														height="16"
														fill="currentColor"
														class="bi bi-star-fill"
														viewBox="0 0 16 16"
													>
														<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
													</svg>
												</div>
											</div>
											<h5 className="card-title">{itemListado.nombre}</h5>
										</div>
										<div className="text-end">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												fill="currentColor"
												class="bi bi-8-square-fill"
												viewBox="0 0 16 16"
											>
												<path d="M6.623 6.094c0 .738.586 1.254 1.383 1.254s1.377-.516 1.377-1.254c0-.733-.58-1.23-1.377-1.23s-1.383.497-1.383 1.23Zm-.281 3.644c0 .838.72 1.412 1.664 1.412.943 0 1.658-.574 1.658-1.412 0-.843-.715-1.424-1.658-1.424-.944 0-1.664.58-1.664 1.424Z" />
												<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm8.97 9.803c0 1.394-1.218 2.355-2.988 2.355-1.763 0-2.953-.955-2.953-2.344 0-1.271.95-1.851 1.647-2.003v-.065c-.621-.193-1.33-.738-1.33-1.781 0-1.225 1.09-2.121 2.66-2.121s2.654.896 2.654 2.12c0 1.061-.738 1.595-1.336 1.782v.065c.703.152 1.647.744 1.647 1.992Z" />
											</svg>
											<p className="text-nowrap">Muy bueno</p>
										</div>
									</div>
									<div className="d-flex">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											fill="currentColor"
											className="bi bi-geo-alt-fill"
											viewBox="0 0 16 16"
										>
											<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
										</svg>
										<p className="card-text">{itemListado.ubicacion}</p>
									</div>
									<p className="card-text">{itemListado.descripcion}</p>
									<div className="d-grid align-items-end">
										<buton className="btn shadow-none bg-button">ver mas</buton>
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
