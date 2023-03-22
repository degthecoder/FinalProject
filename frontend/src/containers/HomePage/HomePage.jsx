import React from "react";
import {
  Box,
  makeStyles,
  Paper,
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
  paperContainer: {
    height: "100%",
    position: "relative",
    overflow: "hidden",
    marginTop: -10,
  },
  header1: {
    color: "#ffffff",
    fontSize: 70,
  },
  header2: {
    color: "#ffffff",
    fontSize: 70,
    fontStyle: "italic ",
    marginTop: 0,
  },
  image: {
    objectFit: "cover",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  container: {
    alignItems: "left",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "30%",
    left: "20%",
    right: "20%",
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
      <NavBar />
      <Paper className={classes.paperContainer}>
        <img
          src={foodBG}
          alt="food-background"
          // style={{maxWidth: "100%", maxHeight: "%100"}}
          className={classes.image}
        />
        <Box className={classes.container}>
          <Typography className={classes.header1}>We are:</Typography>
          <Typography className={classes.header2}>
            What&apos;s Nearby?
          </Typography>
        </Box>
        {/* </Paper> */}
      </Paper>
    </ThemeProvider>
  );
};

export default HomePage;
