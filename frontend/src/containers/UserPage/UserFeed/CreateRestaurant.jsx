import React, { useEffect, useState } from "react";
import { Box, DialogContent, makeStyles, Typography } from "@material-ui/core";
import { Button, Dialog,  Rating, TextField } from "@mui/material";
import { Star } from '@mui/icons-material';
import exampleRes from  '../../../images/exampleRestaurant.jpg';
import { fetchRestaurantReviews, postRestaurantReviews } from "../../../api/restaurant";

const useStyles = makeStyles((theme) => ({
    outerbox: {
        display: "inline-flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        gap: 2,
        border: "1px grey",
        borderRadius: 10,
        background: theme.palette.primary.main,
        fontWeight: "bold",
        margin: "10px"
    },
    content: {
        display: 'flex',
        width: "auto",
        fontWeight: "bold",
        userSelect: "none"
    },
    header: {
        color: theme.palette.beige.main,
        fontWeight: "bold"
    },
    ambiance: {
        color: theme.palette.beige.main,
        fontWeight: "bold"
    },
    image:{
        width: "100%",
        borderRadius:10
    },
    contentcontainer:{
        width: "22vw",
        borderRadius:10
    },
    imagecontainer:{
        maxWidth: '15vw', 
        borderRadius:10
    },
    checkbox: {
        paddingRight: "10%"
    },
    dialog: {
        display:"flex",
        flexDirection:"column",
        padding: 10,
        // minWidth: "60vw",
        backgroundColor: theme.palette.beige.main,
        borderRadius: 10
    },
    headers: {
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        padding: 10
    },
    dialogHeader: {
        color: theme.palette.darkBlue.main,
        fontSize: 46,
        fontWeight: "bold"
    },
    dialogHeader2: {
        color: theme.palette.darkBlue.main,
        fontSize: 32
        // fontWeight: "bold"
    },
    dialogHeader3: {
        color: theme.palette.darkBlue.main,
        fontSize: 24
        // fontWeight: "bold"
    },
    reviewText: {
        color: theme.palette.darkBlue.main,
        fontSize: 12
    },
    userReview:{
        display:"flex"
    },
    review: {
        display:"flex",
        maxWidth: '120px',
        flexDirection: "column",
        border:"1px solid",
        borderRadius:8,
        borderColor: theme.palette.darkBlue.main,
        padding: 10
    },
    reviewRating: {
        display:"flex",
        flexDirection: "row"
    },
    star: {
        color: theme.palette.blue.main
    },
    button: {
        color: theme.palette.darkBlue.main
    },
    formcontainer: {
        display: "flex",
        flexDirection: "column"
    }

}));

const CreateRestaurant = (props) => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const [open, setOpen] = useState(false);
    // const [imageUrl, setImageUrl] = useState('../../../images/exampleRestaurant.jpg');
    // eslint-disable-next-line react/prop-types
    // const preference = props.name;
    const { id, name, cuisine, ambiance, rating } = props;
    const [review, setReview] = useState([]);
    const [reviewText, setReviewText] = useState('');

    const [serviceRating, setServiceRating] = useState(0);
    const [tasteRating, setTasteRating] = useState(0);
    const [ambianceRating, setAmbianceRating] = useState(0);

    
    const handleCheckboxClick = () => {
        setChecked(!checked);
        setOpen(true);
        // eslint-disable-next-line react/prop-types, no-console
        // console.log(name, " ", ambiance, " ", cuisine);
        // props.onPreferenceChange(preference, !checked);
    };

    const handleClose = () => {
        setChecked(false);
        setOpen(false);
    }
    
    // eslint-disable-next-line no-unused-vars
    // const handleImages = () => {
    //     // Set the new image URL based on your logic or data source
    //     const newImageUrl = '../../../CuisineImages/images/African.jpg';
    //     setImageUrl(newImageUrl);
    // };

    const handleReviews = async () => {
        const data = { restaurant_id: id };
        await fetchRestaurantReviews(data).then(response => {
            setReview(response.data)
        }
        );
    }

    const ambianceArray = JSON.parse(ambiance.replace(/'/g, '"'));
    const renderAmbiance = () => {
        if (Array.isArray(ambianceArray)) {
            return ambianceArray.join(", ");
        } else if (typeof ambianceArray === "string") {
            return ambianceArray;
        } else {
            return "";
        }
    };


    const renderReviews = () => {
        return review.map((review, index) => {
            return (
                <Box key={index} className={classes.review}>
                    <Box className={classes.reviewRating}>
                        <Typography>Ambiance: </Typography>
                        <Star className={classes.star}/>
                        <Typography>{review.ambiance_rating}</Typography>
                    </Box>
                    <Box className={classes.reviewRating}>
                        <Typography>Taste: </Typography>
                        <Star className={classes.star}/>
                        <Typography>{review.taste_rating}</Typography>
                    </Box>
                    <Box className={classes.reviewRating}>
                        <Typography>Service: </Typography>
                        <Star className={classes.star}/>
                        <Typography>{review.service_rating}</Typography>
                    </Box>
                    <Box className={classes.reviewRating}>
                        <Typography>Overall: </Typography>
                        <Star className={classes.star}/>
                        <Typography>{review.overall_rating}</Typography>
                    </Box>
                    <Typography>
                        Hello, the food was good.
                    </Typography>
                </Box>
            );
        });
    };
      

    const handleSubmit = async () =>{
        const data = { restaurant_id: id, 
            ambiance_rating: ambianceRating,
            taste_rating:tasteRating,
            service_rating:serviceRating };
        postRestaurantReviews(data)
            .then((response) => console.log(response))
            .catch(err=>console.error(err));
    };


    const handleReviewChange = (event) => {
        const inputText = event.target.value;
        const words = inputText.split(' ');
        if (words.length <= 200) {
            setReviewText(inputText);
        }
    };

    const handleServiceRatingChange = (event, value) => {
        setServiceRating(value);
    };
    
    const handleTasteRatingChange = (event, value) => {
        setTasteRating(value);
    };
    
    const handleAmbianceRatingChange = (event, value) => {
        setAmbianceRating(value);
    };

    useEffect(() => {
        handleReviews();
    }, [checked]);
    

    return (
        <Box
            className={classes.outerbox}
            borderColor="darkBlue.main"
            // gap={2}
            onClick={handleCheckboxClick}
        >
            <Box className={classes.content}  borderRadius={16}>
                <Box className={classes.imagecontainer}>
                    <img src={exampleRes} alt="Box Image" className={classes.image}/>
                </Box>
                <Box p={2} className={classes.contentcontainer}>
                    <Typography variant="h6" className={classes.header}>{name}</Typography>
                    <Typography variant="subtitle1" className={classes.ambiance}>{cuisine}</Typography>
                    <Typography variant="body2" className={classes.ambiance}>{renderAmbiance()}</Typography>
                    <Rating value={rating} precision={0.5}  readOnly />
                </Box>
            </Box>
            <Dialog open={open} onClose={handleClose} PaperProps={{
                style: {
                    borderRadius: 10 
                }
            }}>
                <DialogContent className={classes.dialog}>
                    <img src={exampleRes} alt="Box Image" className={classes.image}/>
                    <Box className={classes.dialog}>
                        <Box className={classes.headers}>
                            <Typography variant="header1" className={classes.dialogHeader}>
                                {name}
                            </Typography>
                            <Typography  variant="header2" className={classes.dialogHeader2}>
                                {cuisine}
                            </Typography>
                            <Typography variant="header3" className={classes.dialogHeader3}>
                                {renderAmbiance()}
                            </Typography>
                        </Box>
                        <Typography className={classes.dialogHeader3}>Reviews</Typography>
                        <Box className={classes.userReview}>
                            {renderReviews()}
                        </Box>
                        <Box className={classes.formcontainer}>
                            <Typography className={classes.dialogHeader3}>
                            Leave a review
                            </Typography>
                            <Box sx={{
                                flexDirection:"column",
                                display: "flex"
                            }}>
                                <Box>
                                    <Typography className={classes.reviewText}>
                                        Rate Service
                                    </Typography>
                                    <Rating
                                        name="service-rating"
                                        value={serviceRating}
                                        onChange={handleServiceRatingChange}
                                    />
                                </Box>
                                <Rating
                                    name="taste-rating"
                                    value={tasteRating}
                                    onChange={handleTasteRatingChange}
                                />
                                <Rating
                                    name="ambiance-rating"
                                    value={ambianceRating}
                                    onChange={handleAmbianceRatingChange}
                                />
                                <TextField
                                    label="Write a Review"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    value={reviewText}
                                    onChange={handleReviewChange}
                                />
                                <Button type="submit" variant="contained" className={classes.button} 
                                    onClick={handleSubmit()}>
                                    Submit Review
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default CreateRestaurant;
