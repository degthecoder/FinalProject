import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";
import image from "../../images/ConceptLogo.svg";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  icon: {
    maxWidth: 150,
    paddingRight: 100,
  },
  outerContainer: {
    display: "flex",
    backgroundColor: "rgba(118, 51, 51, 0.9)",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  container: {
    width: "70%",
    display: "flex",
    alignItems: "center",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    width: "20%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  signupbutton: {
    background: "#ffffff",
    color: "#763333",
  },
  loginbutton: {
    color: "#ffffff",
    paddingRight: 15,
  },
});

// const pages = ["Home", "About Us"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const NavBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const onLogin = () => {
    console.log("Button clicked!");
    navigate("/login");
  };
  return (
    <AppBar
      position="fixed"
      color="transparent"
      className={classes.outerContainer}
    >
      <Toolbar>
        <a href="/">
          <img className={classes.icon} src={image} alt="ConceptLogosx" />
        </a>
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
          <Button className={classes.loginbutton} onClick={onLogin}>
            Login
          </Button>
          <Button className={classes.signupbutton}>Sign Up</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;