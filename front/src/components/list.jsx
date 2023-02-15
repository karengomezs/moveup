import React, { useContext } from 'react';
import Category from './category';
import UserContext from '../context/user-context';

export default function List({ data }) {
  const userState = useContext(UserContext);
  const isEmpty = data.length === 0;

  const classes = data?.map((eachClass) => {
    console.log({ eachClass });
    return (
      <Category
        key={eachClass.id}
        categories={eachClass.categorias}
        name={eachClass.nombreClase}
        score={eachClass.calificacion}
        city={eachClass.ciudad.nombreCiudad}
        id={eachClass.id}
        description={eachClass.descripcionClase}
        images={eachClass.imagenes}
      />
    );
  });

  return (
    <div className="container py-5">
      <p className="fs-4 fw-bold">
        {userState.user ? 'Clases' : 'Recomendados'}
      </p>
      <div className="anchoLista">
        {isEmpty ? 'No hay resultados, selecciona una ciudad o fecha' : classes}
      </div>
    </div>
  );
}
