import React from "react";
import Categories from "../components/categories";
import List from "../components/list";
import Searcher from "../components/searcher";

export default function Main() {
  return (
    <div className="min-vh-100">
      <Searcher />
      <Categories />
      <List />
    </div>
  );
}
