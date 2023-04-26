import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./themes/theme.jsx";
import HomePage from "./containers/HomePage/HomePage.jsx";
import LoginPage from "./containers/AuthPage/LoginPage.jsx";
import SignUpPage from "./containers/AuthPage/SignUpPage.jsx";
import UserHomePage from "./containers/UserPage/UserHomePage.jsx";
import CreatePrivateRoute from "./renderPrivateRoutes";
import ProfilePage from "./containers/UserPage/ProfilePage.jsx";
import Preferences from "./containers/UserPage/Preferences/Preferences.jsx";
import Restaurants from "./containers/UserPage/UserFeed/Restaurants";
import Ambience from "./containers/UserPage/Preferences/Ambience";
// import { useAuth } from "./context/AuthContext";

const App = () => {
    // const { setLoggedIn, setAuthUser, isLoggedIn, authUser } = useAuth();

    // useEffect(() => {
    //     // eslint-disable-next-line no-console
    //     const user = sessionStorage.getItem("user");
    //     if (user !== undefined) {
    //         setAuthUser(user);
    //         setLoggedIn(true);
    //     }
    //     // eslint-disable-next-line no-console
    //     console.log("deneme");
    //     // eslint-disable-next-line no-console
    //     console.log(authUser);
    // }, [authUser, setAuthUser, setLoggedIn, isLoggedIn]);

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/auth/login" element={<LoginPage />} />
                    <Route path="/auth/register" element={<SignUpPage />} />
                    <Route
                        path="/user"
                        element={
                            <CreatePrivateRoute>
                                <UserHomePage />
                            </CreatePrivateRoute>
                        }
                    />

                    <Route
                        path="/user/profile"
                        element={
                            <CreatePrivateRoute>
                                <ProfilePage />
                            </CreatePrivateRoute>
                        }
                    />
                    <Route
                        path="/user/newuser"
                        element={
                            <CreatePrivateRoute>
                                <Preferences />
                            </CreatePrivateRoute>
                        }
                    />
                    <Route
                        path="/user/newuser/ambience"
                        element={
                            <CreatePrivateRoute>
                                <Ambience />
                            </CreatePrivateRoute>
                        }
                    />
                    <Route
                        path="/user/restaurants"
                        element={
                            <CreatePrivateRoute>
                                <Restaurants />
                            </CreatePrivateRoute>
                        }
                    />
                </Routes>
                {/* <ScrollToHashElement /> */}
            </ThemeProvider>
        </div>
    );
};

export default App;
