import Product from "./product";

export default function List({ data }) {
  const isEmpty = data.length === 0;

  const classes = data?.map((eachClass) => {
    return (
      <Product
        key={eachClass.id}
        category={eachClass.categorias.nombreCategorias}
        name={eachClass.nombreClase}
        score={eachClass.calificacion}
        city={eachClass.ciudad.nombreCiudad}
        id={eachClass.id}
        description={eachClass.descripcionClase}
        images={eachClass?.imagenes || []}
      />
    );
  });

  return (
    <div className="list-width">
      {isEmpty ? "No hay resultados, selecciona una ciudad o fecha" : classes}
    </div>
  );
}
