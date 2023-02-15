import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Avatar from "../avatar";
import UserContext from "../../context/user-context";
import ButtonLink from "../button-link";

import styles from "./styles.module.scss";

export default function Navbar() {
  const userState = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-md bg-primary">
      <div className="container container-fluid">
        <Link to="/" className="navbar-brand grid text-decoration-none">
          <h1 className={styles.logo}>MoveUp</h1>
          <span className="align-bottom fst-italic fs-5 text-white">
            Un desafio para cada dia
          </span>
        </Link>
        <button
          className="navbar-toggler border border-0 shadow-none"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse grid gap-4 justify-content-end"
          id="navbarSupportedContent"
        >
          {!userState.user && (
            <>
              <ButtonLink
                to="/signup"
                className="btn btn-outline-light px-5 py-2"
                text="Crear cuenta"
              />
              <ButtonLink
                to="/login"
                className="btn btn-light px-5 py-2"
                text="Iniciar Sesion"
              />
            </>
          )}
          {userState.user && (
            <div className="container d-flex justify-content-end gap-4">
              <div className="d-flex column align-items-center">
                <Avatar
                  nameProp={userState.user.name}
                  lastNameProp={userState.user.lastName}
                />
              </div>
              <div className="text-center">
                <h5 className="h5 text-white">Hola {userState?.user?.name}</h5>
                <button
                  onClick={() => {
                    userState.logOut();
                  }}
                  type="button"
                  className="btn btn-light btn-sm"
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          )}
        </div>
        <div
          className="modal fade"
          id="navbarMenu"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header h-25 bg-modal d-flex flex-column">
                <div className="w-100">
                  <i
                    data-bs-toggle="modal"
                    data-bs-target="#navbarMenu"
                    aria-controls="navbarMenu"
                    className="bi bi-x-lg fs-3 text-white p-2"
                  />
                </div>
                <div className="w-100 d-flex justify-content-end">
                  <h2 className="text-white h2 m-0 fw-bold">MENÚ</h2>
                </div>
              </div>
              <div className="modal-body d-flex flex-column justify-content-start align-items-end">
                <ButtonLink
                  to="/signup"
                  className="btn border-0 shadow-none pe-0 my-2"
                  text="Crear cuenta"
                />
                <div className="container p-0">
                  <hr className="border border-dark" />
                </div>
                <ButtonLink
                  to="/login"
                  className="btn border-0 shadow-none pe-0 my-2"
                  text="Iniciar Sesion"
                />
              </div>
              <div className="d-flex justify-content-end p-3 gap-5 bg-light">
                <i className="bi bi-facebook fs-3" />
                <i className="bi bi-linkedin fs-3" />
                <i className="bi bi-twitter fs-3" />
                <i className="bi bi-instagram fs-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
