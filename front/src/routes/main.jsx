import { useEffect, useState, useContext } from "react";
import { format, isValid } from "date-fns";
import Categories from "../components/categories";
import List from "../components/list";
import Searcher from "../components/searcher";
import {
  getClasses,
  getRecommended,
  getFilteredClasses,
} from "../api/products";
import UserContext from "../context/user-context";
import P from "../components/common/p";

export default function Main() {
  const userState = useContext(UserContext);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  const userIsLog = Boolean(userState.user);

  useEffect(() => {
    if (userIsLog) {
      getClasses().then((data) => {
        setData(data);
        setTitle("Clases");
      });
    } else {
      getRecommended().then((data) => {
        setData(data);
        setTitle("Recomendados");
      });
    }
  }, [userIsLog]);

  return (
    <div className="min-vh-100">
      <Searcher
        onSearch={(city, date) => {
          const formatDate = "yyyy-MM-dd";

          const start = isValid(date.start)
            ? format(date.start, formatDate)
            : "";

          const end = isValid(date.end) ? format(date.end, formatDate) : "";

          getFilteredClasses(city, { start, end }).then((data) => {
            setData(data);
          });

          setTitle("Resultado de la búsqueda:");
        }}
      />
      <Categories
        onClickCategory={(data, categoryName) => {
          setData(data);
          setTitle("Filtrado por categoría: " + categoryName);
        }}
      />
      <div className="container mt-4">
        <P className="fs-4 fw-bold mb-2">{title}</P>
        <List data={data} />
      </div>
    </div>
  );
}
