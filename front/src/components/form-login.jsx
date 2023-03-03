import { useNavigate, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { loginApi } from "../api/login";
import userContext from "../context/user-context";
import H2 from "../components/common/h2";
import LABEL from "../components/common/label";
import INPUT from "../components/common/input";
import P from "../components/common/p";
import LINK from "./common/link";
import ButtonOutlinePirmary from "./common/button-outline-primary";
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
  const isLoginAdminRequired = location.state?.loginAdminRequired;
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
                role: responseData.role,
              };

              userState.setUser(user);

              if (isLoginRequired || isLoginAdminRequired) {
                navigate(prevLocation, { replace: true });
              } else {
                navigate("/", { replace: true });
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
      <H2 className="text-center mb-4">Iniciar Sesión</H2>

      <div className="mb-4">
        <LABEL htmlFor="email" className="mb-2">
          Correo electrónico
        </LABEL>
        <INPUT
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
        <LABEL htmlFor="password" className="mb-2">
          Contraseña
        </LABEL>
        <INPUT
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

      <ButtonOutlinePirmary type="submit" className="mx-auto d-block mb-3 w-50">
        Ingresar
      </ButtonOutlinePirmary>

      <LINK
        to="/signup"
        state={{ prevLocation, loginRequired: isLoginRequired }}
        replace={true}
      >
        <P className="text-center">
          ¿Aún no tienes cuenta? <strong>Registrate</strong>
        </P>
      </LINK>

      {error.length > 0 && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </form>
  );
}
