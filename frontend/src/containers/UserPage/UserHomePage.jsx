// /* eslint-disable */
import { React, useEffect, useState } from "react";
import { Box, Grid, makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import theme from "../../themes/theme";
import foodBG from "../../images/food-background.jpg";
import Footer from "../../layouts/LandingPage/Footer";
import UserNavBar from "../../layouts/UserPage/UserNavbar";
import CreateRestaurant from "./UserFeed/CreateRestaurant";
import { fetchNearRestaurants } from "../../api/restaurant";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: "100%",
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },
    paperContainer: {
        height: "100%",
        position: "relative",
        overflow: "hidden",
        marginTop: -10,
        marginBottom: -10
    },
    header1: {
        color: "#ffffff",
        fontSize: 70
    },
    header2: {
        color: "#ffffff",
        fontSize: 70,
        fontStyle: "italic ",
        marginTop: 0
    },
    location: {
        color: "#ffffff",
        fontSize: 50,
        fontStyle: "bold",
        marginTop: 30
    },
    image: {
        objectFit: "cover",
        maxWidth: "100%",
        maxHeight: "110%"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        width: "100vw",
        top: "10%"
    },
    container2: {
        flexDirection: "column",
        display: "flex",
        position: "absolute",
        top: "40%",
        width: "100vw"
    },
    container3: {
        flexDirection: "column",
        display: "flex",
        position: "absolute",
        top: "70%",
        width: "100vw"
    },
    grid: {
        flexGrow:1
    }
}));

const UserHomePage = () => {
    const classes = useStyles();
    const [overall, setOverall] = useState([]);
    const [taste, setTaste] = useState([]);
    const [ambiance, setAmbiance] = useState([]);


    const handleRestaurants = async () => {
        fetchNearRestaurants().then((res) => {
            setOverall(res.data.overall);
            setTaste(res.data.taste);
            setAmbiance(res.data.ambiance);
        });
    };
    

    const renderRestaurants = (which) => {
        console.log(which);

        switch (which) {
        case 1:
            return (overall.map((restaurant, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <CreateRestaurant
                        key = {index}
                        name={restaurant.name}
                        cuisine={restaurant.cuisine}
                        ambiance={restaurant.ambiance}
                        rating={restaurant.rating}
                    />
                </Grid>
            )))
        case 2: 
            return (taste.map((restaurant, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <CreateRestaurant
                        key = {index}
                        name={restaurant.name}
                        cuisine={restaurant.cuisine}
                        ambiance={restaurant.ambiance}
                        rating={restaurant.rating}
                    />
                </Grid>
            )))
        case 3:
            return (ambiance.map((restaurant, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <CreateRestaurant
                        key = {index}
                        name={restaurant.name}
                        cuisine={restaurant.cuisine}
                        ambiance={restaurant.ambiance}
                        rating={restaurant.rating}
                    />
                </Grid>
            )))
        default:
            break;
        }

        return (overall.map((restaurant, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <CreateRestaurant
                    key = {index}
                    name={restaurant.name}
                    cuisine={restaurant.cuisine}
                    ambiance={restaurant.ambiance}
                    rating={restaurant.rating}
                />
            </Grid>
        )))
    }

    useEffect(() => {
        handleRestaurants();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <UserNavBar />
            <Box className={classes.paperContainer}>
                <img
                    src={foodBG}
                    alt="food-background"
                    className={classes.image}
                />
                <Box className={classes.container}>
                    <Typography className={classes.location}>
                        Overall Recommended
                    </Typography>
                    <div style={{ overflowX: 'auto' }}>
                        <Grid container spacing={2} wrap="nowrap" className={classes.grid} direction="row">
                            {overall.length > 0 ? 
                                (renderRestaurants(1)):
                                (<Typography className={classes.header1}> </Typography>)}
                        </Grid>
                    </div>
                </Box>
                <Box className={classes.container2}>
                    <Typography className={classes.location}>
                        Taste
                    </Typography>
                    <div style={{ overflowX: 'auto' }}>
                        <Grid container spacing={1} wrap="nowrap"  direction="row" className={classes.grid}>
                            {overall.length > 0 ? 
                                (renderRestaurants(2)):
                                (<Typography className={classes.header1}> </Typography>)}
                        </Grid>
                    </div>
                </Box>
                <Box className={classes.container3}>
                    <Typography className={classes.location}>
                        Ambiance
                    </Typography>
                    <div style={{ overflowX: 'auto' }}>
                        <Grid container spacing={1} wrap="nowrap"  direction="row" className={classes.grid}>
                            {overall.length > 0 ? 
                                (renderRestaurants(3)):
                                (<Typography className={classes.header1}> </Typography>)}
                        </Grid>
                    </div>
                </Box>
            </Box>
            <Footer />
        </ThemeProvider>
    );
};

export default UserHomePage;
