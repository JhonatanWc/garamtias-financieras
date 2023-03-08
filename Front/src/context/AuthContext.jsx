import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthContextProvider(props) {
  const [login, setLogin] = useState([]);

  // ! ya por elimiar este archivo, no lo elimino para no romper la aplicacion, porque aun esta siendo usado por unos componentes

  function createLoginSession(user, token) {
    setLogin([
      ...login,
      {
        userLogin: user,
        userToken: token,
      },
    ]);
  }

  function getLoginSession() {
    return login;
  }

  return (
    <AuthContext.Provider
      value={{
        createLoginSession: createLoginSession,
        getLoginSession: getLoginSession,
        loginData: login,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
