import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import TopBar from "./layouts/TopBar/TopBar";
import { ThemeProvider } from "@material-ui/core";
import HomePage from "./containers/HomePage/HomePage";
import theme from "./themes/theme";
import AboutPage from "./containers/HomePage";
// import NavBar from "./layouts/NavBar/NavBar";
import ScrollToHashElement from "./api/ScrolltoHashElement";
// import Styles from "./components/Styles";
// import { Typography } from "@material-ui/core";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ScrollToHashElement />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<AboutPage />} />
          </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
