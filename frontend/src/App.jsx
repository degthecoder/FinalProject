import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./themes/theme";
import HomePage from "./containers/HomePage/HomePage";
import AboutPage from "./containers/HomePage/AboutUs";
import ContactUs from "./containers/HomePage/ContactUs";
import AuthPage from "./containers/AuthPage/AuthPage"; 
// import ScrollToHashElement from "./api/ScrolltoHashElement";
// import Styles from "./components/Styles";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <ScrollToHashElement /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/login" element={<AuthPage />} />

          </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
