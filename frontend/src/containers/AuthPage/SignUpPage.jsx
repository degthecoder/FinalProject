/*eslint-disable*/
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
import { fetchRegister } from "../../api/authentication";
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
    justifyContent: "space-evenly",
    padding: 2,
    marginBottom: 20,
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
    fontSize: 10,
  },
}));

// color1: f75342
// color2: 763333
// color3: ffffff
// fira sans code

const SignUpPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [color, setColor] = useState("white");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle login logic here, e.g. submit form data to server
    const credentials = {
      username: username,
      email: email,
      password: password,
    };
    fetchRegister(credentials)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          // navigate("/auth/login");
          navigate("/user/newuser");
        } else {
          setColor("red");
        }
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
                className={classes.textField}
                label="UserName"
                type="username"
                value={username}
                id="outlined-required-username"
                onChange={(event) => setUsername(event.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                className={classes.textField}
                label="Email"
                type="email"
                value={email}
                id="outlined-required-email"
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                className={classes.textField}
                label="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                fullWidth
                margin="normal"
              />
              <Typography
                className={classes.errorMessage}
                style={{ color: color }}
              >
                Username or email has already been used.
              </Typography>
              <Button type="submit" variant="contained" color="primary">
                Register
              </Button>
            </Box>
          </form>
        </Container>
        {/* </Box> */}
      </Box>
    </ThemeProvider>
  );
};

export default SignUpPage;
