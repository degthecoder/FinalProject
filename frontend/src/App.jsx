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
import UserHomePage from "./containers/UserPage/ProfilePage";
import CreatePrivateRoute from "./renderPrivateRoutes";
import RenderPrivateRoutes from "./renderPrivateRoutes";
import { fetchAuth } from "./api/authentication";
// import ScrollToHashElement from "./api/ScrolltoHashElement";
// import Styles from "./components/Styles";

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // const authenticate = fetchAuth().then((response) =>
    //   setAuth(response.data.auth).catch((error) => console.error(error))
    // );
    // console.log(authenticate);
    console.log(auth);
  }, []);
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <ScrollToHashElement /> */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/auth/login" element={<LoginPage setAuth={setAuth} />} />
          <Route path="/auth/register" element={<SignUpPage />} />
          <Route
            path="/user"
            element={
              <CreatePrivateRoute auth={auth}>
                <UserHomePage />
              </CreatePrivateRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
