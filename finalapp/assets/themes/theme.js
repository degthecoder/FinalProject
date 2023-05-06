import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    "FiraSans-Regular": require("../fonts/Fira_Sans/FiraSans-Regular.ttf"),
    "FiraSans-Bold": require("../fonts/Fira_Sans/FiraSans-Bold.ttf"),
    "FiraSans-BoldItalic": require("../fonts/Fira_Sans/FiraSans-BoldItalic.ttf"),
    "FiraSans-ExtraBold": require("../fonts/Fira_Sans/FiraSans-ExtraBold.ttf"),
    "FiraSans-ExtraBoldItalic": require("../fonts/Fira_Sans/FiraSans-ExtraBoldItalic.ttf"),
    "FiraSans-Light": require("../fonts/Fira_Sans/FiraSans-Light.ttf"),
    "FiraSans-LightItalic": require("../fonts/Fira_Sans/FiraSans-LightItalic.ttf"),
    "FiraSans-Italic": require("../fonts/Fira_Sans/FiraSans-Italic.ttf"),
    "FiraSans-Black": require("../fonts/Fira_Sans/FiraSans-Black.ttf"),
    "FiraSans-BlackItalic": require("../fonts/Fira_Sans/FiraSans-BlackItalic.ttf"),
    "FiraSans-SemiBold": require("../fonts/Fira_Sans/FiraSans-SemiBold.ttf"),
    "FiraSans-SemiBoldItalic": require("../fonts/Fira_Sans/FiraSans-SemiBoldItalic.ttf"),
    "FiraSans-Thin": require("../fonts/Fira_Sans/FiraSans-Thin.ttf"),
    "FiraSans-ThinItalic": require("../fonts/Fira_Sans/FiraSans-ThinItalic.ttf"),
  });
};

export const theme = {
  typography: {
    fontFamily: {
      regular: "FiraSans-Regular",
      bold: "FiraSans-Bold",
      boldItalic: "FiraSans-BoldItalic",
      extraBold: "FiraSans-ExtraBold",
      extraBoldItalic: "FiraSans-ExtraBoldItalic",
      light: "FiraSans-Light",
      lightItalic: "FiraSans-LightItalic",
      italic: "FiraSans-Italic",
      black: "FiraSans-Black",
      blackItalic: "FiraSans-BlackItalic",
      semiBold: "FiraSans-SemiBold",
      semiBoldItalic: "FiraSans-SemiBoldItalic",
      thin: "FiraSans-Thin",
      thinItalic: "FiraSans-ThinItalic",
    },
  },
  palette: {
    primary: {
      main: "#780000",
      transparent: "rgba(120, 0, 0,0.8)",
    },
    secondary: {
      main: "#C1121F",
    },
    pink: {
      main: "#FFB4C4",
    },
    green: {
      main: "#405D12",
    },
    beige: {
      main: "#FDF0D5",
    },
    darkBlue: {
      main: "#003049",
    },
    blue: {
      main: "#669BBC",
    },
  },
};
