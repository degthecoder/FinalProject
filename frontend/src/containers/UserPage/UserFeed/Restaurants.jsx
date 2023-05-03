// /* eslint-disable */
import { React, useState, useEffect } from "react";
import {
    Box,
    InputAdornment,
    makeStyles,
    Slider,
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
        paddingTop: "80px",
        height: "auto",
        minHeight: "100vh",
        width: "85vw",
        background: theme.palette.beige.main,
        overflow: "scroll",
        padding: 10
    },
    searchcontainer: {
        background: theme.palette.beige.main,
        paddingTop: "100px",
        justifyContent:"space-between",
        padding: 10
    },
    noLocation: {
        height: "100vh",
        width: "80vw",
        borderRadius: 10,
        background: theme.palette.beige.main,
        fontSize: 30
    },
    searchtext: {
        marginTop: 15,
        color: theme.palette.primary.main,
        fontSize: 12,
        top:"10"
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
    const [slideValue, setSlideValue] = useState([0, 10]);

    const handleRestaurants = async () => {
        fetchNearRestaurants().then((res) => {
            setRestaurants(res.data);
        });
    };

    const renderRestaurants = () => {
        try {
            const filteredItems = restaurantlist.filter(item => 
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                     item.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      item.ambiance.toLowerCase().includes(searchTerm.toLowerCase()));

            const extraFilter = filteredItems.filter(item => (slideValue[1]>item.overall_rating
                    && item.overall_rating > slideValue[0]));
                      
            return extraFilter.map((restaurant, index) => {
                return (
                    <CreateRestaurant
                        key={index}
                        name={restaurant.name}
                        cuisine={restaurant.cuisine}
                        ambiance={restaurant.ambiance}
                        rating={restaurant.overall_rating}
                    />
                );
            });
            
        } catch (error) {
            return (
                <Typography className={classes.noLocation}>
                    It looks like your location is not accessible. Please try again after
                    allowing location services!
                </Typography>
            );
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSliderChange =  (event, newValue) => {
        setSlideValue(newValue);
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
                    />
                    <Typography gutterBottom className={classes.searchtext}>Rating</Typography>
                    <Slider
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                        value={slideValue}
                        step={1}
                        marks
                        min={0}
                        max={10}
                    />
                </Box>
            </Box>
            <Footer />
        </ThemeProvider>
    );
};

export default Restaurants;
