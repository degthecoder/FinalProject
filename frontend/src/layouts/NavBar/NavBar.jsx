import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import image from "../../images/ConceptLogo.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  box: {
    // flexGrow: 1,
    background: "#f75342",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-evenly",
    // gap: "5px",
    // flexWrap: "wrap",
    width: "70vw",
  },
  icon: {
    maxHeight: 1000,
    maxWidth: 150,
    paddingRight: 100,
  },
  login: {
    background: "#ffffff",
    color: "#763333",
  },
  link: {
    textDecoration: "none",
    color: "#ffffff",
    display: "flex",
    justifyContent: "space-evenly",
    // gap: "5px",
    // flexWrap: "wrap",
    width: "70vw",
  },
});

// const pages = ["Home", "About Us"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const NavBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box} color="f75342">
      <AppBar position="static">
        <Toolbar className={classes.box}>
          {/* <SvgIcon component={image} viewBox="0 0 600 476.6"/> */}
          <div>
            <img className={classes.icon} src={image} alt="ConceptLogosx" />
          </div>
          <Link className={classes.link} to="/">
            <Typography variant="h6" component="div">
              Home
            </Typography>
          </Link>
          <Link className={classes.link} to="/about-us">
            <Typography variant="h6" component="div">
              About Us
            </Typography>
          </Link>
          <Link className={classes.link} to="/contact-us">
            <Typography variant="h6" component="div">
              Contact Us
            </Typography>
          </Link>
          <Button
            color="inherit"
            className={classes.login}
            sx={{ fontWeight: "bold" }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
