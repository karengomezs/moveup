import Product from "./product";
import AlertWarning from "../components/common/alert-warning";

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
      {isEmpty ? (
        <>
          <AlertWarning>
            <i className="bi bi-search fs-4 me-2"></i>
            No hay resultados para esta busqueda.
          </AlertWarning>
        </>
      ) : (
        classes
      )}
    </div>
  );
}
