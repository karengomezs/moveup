import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Gallery from "../components/gallery";
import { toast } from "react-toastify";
import ThemeContext from "../context/context-theme";
import { getClass } from "../api/products";
import Stars from "../components/product/stars";
import Score from "../components/product/score";
import SPAN from "../components/common/span";
import P from "../components/common/p";
import CARD from "../components/common/card";

export default function Details() {
  const navigate = useNavigate();
  const themeState = useContext(ThemeContext);
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
      <div className={`${themeState.theme ? "bg-search" : "bg-light"}`}>
        <div className="container p-2 d-flex">
          <div className="col">
            <SPAN>CLASE</SPAN>
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
              className={`btn border-0 bi bi-share fs-5 ${
                themeState.theme ? "btn-outline-light" : "btn-outline-secondary"
              }`}
            />
          </div>
        </div>
      </div>

      <div className="container d-flex p-2">
        <i className="bi bi-geo-alt-fill text-primary fs-3 me-1 mt-1"></i>
        <div className="d-flex align-items-center col flex-wrap">
          <P className="m-0 me-2">
            {data?.ciudad.nombreCiudad}
            {data?.direccion && ", "}
          </P>
          <P className="m-0 pe-3">{data?.direccion}</P>
        </div>
        <div>
          <SPAN>{qualityMessage[quality]}</SPAN>

          <Stars className="fs-5" quality={quality} />
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
          <P>{data?.descripcionClase}</P>
        </div>

        <CARD className="p-3 col col-lg-6">
          <p className="card-title my-3">
            Agrega fechas a tus clases para obtener precios exactos
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(`/details/${data.id}/booking`);
            }}
          >
            Iniciar reserva
          </button>
        </CARD>
      </div>
    </>
  );
}
