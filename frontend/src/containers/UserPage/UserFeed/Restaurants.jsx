/* eslint-disable */
import { React, useState, useEffect } from "react";
import { Box, makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import UserNavBar from "../../../layouts/UserPage/UserNavbar";
import Footer from "../../../layouts/LandingPage/Footer";
import theme from "../../../themes/theme";
import foodBG from "../../../images/food-background.jpg"
import { fetchLocation } from "../../../api/authentication";
import { fetchNearRestaurants } from "../../../api/restaurant";
import CreateRestaurant from "./CreateRestaurant";

const useStyles = makeStyles(() => ({
    paperContainer: {
        // justifyContent: "space-between",
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center",
        background: theme.palette.darkBlue.main,
        overflow: "hidden"
    },
    container: {
        position: "absolute",
        top: "15%",
        right: "10%",
        height: "100vh",
        width: "80vw",
        borderRadius: 10,
        background: "#FDF0D5",
        padding: 10,
        overflow: 'scroll',
    },
    image: {
        objectFit: "cover",
        maxWidth: "100%",
        maxHeight: "110%",
        opacity: 0.9
    },
}));

const Restaurants = () => {
    const classes = useStyles();
    const [location, setLocation] = useState(null);

    const restaurants = [
        {
            "name": "Bella Italia",
            "cuisine": "Italian",
            "ambiance": "Romantic"
        },
        {
            "name": "Sizzling Wok",
            "cuisine": "Chinese",
            "ambiance": "Casual"
        },
        {
            "name": "Le Bistro",
            "cuisine": "French",
            "ambiance": "Upscale"
        },
        {
            "name": "Curry House",
            "cuisine": "Indian",
            "ambiance": "Family-friendly"
        },
        {
            "name": "Tokyo Ramen",
            "cuisine": "Japanese",
            "ambiance": "Cozy"
        },
        {
            "name": "La Fiesta",
            "cuisine": "Mexican",
            "ambiance": "Festive"
        },
        {
            "name": "Blue Ocean",
            "cuisine": "Seafood",
            "ambiance": "Modern"
        },
        {
            "name": "The Green Garden",
            "cuisine": "Vegetarian",
            "ambiance": "Rustic"
        },
        {
            "name": "The Grill House",
            "cuisine": "American",
            "ambiance": "Sports bar"
        },
        {
            "name": "Thai Garden",
            "cuisine": "Thai",
            "ambiance": "Casual"
        }
    ];

    useEffect(() => {
        fetchLocation().then((res) => {
            setLocation(res);
        });
        //fetchNearRestaurants();
        const data = fetchNearRestaurants().then((res) => console.log(res)).catch()
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <UserNavBar />
            <Box className={classes.paperContainer}>
                <img src={foodBG} alt="food-background" className={classes.image} />
                <Box className={classes.container}>
                    {restaurants.map((restaurant, index) => {
                        return <CreateRestaurant key={index} name={restaurant.name} cuisine={restaurant.cuisine} ambiance={restaurant.ambiance}/>;
                    })}
                </Box>
            </Box>
            <Footer />
        </ThemeProvider>
    );
};

export default Restaurants;
