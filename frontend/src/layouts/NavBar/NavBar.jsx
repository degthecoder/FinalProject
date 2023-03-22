import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";
import image from "../../images/ConceptLogo.svg";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  icon: {
    maxWidth: 150,
    paddingRight: 100,
  },
  outerContainer: {
    display: "flex",
    backgroundColor: "rgba(118, 51, 51, 0.7)",
    // background: "#5ebcff",
    // backgroundColor: "rgba(59, 85, 105,0.5)",
    // color: "transparent",
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: "space-evenly",
    // display:'flex',
    // alignItems: "flex-start",
    // paddingRight: 0
  },
  container: {
    // width:'%50'
    width: "70%",
    display: "flex",
    alignItems: "center",
  },
  link: {
    // color: "#763333",
    color: "#ffffff",
    textDecoration: "none",
    // paddingRight: 100,
    width: "20%"
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  signupbutton: {
    background: "#ffffff",
  },
  loginbutton: {
    color: "#ffffff",
    paddingRight:15,
  },
});

// const pages = ["Home", "About Us"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const NavBar = () => {
  const classes = useStyles();
  return (
    // <Box className={classes.container} color="f75342">
    <AppBar
      position="fixed"
      color="transparent"
      className={classes.outerContainer}
    >
      <Toolbar>
        {/* <SvgIcon component={image} viewBox="0 0 600 476.6"/> */}
        <div>
          <img className={classes.icon} src={image} alt="ConceptLogosx" />
        </div>
        <Box className={classes.container}>
          <Link className={classes.link} to="/">
            <Typography variant="h6" component="div" className={classes.text}>
              Home
            </Typography>
          </Link>
          <Link className={classes.link} to="/about-us">
            <Typography variant="h6" component="div" className={classes.text}>
              About Us
            </Typography>
          </Link>
          <Link className={classes.link} to="/contact-us">
            <Typography variant="h6" component="div" className={classes.text}>
              Contact Us
            </Typography>
          </Link>
        </Box>
        <Box className={classes.buttonContainer}>
          <Button className={classes.loginbutton}>
            Login
          </Button>
          <Button className={classes.signupbutton}>
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
    // </Box>
  );
};

export default NavBar;
