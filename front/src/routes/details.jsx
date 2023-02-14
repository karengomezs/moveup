import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../components/gallery';
import { getClass } from '../api/products';

export default function Details() {
  const { id } = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    getClass(id).then((data) => {
      setData(data);
    });
  }, [id]);

  const missingStartsValue = 5 - data?.calificacion;
  const starts = Array(data?.calificacion)
    .fill()
    .map((_, index) => <i key={`${index}-fill`} className="bi bi-star-fill" />);
  const missingStarts = Array(missingStartsValue || 0)
    .fill()
    .map((_, index) => <i key={`${index}-not-fill`} className="bi bi-star" />);

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
          <div className="text-primary">
            {starts}
            {missingStarts}
          </div>
        </div>
        <h4 className="p-2 bg-primary text-white rounded ms-2 px-3">
          {qualityIndex}
        </h4>
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
