import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState();

  function logOut() {
    setUser();
  }
  return (
    <UserContext.Provider value={{ user, setUser, logOut }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
