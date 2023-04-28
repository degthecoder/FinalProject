// /* eslint-disable */
import { React, useState, useEffect } from "react";
import {
    Box,
    InputAdornment,
    makeStyles,
    TextField,
    ThemeProvider,
    Typography
} from "@material-ui/core";
import UserNavBar from "../../../layouts/UserPage/UserNavbar";
import Footer from "../../../layouts/LandingPage/Footer";
import theme from "../../../themes/theme";
import { fetchNearRestaurants } from "../../../api/restaurant";
import CreateRestaurant from "./CreateRestaurant";
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles(() => ({
    paperContainer: {
    // justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        // alignItems: "center",
        color: theme.palette.beige.main,
        overflow: "hidden"
    },
    container: {
        paddingTop: "15vh",
        // height: "100vh",
        minHeight: "auto",
        width: "85vw",
        borderRadius: 10,
        background: "#FDF0D5",
        padding: 10,
        overflow: "scroll",
        padding: 10
    },
    searchcontainer: {
        paddingTop: "15vh",
        // height: "100vh",
        minHeight: "auto",
        borderRadius: 10,
        background: "#FDF0D5",
        padding: 10,
        overflow: "scroll",
        padding: 10
    },
    noLocation: {
        height: "100vh",
        width: "80vw",
        borderRadius: 10,
        background: "#FDF0D5",
        fontSize: 30
    },
    image: {
        objectFit: "cover",
        maxWidth: "100%",
        maxHeight: "110%",
        opacity: 0.9
    }
}));

const Restaurants = () => {
    const classes = useStyles();
    const [restaurants, setRestaurants] = useState([]);

    const handleRestaurants = async () => {
        fetchNearRestaurants().then((res) => {
            setRestaurants(res.data);
        });
    };

    const renderRestaurants = () => {
        try {
            return restaurants.map((restaurant, index) => {
                return (
                    <CreateRestaurant
                        key={index}
                        name={restaurant.name}
                        cuisine={restaurant.cuisine}
                        ambiance={restaurant.ambiance}
                    />
                );
            });
        } catch (error) {
            return (
                <Typography className={classes.noLocation}>
                    {" "}
          It looks like your location is not accessible. Please try again after
          allowing location services!
                </Typography>
            );
        }
    };

    useEffect(() => {
        handleRestaurants();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <UserNavBar />
            <Box className={classes.paperContainer}>
                {/* <img src={foodBG} alt="food-background" className={classes.image} /> */}
                <Box className={classes.container}>
                    {restaurants.length > 0 ? (
                        renderRestaurants()
                    ) : (
                        <Typography className={classes.noLocation}>Loading...</Typography>
                    )}
                </Box>
                <Box className={classes.searchcontainer}>
                    <TextField variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                    ></TextField>
                </Box>
            </Box>
            <Footer />
        </ThemeProvider>
    );
};

export default Restaurants;
