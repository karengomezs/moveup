import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { loginApi } from "../api/login";
import userContext from "../context/user-context";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userState = useContext(userContext);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const response = await loginApi(email, password);

        if (response?.token) {
          userState.setUser(response.user);
          navigate("/");
        }
      }}
    >
      <h2 className="text-center">Welcome to Booking App</h2>

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

      <button type="submit" className="btn btn-primary mx-auto d-block ">
        Sign In
      </button>
      <p className="text-center">
        ¿Don´t you have an account? <Link to="/signup"> Sign Up</Link>
      </p>
    </form>
  );
}
