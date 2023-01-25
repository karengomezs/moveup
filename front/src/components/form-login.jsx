import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { loginApi } from "../api/login";
import userContext from "../context/user-context";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const userState = useContext(userContext);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        try {
          const response = await loginApi(email, password);
          if (response?.token) {
            userState.setUser(response.user);

            navigate("/");
          }
        } catch (error) {
          setError(error.message);
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

      <button type="submit" className="btn btn-primary mx-auto d-block mb-3">
        Ingresar
      </button>
      <p className="text-center">
        ¿Aún no tienes cuenta? <Link to="/signup"> Registrate</Link>
      </p>

      {error.length > 0 && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </form>
  );
}
