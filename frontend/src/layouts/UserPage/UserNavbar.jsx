import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@material-ui/core";
import image from "../../images/ConceptLogo.svg";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

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
const UserNavBar = () => {
  const classes = useStyles();
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
              Feed
            </Typography>
          </Link>
          <Link className={classes.link} to="/login">
            <Typography variant="h6" component="div" className={classes.text}>
              Restaurants
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default UserNavBar;