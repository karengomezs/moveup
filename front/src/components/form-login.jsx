import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { loginApi } from "../api/login";
import userContext from "../context/user-context";
import { emailRegex } from "../constants";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();
  const userState = useContext(userContext);
  const location = useLocation();
  const isLoginRequired = location.state?.loginRequired;
  const prevLocation = location.state?.prevLocation;

  return (
    <form
      className="col-sm-6 col-lg-4"
      onSubmit={async (e) => {
        e.preventDefault();

        const emailValid = emailRegex.test(email);
        const passwordLength = password.length > 0;

        if (emailValid && passwordLength) {
          try {
            const responseData = await loginApi(email, password);

            if (responseData?.token) {
              const user = {
                id: responseData.id,
                name: responseData.nombre,
                lastName: responseData.apellido,
                email: responseData.email,
                city: responseData.ciudad,
                token: responseData.token,
              };

              userState.setUser(user);

              if (isLoginRequired) {
                navigate(prevLocation);
              } else {
                navigate("/");
              }
            }
          } catch (error) {
            setError(
              "Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde"
            );
          }
        } else {
          setEmailError(!emailValid);
          setPasswordError(!passwordLength);
        }
      }}
    >
      <h2 className="text-center mb-4">Iniciar Sesión</h2>

      <div className="mb-4">
        <label htmlFor="email" className="form-label mb-2">
          Correo electrónico
        </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
            setEmailError(false);
          }}
          value={email}
          type="email"
          className={`form-control ${emailError ? "is-invalid" : ""}`}
          id="email"
          placeholder="ejemplo@gmail.com"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label mb-2">
          Contraseña
        </label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
            setPasswordError(false);
          }}
          value={password}
          type="password"
          className={`form-control ${passwordError ? "is-invalid" : ""}`}
          id="password"
        />
      </div>

      <button
        type="submit"
        className="btn btn-outline-primary mx-auto d-block mb-3 w-50"
      >
        Ingresar
      </button>

      <Link
        className="ms-2 mt-3 "
        to="/signup"
        state={{ prevLocation, loginRequired: isLoginRequired }}
      >
        <p className="text-center">
          ¿Aún no tienes cuenta? <strong> Registrate</strong>
        </p>
      </Link>

      {error.length > 0 && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </form>
  );
}
