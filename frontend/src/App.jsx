import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./themes/theme";
import HomePage from "./containers/HomePage/HomePage";
import AboutPage from "./containers/HomePage/AboutUs";
import ContactUs from "./containers/HomePage/ContactUs";
import LoginPage from "./containers/AuthPage/LoginPage"; 
import SignUpPage from "./containers/AuthPage/SignUpPage";
// import ScrollToHashElement from "./api/ScrolltoHashElement";
// import Styles from "./components/Styles";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <ScrollToHashElement /> */}
          <Routes>
            <Route path='/' element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />

          </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
