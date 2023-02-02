import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../context/context.global";

export default function Details() {
	const params = useParams();
	const paramsID = JSON.parse(params.id);
	const detalleProducto = useContext(ContextGlobal);

	const objetoProductos = [...detalleProducto.producto];
	const productoDetalle = objetoProductos[paramsID - 1];

	return <h2>{productoDetalle?.name || "Cargando..."}</h2>;
}
