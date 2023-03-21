import React from "react";
import {
  makeStyles,
  // Paper,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import theme from "../../themes/theme";
import foodBG from "../../images/food-background.jpg";
import NavBar from "../../layouts/NavBar/NavBar";
// import AspectRatio from '@mui/joy';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  // paperContainer: {
  //   backgroundImage: `url(${foodBG})`,
  //   // aspectRatio: 1,
  //   backgroundSize: "cover",
  //   maxWidth: "100%",
  //   height: "100%",
  //   display: "grid",
  // },
  splashScreen: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    display: "flex",
    color: "#ffffff",
  },
  container: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

// color1: f75342
// color2: 763333
// color3: ffffff
// fira sans code

const HomePage = () => {
  const classes = useStyles();




  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      {/* <Paper className={classes.paperContainer}> */}
      <img
        src={foodBG}
        alt="food-background"
        // style={{maxWidth: "100%", maxHeight: "%100"}}
        className={classes.container}
      />
        <Typography className={classes.splashScreen}>Hello</Typography>
      {/* </Paper> */}
    </ThemeProvider>
  );
};

export default HomePage;
