import { useState, useContext } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import userContext from '../context/user-context';
import { signApi } from '../api/sign';
// eslint-disable-next-line
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const nameRegex = /\s/;

export default function FormSignup() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameError, setNameError] = useState(false);
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
        const nameLength = name.length > 4;
        const hasWhiteSpace = nameRegex.test(name);
        const passwordLength = password.length > 5;
        const emailValid = emailRegex.test(email);
        const isSamePassword = password === confirmPassword;

        if (
          isSamePassword &&
          nameLength &&
          !hasWhiteSpace &&
          passwordLength &&
          emailValid
        ) {
          const responseData = await signApi(name, lastName, email, password);

          if (responseData?.token) {
            const userObject = {
              name: responseData.nombre,
              lastName: responseData.apellido,
              email: responseData.email,
              city: responseData.ciudad,
              token: responseData.token,
            };

            userState.setUser(userObject);

            if (isLoginRequired) {
              navigate(prevLocation);
            } else {
              navigate('/');
            }
          }
        } else {
          setNameError(!nameLength || hasWhiteSpace);
          setEmailError(!emailValid);
          setPasswordError(!passwordLength);
          setConfirmPasswordError(!isSamePassword);
        }
      }}
    >
      <h2 className="text-center">Crear Cuenta</h2>

      <div className="row">
        <div className="col mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
              setNameError(false);
            }}
            id="name"
            value={name}
            type="text"
            className={`form-control ${nameError ? 'is-invalid' : ''}`}
            placeholder="Example: Mariam"
          />

          <div className="invalid-feedback">
            Por favor ingrese más de 4 caracteres, no agregue espacios en blanco
          </div>
        </div>
        <div className="col mb-3">
          <label htmlFor="last-name" className="form-label">
            Apellido
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
          Correo electrónico
        </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false);
          }}
          value={email}
          type="email"
          className={`form-control ${emailError ? 'is-invalid' : ''}`}
          id="email"
          placeholder="Example: mariam@gmail.com"
        />
        <div className="invalid-feedback">
          Por favor ingrese un correo válido
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false);
          }}
          value={password}
          type="password"
          className={`form-control ${passwordError ? 'is-invalid' : ''}`}
          id="password"
        />
        <div className="invalid-feedback">
          Por favor ingrese más de 5 caracteres
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="confirm-pass" className="form-label">
          Confirmar contraseña
        </label>
        <input
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setConfirmPasswordError(false);
          }}
          value={confirmPassword}
          type="password"
          className={`form-control ${confirmPasswordError ? 'is-invalid' : ''}`}
          id="cofirm-pass"
        />
        <div className="invalid-feedback">Las contraseñas no coinciden</div>
      </div>

      <button
        type="submit"
        className="btn btn-outline-primary mx-auto d-block mb-3"
      >
        Crear Cuenta
      </button>
      <p className="text-center">
        ¿Ya tienes una cuenta?<Link to="/login"> Iniciar Sesión</Link>
      </p>
    </form>
  );
}
