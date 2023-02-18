import { useState } from "react";
import FormSignup from "../components/form-signup";

export default function Signup() {
  const [errorRegister, setErrorRegister] = useState(false);

  return (
    <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center">
      <FormSignup setErrorRegister={setErrorRegister} />
      {errorRegister && (
        <div
          className="alert alert-danger d-flex align-items-center mb-4"
          role="alert"
        >
          <i className="bi bi-exclamation-circle-fill me-2"></i>
          <span>
            Lamentablemente no ha podido registrarse. Por favor intente más
            tarde
          </span>
        </div>
      )}
    </div>
  );
}
