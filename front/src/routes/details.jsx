import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../components/gallery';
import { getClass } from '../api/products';
import Stars from '../components/product/starts';
import Score from '../components/product/score';

export default function Details() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    getClass(id).then((data) => {
      setData(data);
    });
  }, [id]);

  const quality = data?.calificacion || 0;

  const qualityIndex = quality * 2 || 0;
  const qualityMessage = {
    1: 'Mu regular',
    2: 'regular',
    3: 'Bueno',
    4: 'Muy bueno',
    5: 'Excelente',
  };

  return (
    <>
      <div className="bg-light">
        <div className="container p-2">
          <div className="col">
            <span>CLASE</span>
            <h3 className="h3 fw-bold text-primary m-0">{data?.nombreClase}</h3>
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
        className="flex-grow-1 d-flex justify-content-center container py-5"
        style={{ height: 1 }}
      >
        <Gallery product={data} />
      </div>
      <div className="bg-light">
        <h5 className="container fw-semibold mb-2 mt-2 ">
          {data?.descripcionClase}
        </h5>
      </div>
    </>
  );
}
