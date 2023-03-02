import { useContext } from "react";
import { Link } from "react-router-dom";
import Avatar from "../avatar";
import UserContext from "../../context/user-context";
import ThemeContext from "../../context/context-theme";
import ButtonLink from "../button-link";
import SPAN from "../common/span";

import styles from "./styles.module.scss";

export default function Navbar() {
  const userState = useContext(UserContext);
  const themeState = useContext(ThemeContext);

  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-primary ">
      <div className="container container-fluid">
        <Link
          to="/"
          className={`navbar-brand grid text-decoration-none ${styles.underline}`}
        >
          <h1 className={styles.logo}>MoveUp</h1>
          <span className="align-bottom fst-italic fs-5 text-white">
            Un desafío para cada día
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
          <span className="navbar-toggler-icon text-white" />
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
                text="Iniciar Sesión"
              />
            </>
          )}
          {userState.user && (
            <div className="container d-flex justify-content-end gap-4 align-items-center">
              {userState.user.role === "ROLE_ADMIN" && (
                <Link className="text-decoration-none" to="/administrator">
                  <span className="text-white fs-4">Administrador</span>
                </Link>
              )}

              <div className="d-flex column align-items-center">
                <Avatar
                  nameProp={userState.user.name}
                  lastNameProp={userState.user.lastName}
                />
              </div>
              <div className="text-center">
                <h5 className="h5 text-white fw-bold text-capitalize">
                  Hola {userState?.user?.name}
                </h5>
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
          <button
            className="min-width-theme btn border-0"
            onClick={() => {
              themeState.setTheme(!themeState.theme);
            }}
          >
            <i
              className={`bi text-white ${
                themeState.theme
                  ? "bi-cloud-sun-fill fs-3"
                  : "bi-cloud-moon-fill fs-3"
              }`}
            ></i>
          </button>
        </div>

        {/* MOBILEEEEEEE */}
        <div
          className="modal fade"
          id="navbarMenu"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div
              className={`modal-content ${
                themeState.theme ? "text-bg-dark" : ""
              }`}
            >
              <div className="modal-header bg-primary d-flex flex-column">
                <div className="w-100">
                  <i
                    data-bs-toggle="modal"
                    data-bs-target="#navbarMenu"
                    aria-controls="navbarMenu"
                    className="bi bi-x-lg fs-3 text-white p-2"
                  />
                </div>
                <div className="w-100 d-flex flex-column align-items-end">
                  {!userState.user && (
                    <h2 className="text-white h2 m-0 fw-bold">MENÚ</h2>
                  )}

                  {userState.user && (
                    <div className="d-flex flex-column align-items-end">
                      <Avatar
                        nameProp={userState.user.name}
                        lastNameProp={userState.user.lastName}
                      />
                      <h5 className="h5 text-white text-end">Hola,</h5>
                      <h4 className="h4 text-white fw-bold text-capitalize text-end">
                        {userState?.user?.name}
                      </h4>
                    </div>
                  )}
                  <button
                    className={`bi min-width-theme btn border-0 text-white ${
                      themeState.theme
                        ? "bi-cloud-sun-fill fs-3"
                        : "bi-cloud-moon-fill fs-3"
                    }`}
                    onClick={() => {
                      themeState.setTheme(!themeState.theme);
                    }}
                  />
                </div>
              </div>
              <div className="modal-body d-flex flex-column justify-content-start align-items-end">
                {!userState.user && (
                  <ButtonLink
                    to="/signup"
                    className={`btn border-0 shadow-none pe-0 my-2 fw-bold ${
                      themeState.theme ? "text-white" : ""
                    }`}
                    text="Crear cuenta"
                    data-bs-toggle="modal"
                    data-bs-target="#navbarMenu"
                    aria-controls="navbarMenu"
                  />
                )}

                {userState.user && (
                  <>
                    {userState.user.role === "ROLE_ADMIN" && (
                      <Link
                        className="text-decoration-none"
                        to="/administrator"
                      >
                        <SPAN className="fs-4">Administrador</SPAN>
                      </Link>
                    )}
                    <span
                      className="mt-auto fw-semibold"
                      role="button"
                      data-bs-toggle="modal"
                      data-bs-target="#navbarMenu"
                      aria-controls="navbarMenu"
                      onClick={() => {
                        userState.logOut();
                      }}
                    >
                      ¿Deseas{" "}
                      <strong className="text-danger">cerrar sesión</strong>?
                    </span>
                  </>
                )}
                <div className="container p-0">
                  <hr
                    className={`border ${
                      themeState.theme ? "border-light" : "border-dark"
                    }`}
                  />
                </div>
                {!userState.user && (
                  <ButtonLink
                    to="/login"
                    className={`btn border-0 shadow-none pe-0 my-2 fw-bold ${
                      themeState.theme ? "text-white" : ""
                    }`}
                    text="Iniciar Sesión"
                    data-bs-toggle="modal"
                    data-bs-target="#navbarMenu"
                    aria-controls="navbarMenu"
                  />
                )}
              </div>
              <div
                className={`d-flex justify-content-end p-3 gap-5 bg-light ${
                  themeState.theme ? "bg-primary" : ""
                }`}
              >
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
