import { createContext, useState } from "react";

const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [user, setUser] = useState();

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
