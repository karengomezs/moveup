import { useState } from "react";

export default function FormSignup() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
          console.log(name, lastName, email, password, confirmPassword);
        } else {
          console.log("las contraseñas no son iguales");
        }

        // e.preventDefault();
        // const response = await loginApi(email, password);
        // if (response?.token) {
        //   loginState.setUser(response.user);
        //   navigate("/");
        // }
      }}
    >
      <h2 className="text-center">Welcome to Booking App</h2>

      {/* agregado nuevo por mi */}
      <div className="row">
        <div className="col mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            First Name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            className="form-control"
            placeholder="Example: Mariam"
          />
        </div>
        <div className="col mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Last Name
          </label>
          <input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
            type="text"
            className="form-control"
            placeholder="Example: Torres"
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Email address
        </label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Example: mariam@gmail.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Password
        </label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          className="form-control"
          id="formGroupExampleInput2"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Confirm Password
        </label>
        <input
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          value={confirmPassword}
          type="password"
          className="form-control"
          id="formGroupExampleInput2"
        />
      </div>

      <button type="submit" className="btn btn-primary mx-auto d-block ">
        Sign Up
      </button>
    </form>
  );
}
