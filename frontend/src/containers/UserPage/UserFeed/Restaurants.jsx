import { React, useState, useEffect } from "react";
import { Box, makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import theme from "../../themes/theme";
import foodBG from "../../images/food-background.jpg";
import Footer from "../../layouts/LandingPage/Footer";
import { fetchLocation } from "../../api/authentication";
import UserNavBar from "../../layouts/UserPage/UserNavbar";

const useStyles = makeStyles(() => {
    
});

const Restaurants = () => {
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
        <img src={foodBG} alt="food-background" className={classes.image} />
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

export default Restaurants;
