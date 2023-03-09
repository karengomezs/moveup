import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import userContext from "../context/user-context";
import { signApi } from "../api/sign";
import { emailRegex } from "../constants";
import H2 from "./common/h2";
import LABEL from "./common/label";
import INPUT from "./common/input";
import LINK from "./common/link";
import ButtonOutlinePrimary from "./common/button-outline-primary";

const nameRegex = /\s/;

export default function FormSignup({ setErrorRegister }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const userState = useContext(userContext);
  const navigate = useNavigate();
  const location = useLocation();
  const isLoginRequired = location.state?.loginRequired;
  const prevLocation = location.state?.prevLocation;

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const nameLength = name.length > 2;
        const lastNameLength = lastName.length > 0;
        const nameHasWhiteSpace = nameRegex.test(name);
        const passwordLength = password.length > 5;
        const lastNameHasWhiteSpace = nameRegex.test(lastName);
        const emailValid = emailRegex.test(email);
        const isSamePassword = password === confirmPassword;

        if (
          isSamePassword &&
          nameLength &&
          lastNameLength &&
          !nameHasWhiteSpace &&
          !lastNameHasWhiteSpace &&
          passwordLength &&
          emailValid
        ) {
          try {
            const responseData = await signApi(name, lastName, email, password);

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

              if (isLoginRequired) {
                navigate(prevLocation, { replace: true });
              } else {
                navigate("/", { replace: true });
              }
            }
          } catch (error) {
            setErrorRegister(true);
          }
        } else {
          setNameError(!nameLength || nameHasWhiteSpace);
          setLastNameError(!lastNameLength || lastNameHasWhiteSpace);
          setEmailError(!emailValid);
          setPasswordError(!passwordLength);
          setConfirmPasswordError(!isSamePassword);
        }
      }}
    >
      <H2 className="text-center my-4">Crear Cuenta</H2>

      <div className="d-sm-flex gap-3">
        <div className="mb-3">
          <LABEL htmlFor="name">Nombre</LABEL>
          <INPUT
            onChange={(e) => {
              setName(e.target.value);
              setNameError(false);
            }}
            id="name"
            value={name}
            type="text"
            className={`form-control ${nameError ? "is-invalid" : ""}`}
            placeholder="Ejemplo: Mariam"
          />

          <div className="invalid-feedback">
            Por favor ingrese más de 4 caracteres, no agregue espacios en blanco
          </div>
        </div>
        <div className="mb-3">
          <LABEL htmlFor="last-name">Apellido</LABEL>
          <INPUT
            onChange={(e) => {
              setLastName(e.target.value);
              setLastNameError(false);
            }}
            id="last-name"
            value={lastName}
            type="text"
            className={`form-control ${lastNameError ? "is-invalid" : ""}`}
            placeholder="Ejemplo: Torres"
          />
          <div className="invalid-feedback">Por favor ingrese su apellido</div>
        </div>
      </div>

      <div className="mb-3">
        <LABEL htmlFor="email">Correo electrónico</LABEL>
        <INPUT
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false);
          }}
          value={email}
          type="email"
          className={`form-control ${emailError ? "is-invalid" : ""}`}
          id="email"
          placeholder="ejemplo@gmail.com"
        />
        <div className="invalid-feedback">
          Por favor ingrese un correo válido
        </div>
      </div>
      <div className="mb-3">
        <LABEL htmlFor="password">Contraseña</LABEL>
        <INPUT
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false);
          }}
          value={password}
          type="password"
          className={`form-control ${passwordError ? "is-invalid" : ""}`}
          id="password"
        />
        <div className="invalid-feedback">
          Por favor ingrese más de 5 caracteres
        </div>
      </div>
      <div className="mb-4">
        <LABEL htmlFor="confirm-pass">Confirmar contraseña</LABEL>
        <INPUT
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setConfirmPasswordError(false);
          }}
          value={confirmPassword}
          type="password"
          className={`form-control ${confirmPasswordError ? "is-invalid" : ""}`}
          id="cofirm-pass"
        />
        <div className="invalid-feedback">Las contraseñas no coinciden</div>
      </div>

      <ButtonOutlinePrimary type="submit" className="mx-auto d-block mb-3 w-50">
        Crear Cuenta
      </ButtonOutlinePrimary>

      <LINK className="mt-3" to="/login">
        <p className="text-center">
          ¿Ya tienes una cuenta? <strong>Iniciar Sesión</strong>
        </p>
      </LINK>
    </form>
  );
}
