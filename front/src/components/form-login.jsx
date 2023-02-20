import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { loginApi } from "../api/login";
import userContext from "../context/user-context";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const userState = useContext(userContext);
  const location = useLocation();
  const isLoginRequired = location.state?.loginRequired;
  const prevLocation = location.state?.prevLocation;

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

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
      }}
    >
      <h2 className="text-center">Iniciar Sesión</h2>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Correo electrónico
        </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          value={email}
          type="email"
          className="form-control"
          id="email"
          placeholder="Example: mariam@gmail.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          value={password}
          type="password"
          className="form-control"
          id="password"
        />
      </div>

      <button
        type="submit"
        className="btn btn-outline-primary mx-auto d-block mb-3"
      >
        Ingresar
      </button>
      <p className="text-center">
        ¿Aún no tienes cuenta?
        <Link
          to="/signup"
          state={{ prevLocation, loginRequired: isLoginRequired }}
        >
          Registrate
        </Link>
      </p>

      {error.length > 0 && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </form>
  );
}
