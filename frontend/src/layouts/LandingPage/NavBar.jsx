/*eslint-disable*/
import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";
import image from "../../images/ConceptLogo.svg";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  icon: {
    maxWidth: 150,
    paddingRight: 100,
  },
  outerContainer: {
    display: "flex",
    backgroundColor: "rgba(172, 128, 160, 0.9)",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    paddingRight: "0",
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
    navigate("/auth/login");
  };
  const onSignUp = () => {
    // console.log("Button clicked!");
    navigate("/auth/register");
  };
  return (
    <AppBar
      position="fixed"
      color="transparent"
      className={classes.outerContainer}
      sx={{ justifyContent: "space-between" }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <a href="/">
            <img className={classes.icon} src={image} alt="ConceptLogosx" />
          </a>
        </Box>
        <Box className={classes.buttonContainer}>
          <Button className={classes.loginbutton} onClick={onLogin}>
            Login
          </Button>
          <Button className={classes.signupbutton} onClick={onSignUp}>
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
