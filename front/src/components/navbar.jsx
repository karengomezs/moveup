import React, { useContext } from "react";
import logo from "../images/logo1.png";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Avatar from "./avatar";
import UserContext from "../context/user-context";

export default function Navbar() {
  const userState = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand grid text-decoration-none">
          <img src={logo} className="img-fluid" alt="logo" />
          <span className="align-bottom m-3 d-none d-lg-inline fst-italic">
            Sientete como en tu hogar
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
              <Link to="signup">
                <button className="navButton px-5 py-2">Crear cuenta</button>
              </Link>
              <Link to="/login">
                <button className="navButton px-5 py-2">Iniciar Sesion</button>
              </Link>
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
                <h5>Hola {userState?.user?.name}</h5>
                <button
                  onClick={() => {
                    userState.logOut();
                  }}
                  type="button"
                  className="btn btn-light"
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
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header h-25 bg-modal justify-content-start align-items-start ">
                <svg
                  data-bs-dismiss="modal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </div>
              <div className="modal-body d-flex flex-column justify-content-start align-items-end">
                <Link to="/signup">
                  <button className="btn ">Crear cuenta</button>
                </Link>
                <div className="container p-0 text-black">
                  <hr className="border border-dark " />
                </div>
                <Link to="/login">
                  <button
                    className="btn border border-0 shadow-none"
                    data-bs-dismiss="modal"
                  >
                    Iniciar Sesion
                  </button>
                </Link>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
