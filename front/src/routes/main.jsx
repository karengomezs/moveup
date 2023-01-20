import React from "react";
import Carousel from "../components/carousel";
import userContext from "../context/user-context";
import { useContext } from "react";

export default function Main() {
  const userState = useContext(userContext);

  return (
    <>
      {userState.user && <h1>Hola! {userState?.user?.name}</h1>}
      <Carousel />
    </>
  );
}
