import { React } from "react";
import { Box, makeStyles, ThemeProvider, Button } from "@material-ui/core";
import theme from "../../../themes/theme";
import Footer from "../../../layouts/LandingPage/Footer";
import UserNavBar from "../../../layouts/UserPage/UserNavbar";
import CreatePreference from "./CreatePreference";

const useStyles = makeStyles(() => ({
  paperContainer: {
    background: "#C1121F",
    height: "120vh",
    position: "relative",
    overflow: "hidden",
    objectFit: "cover",
  },
  container: {
    alignItems: "left",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    // top: "30%",
    left: "20%",
    bottom: "10%",
    right: "20%",
  },
  preferenceContainer: {
    background: "#FDF0D5",
    position: "absolute",
    top: "10%",
    right: "10%",
    height: "100vh",
    width: "80vw",
    borderRadius: 10,
    padding: 10,
  },
  iconRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  button: {
    color: theme.palette.secondary.main,
    fontSize: 20,
    border: "2px solid",
    borderColor: theme.palette.secondary.main,
  },
}));

// color1: f75342
// color2: 763333
// color3: ffffff
// fira sans code

const Preferences = () => {
  const classes = useStyles();
  const foodPreferences = [
    "Italian",
    "Mexican",
    "Japanese",
    "Thai",
    "Chinese",
    "Indian",
    "Greek",
    "Korean",
    "Vietnamese",
    "French",
    "Spanish",
    "Mediterranean",
    "Middle Eastern",
    "American",
    "German",
    "Russian",
    "Cajun",
    "Brazilian",
    "Peruvian",
    "Argentinian",
    "African",
    "Caribbean",
    "Australian",
    "British",
    "Irish",
    "Scottish",
    "Welsh",
    "Turkish",
    "Moroccan",
    "Egyptian",
    "Ethiopian",
    "South African",
    "Israeli",
    "Lebanese",
    "Palestinian",
    "Iranian",
    "Afghan",
    "Pakistani",
    "Bangladeshi",
    "Sri Lankan",
    "Nepalese",
    "Malaysian",
    "Indonesian",
    "Filipino",
    "Kazakh",
    "Uzbek",
    "Georgian",
    "Armenian",
    "Azerbaijani",
    "Scandinavian",
    "Canadian",
    "South American",
  ];

  return (
    <ThemeProvider theme={theme}>
      <UserNavBar />
      <Box className={classes.paperContainer}>
        <Box className={classes.preferenceContainer}>
          {foodPreferences.map((preference, index) => {
            return <CreatePreference key={index} name={preference} />;
          })}
        </Box>
        <Box className={classes.container}>
          <Button className={classes.button}>Submit Preferences</Button>
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default Preferences;
