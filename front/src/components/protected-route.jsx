import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import userContext from "../context/user-context";

export default function ProtectedRoute({ children }) {
  const userState = useContext(userContext);
  const prevLocation = useLocation();

  if (!userState.user) {
    return (
      <Navigate
        to="/login"
        replace={true}
        state={{ loginRequired: true, prevLocation }}
      />
    );
  }

  return children;
}
