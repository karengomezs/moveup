import { useLocation } from "react-router-dom";
import FormLogin from "../components/form-login";

export default function Login() {
  const location = useLocation();
  const isLoginRequired = location.state?.loginRequired;
  const isLoginAdminRequired = location.state?.loginAdminRequired;

  return (
    <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center">
      {isLoginRequired && (
        <div
          className="alert alert-danger d-flex align-items-center mb-4"
          role="alert"
        >
          <i className="bi bi-exclamation-circle-fill me-2"></i>
          <span>Para ver esta página necesitas estar logueado</span>
        </div>
      )}

      {isLoginAdminRequired && (
        <div
          className="alert alert-danger d-flex align-items-center mb-4"
          role="alert"
        >
          <i className="bi bi-exclamation-circle-fill me-2"></i>
          <span>
            Para ingresar a esta página utiliza una cuenta de administrador
          </span>
        </div>
      )}

      <FormLogin />
    </div>
  );
}
