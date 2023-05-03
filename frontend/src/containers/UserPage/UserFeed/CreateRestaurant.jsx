import React, { useState } from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Rating } from "@mui/material";
import exampleRes from  '../../../images/exampleRestaurant.jpg';

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
    }
}));

const CreateRestaurant = (props) => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    // eslint-disable-next-line react/prop-types
    // const preference = props.name;
    const { name, cuisine, ambiance, rating } = props;

    
    const handleCheckboxClick = () => {
        setChecked(!checked);
        // eslint-disable-next-line react/prop-types, no-console
        // console.log(name, " ", ambiance, " ", cuisine);
        // props.onPreferenceChange(preference, !checked);
    };
    
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
        </Box>
    );
};

export default CreateRestaurant;
