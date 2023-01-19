import { useState } from "react";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(email, password);
      }}
    >
      <h2 className="text-center">Welcome to Booking App</h2>

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

      <button type="submit" className="btn btn-primary mx-auto d-block ">
        Sign In
      </button>
    </form>
  );
}
