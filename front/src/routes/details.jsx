import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClass } from "../api/products";
// import { ContextGlobal } from "../context/context.global";

export default function Details() {
  const { id } = useParams();

  const [data, setData] = useState();
  useEffect(() => {
    getClass(id).then((data) => {
      //   console.log(data);
      setData(data);
    });
    // getCategories().then((data) => {
    //   setData(data);
    // });
  }, []);
  console.log(data);
  return <h2>hola</h2>;
}
