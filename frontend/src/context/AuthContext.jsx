import React, { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const useAuth = () => {
    return useContext(AuthContext);
};

const AuthProvider = (props) => {
    const [authUser, setAuthUser] = useState(true);
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        if (user !== undefined) {
            setAuthUser(user);
            setLoggedIn(true);
        }
    }, []);

    const value = { authUser, setAuthUser, isLoggedIn, setLoggedIn };

    return (
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    );
};

export { useAuth, AuthProvider };
