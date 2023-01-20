import React from "react";
import Carousel from "../components/carousel";
import loginContext from "../context/login-context";
import { useContext } from "react";

export default function Main() {
  const loginState = useContext(loginContext);

  return (
    <>
      {loginState.user && <h1>Hola! {loginState?.user?.name}</h1>}
      <Carousel />
    </>
  );
}
