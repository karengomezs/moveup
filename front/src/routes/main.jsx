import React, { useEffect, useState, useContext } from "react";
import Categories from "../components/categories";
import List from "../components/list";
import Searcher from "../components/searcher";
import { getClasses, getRecomendados } from "../api/products";
import UserContext from "../context/user-context";

export default function Main() {
  const userState = useContext(UserContext);
  const [data, setData] = useState([]);

  const userIsLog = Boolean(userState.user);

  useEffect(() => {
    if (userIsLog) {
      getClasses().then((data) => {
        setData(data);
      });
    } else {
      getRecomendados().then((data) => {
        setData(data);
      });
    }
  }, [userIsLog]);

  return (
    <div className="min-vh-100">
      <Searcher
        onSearch={(a, b) => {
          getClasses(a, b).then((data) => {
            setData(data);
          });
        }}
      />
      <Categories />
      <List data={data} />
    </div>
  );
}
