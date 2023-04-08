/*eslint-disable*/
import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./themes/theme";
import HomePage from "./containers/HomePage/HomePage";
import AboutPage from "./containers/HomePage/AboutUs";
import ContactUs from "./containers/HomePage/ContactUs";
import LoginPage from "./containers/AuthPage/LoginPage";
import SignUpPage from "./containers/AuthPage/SignUpPage";
import UserHomePage from "./containers/UserPage/UserHomePage";
import CreatePrivateRoute from "./renderPrivateRoutes";
import RenderPrivateRoutes from "./renderPrivateRoutes";
import { fetchAuth } from "./api/authentication";
import ProfilePage from "./containers/UserPage/ProfilePage";
import Preferences from "./containers/UserPage/Preferences/Preferences";

function App() {
  useEffect(() => {
    console.log(localStorage.getItem("username"));
  }, []);
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <ScrollToHashElement /> */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<SignUpPage />} />
          </Route>
          <Route
            path="/user"
            element={
              <CreatePrivateRoute>
                <UserHomePage />
              </CreatePrivateRoute>
            }
          />
          z
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
          <Route>
            <CreatePrivateRoute />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
