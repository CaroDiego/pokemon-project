import { useState, createContext } from "react";

const UserContext = createContext();

function UserProviderWrapper(props) {
  const [user, setUser] = useState({
    name: "Diego",
    isLogged: true,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProviderWrapper };