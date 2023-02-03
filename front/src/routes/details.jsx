import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClass } from "../api/products";

export default function Details() {
  const { id } = useParams();
  const [data, setData] = useState();

  console.log(data);

  useEffect(() => {
    getClass(id).then((data) => {
      setData(data);
    });
  }, [id]);

  return <h2>hola</h2>;
}
