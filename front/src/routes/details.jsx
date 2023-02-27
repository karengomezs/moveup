import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Gallery from "../components/gallery";
import { toast } from "react-toastify";
import { getClass } from "../api/products";
import Stars from "../components/product/stars";
import Score from "../components/product/score";

export default function Details() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    getClass(id).then((data) => {
      setData(data);
    });
  }, [id]);

  const quality = data?.calificacion || 0;

  const qualityMessage = {
    1: "Mu regular",
    2: "regular",
    3: "Bueno",
    4: "Muy bueno",
    5: "Excelente",
  };

  return (
    <>
      <div className="bg-light">
        <div className="container p-2 d-flex">
          <div className="col">
            <span>CLASE</span>
            <h3 className="h3 fw-bold text-primary m-0">{data?.nombreClase}</h3>
          </div>
          <div>
            <button
              onClick={async () => {
                const shareData = {
                  title: "MoveUp",
                  text: `¿Te gustaría tomar esta clase de ${
                    data?.nombreClase || "MoveUp"
                  }?`,
                  url: window.location.href,
                };
                if (navigator.share) {
                  try {
                    await navigator.share(shareData);
                  } catch (err) {
                    console.log(err);
                  }
                } else {
                  // toast.error("Por favor revisa los permisos de tu navegador");

                  toast.warning(
                    "Por favor revisa los permisos de tu navegador"
                  );
                }
              }}
              className="btn btn-outline-secondary border-0 bi bi-share fs-5"
            />
          </div>
        </div>
      </div>

      <div className="container d-flex p-2">
        <div className="d-flex align-items-center col">
          <i className="bi bi-geo-alt text-primary fs-3 me-1"></i>
          <p className="m-0 fw-semibold ">{data?.ciudad.nombreCiudad}</p>
        </div>
        <div>
          <span>{qualityMessage[quality]}</span>

          <Stars quality={quality} />
        </div>
        <Score value={quality} className="fs-4" />
      </div>
      <div
        className="flex-grow-1 d-flex justify-content-center container py-3"
        style={{ height: 1, minHeight: 400 }}
      >
        <Gallery product={data} />
      </div>

      <div className="container my-4">
        <div className="mb-4">
          <h5 className="h5 fw-semibold m-0">{data?.descripcionClase}</h5>
        </div>

        <div className="card shadow-sm p-3 col col-lg-6">
          <h5 className="card-title h5 my-3 ">
            Agrega fechas a tus clases para obtener precios exactos
          </h5>
          <button
            className="btn btn-primary mt-3 fw-semibold fs-5"
            onClick={() => {
              navigate(`/details/${data.id}/booking`);
            }}
          >
            Iniciar reserva
          </button>
        </div>
      </div>
    </>
  );
}
