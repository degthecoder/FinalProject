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
        background: theme.palette.beige.main,
        overflow: "hidden"
    },
    container: {
        paddingTop: "15vh",
        // height: "100vh",
        minHeight: "auto",
        width: "85vw",
        borderRadius: 10,
        background: theme.palette.beige.main,
        padding: 10,
        overflow: "scroll",
        padding: 10
    },
    searchcontainer: {
        paddingTop: "15vh",
        // height: "100vh",
        minHeight: "auto",
        borderRadius: 10,
        background: theme.palette.beige.main,
        padding: 10,
        overflow: "scroll",
        padding: 10
    },
    noLocation: {
        height: "100vh",
        width: "80vw",
        borderRadius: 10,
        background: theme.palette.beige.main,
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
    const [restaurantlist, setRestaurants] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleRestaurants = async () => {
        fetchNearRestaurants().then((res) => {
            setRestaurants(res.data);
        });
    };

    const renderRestaurants = () => {
        try {
            if(searchTerm !== null) {
                const filteredItems = restaurantlist.filter(item => item.name.
                    toLowerCase().includes(searchTerm.toLowerCase()));
                    
                return filteredItems.map((restaurant, index) => {
                    return (
                        <CreateRestaurant
                            key={index}
                            name={restaurant.name}
                            cuisine={restaurant.cuisine}
                            ambiance={restaurant.ambiance}
                        />
                    );
                });
                    
            }
            
            return restaurantlist.map((restaurant, index) => {
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

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
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
                    {restaurantlist.length > 0 ? (
                        renderRestaurants()
                    ) : (
                        <Typography className={classes.noLocation}>Loading...</Typography>
                    )}
                </Box>
                <Box className={classes.searchcontainer} border={1}>
                    <TextField id="outlined-search"
                        onChange={handleSearch}
                        label="Search for a restaurant"
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
