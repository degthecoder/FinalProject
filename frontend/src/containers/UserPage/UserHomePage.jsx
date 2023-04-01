import { React, useState, useEffect } from "react";
import { Box, makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import theme from "../../themes/theme";
import foodBG from "../../images/food-background.jpg";
import Footer from "../../layouts/LandingPage/Footer";
import { fetchLocation } from "../../api/authentication";
import UserNavBar from "../../layouts/UserPage/UserNavbar";
// import AspectRatio from '@mui/joy';
const useStyles = makeStyles(() => ({
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
    marginBottom: -10,
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
  location: {
    color: "#ffffff",
    fontSize: 50,
    fontStyle: "bold",
    marginTop: 30,
  },
  image: {
    objectFit: "cover",
    maxWidth: "100%",
    maxHeight: "110%",
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

const UserHomePage = () => {
  const classes = useStyles();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetchLocation().then((res) => {
      setLocation(res);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <UserNavBar />
      <Box className={classes.paperContainer}>
        <img
          src={foodBG}
          alt="food-background"
          className={classes.image}
        />
        <Box className={classes.container}>
          <Typography className={classes.location}>
            {location ? `Your Location is ${location}` : "Loading..."}
          </Typography>
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default UserHomePage;
