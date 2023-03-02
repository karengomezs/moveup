import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import userContext from "../context/user-context";

export default function ProtectedAdminRoute({ children }) {
  const userState = useContext(userContext);
  const prevLocation = useLocation();

  if (!userState.user) {
    return (
      <Navigate
        to="/login"
        replace={true}
        state={{ loginAdminRequired: true, prevLocation }}
      />
    );
  }

  if (userState.user && userState.user.role !== "ROLE_ADMIN") {
    return <Navigate to="/" replace={true} />;
  }

  return children;
}
