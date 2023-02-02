import React, { useEffect, useState, useContext } from "react";
import { getClasses } from "../api/products";

// producto={
// 	calificación: (de 1 a 5) renderizar LP
// 	categoria: renderizar LP
// 	nombreClase: renderizar LP
// 	ubicacionClase: renderizar LP
// 	descripcionClase:(pequeña) renderizar LP
// 	profesorDisponible: renderizar LP
// 	fechasDisponibles: detalles
// 	horariosDisponibles: detalles
// 	}

const producto = [
  {
    id: 1,
    calificación: 4,
    categoria: "Acuáticos",
    nombreClase: "Surf",
    ubicacionClase: "Cartagena CO",
    descripcionClase:
      "deporte que se realiza en el mar ayuda de una tabla y un profesor",
    profesorDisponible: "Jairo",
    // fechasDisponibles: detalles,
    // horariosDisponibles: detalles,
    img: "https://picsum.photos/200/400",
  },
  {
    id: 2,
    calificación: 4,
    categoria: "Treckking",
    nombreClase: "Caminata Escalera",
    ubicacionClase: "Jardin CO",
    descripcionClase: "camina por las montañas de Jardín con un grupo",
    profesorDisponible: "Camila",
    // fechasDisponibles: detalles,
    // horariosDisponibles: detalles,
    img: "https://picsum.photos/199/400",
  },
  {
    id: 3,
    calificación: 5,
    categoria: "Artes Marciales",
    nombreClase: "Tekondo",
    ubicacionClase: "Medellín CO",
    descripcionClase:
      "arte y deporte de origen oriental en el que se aprende defensa personal",
    profesorDisponible: "Joshua",
    // fechasDisponibles: detalles,
    // horariosDisponibles: detalles,
    img: "https://picsum.photos/201/400",
  },
  {
    id: 4,
    calificación: 4,
    categoria: "Aeróbicos",
    nombreClase: "Rumba",
    ubicacionClase: "Armenia CO",
    descripcionClase: "Baila al ritmo de la música mientras te pones saludable",
    profesorDisponible: "Angélica",
    // fechasDisponibles: detalles,
    // horariosDisponibles: detalles,
    img: "https://picsum.photos/200/399",
  },
  {
    id: 5,
    calificación: 5,
    categoria: "Acuáticos",
    nombreClase: "Remo",
    ubicacionClase: "Amazonas CO",
    descripcionClase: "Navega en el río Amazonas con tu compañero favorito",
    profesorDisponible: "Oscar",
    // fechasDisponibles: detalles,
    // horariosDisponibles: detalles,
    img: "https://picsum.photos/200/401",
  },
  {
    id: 6,
    calificación: 4,
    categoria: "Aeróbicos",
    nombreClase: "GAP",
    ubicacionClase: "Cartagena CO",
    descripcionClase:
      "Realiza actividades de cardio para estar en forma y alerta",
    profesorDisponible: "Jairo",
    // fechasDisponibles: detalles,
    // horariosDisponibles: detalles,
    img: "https://picsum.photos/199/399",
  },
  {
    id: 7,
    calificación: 5,
    categoria: "Trekking",
    nombreClase: "Rumbo a la sierra nevada",
    ubicacionClase: "Santa Martha CO",
    descripcionClase:
      "Recorrido en montaña y pendientes retadoras, es para ti?",
    profesorDisponible: "Chimuelo",
    // fechasDisponibles: detalles,
    // horariosDisponibles: detalles,
    img: "https://picsum.photos/201/401",
  },
  {
    id: 8,
    calificación: 5,
    categoria: "Artes Marciales",
    nombreClase: "Yuyitsu",
    ubicacionClase: "Cali CO",
    descripcionClase: "Deporte de combate y sistema de defensa personal",
    profesorDisponible: "Hank",
    // fechasDisponibles: detalles,
    // horariosDisponibles: detalles,
    img: "https://picsum.photos/199/401",
  },
];

export default function Listado() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setData(data);
    });
  }, []);

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
