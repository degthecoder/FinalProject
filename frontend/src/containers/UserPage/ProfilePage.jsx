import { React, useState, useEffect } from "react";
import { Box, makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import theme from "../../themes/theme";
import Footer from "../../layouts/LandingPage/Footer";
import { fetchLocation } from "../../api/authentication";
import UserNavBar from "../../layouts/UserPage/UserNavbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// import AspectRatio from '@mui/joy';
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  paperContainer: {
    background: "#0B3954",
    height: "120vh",
    position: "relative",
    overflow: "hidden",
    objectFit: "cover",
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
  userContainer: {
    background: "#087E8B",
    position: "absolute",
    top: "10%",
    right: "10%",
    height: "100vh",
    width: "80vw",
    borderRadius: 5,
  },
  iconRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

// color1: f75342
// color2: 763333
// color3: ffffff
// fira sans code

const ProfilePage = () => {
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
        <Box className={classes.userContainer}>
          <Box className={classes.iconRow}>
            <AccountCircleIcon fontSize="large" />
            <Typography className={classes.location}>
              {location ? `Your Location is ${location}` : "Loading..."}
            </Typography>
          </Box>
        </Box>
        <Box className={classes.container}>
          {/* <Typography className={classes.location}>
            {location ? `Your Location is ${location}` : "Loading..."}
          </Typography> */}
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default ProfilePage;
