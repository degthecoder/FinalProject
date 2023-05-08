import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const value = { authUser, setAuthUser, isLoggedIn, setLoggedIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
