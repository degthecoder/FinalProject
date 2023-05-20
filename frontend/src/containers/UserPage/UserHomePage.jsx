// /* eslint-disable */
import { React, useEffect, useState } from "react";
import { Box, Grid, makeStyles, ThemeProvider, Typography } from "@material-ui/core";
import theme from "../../themes/theme";
// import foodBG from "../../images/food-background.jpg";
import Footer from "../../layouts/LandingPage/Footer";
import UserNavBar from "../../layouts/UserPage/UserNavbar";
import CreateRestaurant from "./UserFeed/CreateRestaurant";
import { fetchNearRestaurants } from "../../api/restaurant";
import { CircularProgress } from "@mui/material";

const useStyles = makeStyles(() => ({
    paperContainer: {
        height: "120vh",
        maxWidth: "100vw",
        paddingTop: '64px',
        backgroundColor: theme.palette.beige.main
    },
    header1: {
        color: theme.palette.darkBlue.main,
        fontSize: 70
    },
    header2: {
        color: theme.palette.darkBlue.main,
        fontSize: 70,
        fontStyle: "italic ",
        marginTop: 0
    },
    location: {
        color: theme.palette.darkBlue.main,
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
        top: "10%"
    },
    grid: {
        maxHeight: '500px', // Set a maximum height for the grid container
        overflowY: 'hidden',
        maxWidth: '102vw'
    },
    gridItem: {
        width: '30vw',
        flex: 1
    },
    loading: {
        color: theme.palette.primary.main,
        fontStyle:"bold",
        fontSize: 30
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
        if(overall.length > 0 ){
            switch (which) {
            case 1:
                return (overall.map((restaurant, index) => (
                    <Grid item xs={12} sm={6} md={5} key={index} className={classes.gridItem}>
                        <CreateRestaurant
                            key = {index}
                            name={restaurant.name}
                            cuisine={restaurant.cuisine}
                            ambiance={restaurant.ambiance}
                            rating={restaurant.overall_rating}
                            id = {restaurant.id}
                        />
                    </Grid>
                )))
            case 2: 
                return (taste.map((restaurant, index) => (
                    <Grid item xs={12} sm={6} md={5} key={index} className={classes.gridItem}>
                        <CreateRestaurant
                            key = {index}
                            name={restaurant.name}
                            cuisine={restaurant.cuisine}
                            ambiance={restaurant.ambiance}
                            rating={restaurant.overall_rating}
                            id = {restaurant.id}
    
                        />
                    </Grid>
                )))
            case 3:
                return (ambiance.map((restaurant, index) => (
                    <Grid item xs={12} sm={6} md={5} key={index} className={classes.gridItem}>
                        <CreateRestaurant
                            key = {index}
                            name={restaurant.name}
                            cuisine={restaurant.cuisine}
                            ambiance={restaurant.ambiance}
                            rating={restaurant.overall_rating}
                            id = {restaurant.id}
    
                        />
                    </Grid>
                )))
            default:
                break;
            }
        } 

        return (
            <Box sx={{ 
                display:"flex",
                flexDirection: "row",
                height: "20vh",
                width:"100vw",
                marginTop: 10,
                alignItems: "center",
                justifyContent: "center"
                // backgroundColor: theme.palette.secondary.main
            }}>
                <CircularProgress sx={{ color: theme.palette.primary.main }} />
                <Typography className={classes.loading}>Loading...</Typography>
            </Box>
        )
    }

    useEffect(() => {
        handleRestaurants();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <UserNavBar />
            <Box className={classes.paperContainer}>
                <Box className={classes.container}>
                    <Typography className={classes.location}>
                        Overall Recommended
                    </Typography>
                    <Grid container spacing={4} wrap="nowrap" className={classes.grid} direction="row">
                        {renderRestaurants(1)}
                    </Grid>
                </Box>
                <Box className={classes.container}>
                    <Typography className={classes.location}>
                        Taste
                    </Typography>
                    <Grid container spacing={4} wrap="nowrap"  direction="row" className={classes.grid}>
                        {renderRestaurants(2)}
                    </Grid>
                </Box>
                <Box className={classes.container}>
                    <Typography className={classes.location}>
                        Ambiance
                    </Typography>
                    <Grid container spacing={4} wrap="nowrap"  direction="row" className={classes.grid}>
                        {renderRestaurants(3)}
                    </Grid>
                </Box>
            </Box>
            <Footer />
        </ThemeProvider>
    );
};

export default UserHomePage;
