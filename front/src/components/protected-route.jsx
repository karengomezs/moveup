import { useContext } from "react";
import { Navigate } from "react-router-dom";

import userContext from "../context/user-context";

export default function ProtectedRoute({ children }) {
  const userState = useContext(userContext);

  if (!userState.user) {
    return <Navigate to="/login" />;
  }

  return children;
}
