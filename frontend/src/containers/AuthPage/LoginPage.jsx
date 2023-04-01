import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import theme from "../../themes/theme";
import TopBar from "../../layouts/LandingPage/TopBar";
import { fetchLogin } from "../../api/authentication";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    justifyContent: "space-between",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(54, 133, 181)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    margin: "normal",
    marginBottom: "2",
    marginTop: "2",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 2,
    height: 200,
    width: 200,
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    maxWidth: 300,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 2,
    margin: "auto",
    height: "auto",
    border: "1px solid #ccc",
    borderRadius: 4,
    backgroundColor: "#ffffff",
  },
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  splashScreen: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  errorMessage: {
    display: "flex",
    fontSize: 10,
  },
}));

// color1: f75342
// color2: 763333
// color3: ffffff
// fira sans code

// eslint-disable-next-line react/prop-types
const LoginPage = ({ setAuth }) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [color, setColor] = useState("white");

  const handleSubmit = (event) => {
    console.log(color);
    event.preventDefault();
    const credentials = { username: username, password: password };
    fetchLogin(credentials)
      .then((response) => {
        setAuth(response.data);
        if (!response.data) {
          setColor("red");
        } else navigate("/user");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.outerContainer}>
        <TopBar />
        <Container className={classes.container}>
          <form onSubmit={handleSubmit}>
            <Box className={classes.formContainer}>
              <TextField
                className={classes.TextField}
                label="UserName"
                type="username"
                value={username}
                id="outlined-required"
                onChange={(event) => setUsername(event.target.value)}
                fullWidth
              />
              <TextField
                className={classes.TextField}
                label="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                fullWidth
                margin="normal"
              />
              <Typography
                color="textPrimary"
                style={{ color: color }}
                className={classes.errorMessage}
              >
                The username or the password is wrong. Please try again.
              </Typography>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </Box>
          </form>
        </Container>
        {/* </Box> */}
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;
