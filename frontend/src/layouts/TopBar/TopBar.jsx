import { AppBar, Container, makeStyles} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import theme from "../../themes/theme";
const useStyles = makeStyles(() => ({
  link: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  bar: {
    backgroundColor: "f75342",
  },

  toolbar: {
    minHeight: 64
  },
  logo: {
    textDecoration: 'none',
    color: 'white'
  },
  title: {
    flexGrow: 1,
    marginTop: '4px'
  }
}));

// color1: f75342
// color2: 763333
// color3: ffffff
// fira sans code

const TopBar = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" className={classes.bar}>
        <Container maxWidth='xl'>
          <Link className={classes.link} to="/">
            Home
          </Link>
          <Link className={classes.link} to="/contact">
            Contact
          </Link>
          <Link className={classes.link} to="/about">
            About
          </Link>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default TopBar;
