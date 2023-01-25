import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import userContext from "../context/user-context";
import { signApi } from "../api/sign";
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function FormSignup() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const userState = useContext(userContext);

  /*
  El campo de email sea un email válido
Que la contraseña tenga más de 6 caracteres.
Que las contraseñas coincidan

Botón Crear Cuenta: Al dar click que funcione la validación. Para esto almacenar un correo electrónico y 
contraseña de prueba en un objeto y comparar con estos datos los datos ingresados.

Credenciales inválidas: Si falla la validación el formulario debe indicar 
“Por favor vuelva a intentarlo, sus credenciales son inválidas”.

Credenciales válidas: Se simulará que el usuario está logueado. Desaparecerá el formulario de login 
volveremos a la Home inicial pero en el header a la derecha, en vez de ver los botones de inicio de sesión y registro veremos: Hola [nombre_de_usuario], un link de cerrar sesión y un avatar circular con las iniciales del usuario.
  */

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const nameLength = name.length > 4;
        const passwordLength = password.length > 5;
        const emailValid = emailRegex.test(email);
        const isSamePassword = password === confirmPassword;

        if (isSamePassword && nameLength && passwordLength && emailValid) {
          const response = await signApi(name, lastName, email, password);

          if (response?.token) {
            userState.setUser(response.user);
            navigate("/");
          }
        } else {
          console.log("las contraseñas no son iguales");
        }
      }}
    >
      <h2 className="text-center">Welcome to Booking App</h2>

      <div className="row">
        <div className="col mb-3">
          <label htmlFor="name" className="form-label">
            First Name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="name"
            value={name}
            type="text"
            className="form-control"
            placeholder="Example: Mariam"
          />
        </div>
        <div className="col mb-3">
          <label htmlFor="last-name" className="form-label">
            Last Name
          </label>
          <input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            id="last-name"
            value={lastName}
            type="text"
            className="form-control"
            placeholder="Example: Torres"
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
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
          Password
        </label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          className="form-control"
          id="password"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirm-pass" className="form-label">
          Confirm Password
        </label>
        <input
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          value={confirmPassword}
          type="password"
          className="form-control"
          id="cofirm-pass"
        />
      </div>

      <button type="submit" className="btn btn-primary mx-auto d-block mb-3">
        Sign Up
      </button>
      <p className="text-center">
        ¿Do you have an account?<Link to="/login"> Log In</Link>
      </p>
    </form>
  );
}
