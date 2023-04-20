/* eslint-disable */
import { React , useState } from "react";
import { Box, makeStyles, ThemeProvider, Button } from "@material-ui/core";
import theme from "../../../themes/theme.jsx";
import Footer from "../../../layouts/LandingPage/Footer.jsx";
// import UserNavBar from "../../../layouts/UserPage/UserNavbar";
import CreatePreference from "./CreatePreference.jsx";
import { useNavigate } from "react-router-dom";
import { fetchCustomerPreference } from "../../../api/customer_preference";


const useStyles = makeStyles(() => ({
    paperContainer: {
        background: theme.palette.secondary.main,
        height: "120vh",
        position: "relative",
        overflow: "hidden",
        objectFit: "cover",
        padding: "10%",
        justifyContent: "center"
    },
    formContainer: {
        right: "10%",
        height: "100vh",
        width: "80vw",
        borderRadius: 10,
        background: "#FDF0D5",
        padding: 10
    },
    buttonContainer: {
        display: "flex",

        padding: 10,
        objectFit: "cover",
        justifyContent: "center"
    },
    iconRow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20
    },
    button: {
        color: theme.palette.secondary.main,
        fontSize: 20,
        border: "2px solid",
        borderColor: theme.palette.secondary.main
    }
}));

// color1: f75342
// color2: 763333
// color3: ffffff
// fira sans code

const Preferences = () => {
    const classes = useStyles();
    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate();
    const [prefState, setPrefState] = useState();
    const foodPreferences = [
        "Italian",
        "Mexican",
        "Japanese",
        "Thai",
        "Chinese",
        "Indian",
        "Greek",
        "Korean",
        "Vietnamese",
        "French",
        "Spanish",
        "Mediterranean",
        "Middle Eastern",
        "American",
        "German",
        "Russian",
        "Cajun",
        "Brazilian",
        "Peruvian",
        "Argentinian",
        "African",
        "Caribbean",
        "Australian",
        "British",
        "Irish",
        "Scottish",
        "Welsh",
        "Turkish",
        "Moroccan",
        "Egyptian",
        "Ethiopian",
        "South African",
        "Israeli",
        "Lebanese",
        "Palestinian",
        "Iranian",
        "Afghan",
        "Pakistani",
        "Bangladeshi",
        "Sri Lankan",
        "Nepalese",
        "Malaysian",
        "Indonesian",
        "Filipino",
        "Kazakh",
        "Uzbek",
        "Georgian",
        "Armenian",
        "Azerbaijani",
        "Scandinavian",
        "Canadian",
        "South American"
    ];


    const handlePreferenceChange = (preference, isChecked) => {
        setPrefState((prevState) => ({
            ...prevState,
            [preference]: isChecked
        }));
    };

    const handleClick = () => {
        // eslint-disable-next-line no-console
        console.log(prefState);
        fetchCustomerPreference(prefState);

        navigate("/user");
    };

    return (
        <ThemeProvider theme={theme}>
            {/* <UserNavBar /> */}
            <Box className={classes.paperContainer}>
                <Box className={classes.formContainer}>
                    {foodPreferences.map((preference, index) => {
                        return <CreatePreference key={index} name={preference} 
                            onPreferenceChange={handlePreferenceChange} />;
                    })}
                    <Box className={classes.buttonContainer}>
                        <Button className={classes.button} onClick={handleClick}>
              Submit Preferences
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </ThemeProvider>
    );
};

export default Preferences;
