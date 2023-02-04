import React, { useEffect, useState } from "react";
import Categories from "../components/categories";
import List from "../components/list";
import Searcher from "../components/searcher";
import { getClasses } from "../api/products";

export default function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getClasses().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="min-vh-100">
      <Searcher
        onSearch={(city, date) => {
          getClasses(city, date).then((data) => {
            setData(data);
          });
        }}
      />
      <Categories />
      <List data={data} />
    </div>
  );
}
