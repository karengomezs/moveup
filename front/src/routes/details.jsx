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

  return (
    <div className="flex-grow-1 d-flex justify-content-center align-items-center">
      <Gallery />
    </div>
  );
}
