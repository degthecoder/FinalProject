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
        width: "4",
        fontWeight: "bold",
        userSelect: "none"
    },
    header: {
        color: theme.palette.beige.main,
        fontWeight: "bold"
    },
    image:{
        width: "100%",
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
    const name = props.name;
    const ambiance =props.ambiance;
    const cuisine = props.cuisine;

 
    const handleCheckboxClick = () => {
        setChecked(!checked);
        // eslint-disable-next-line react/prop-types, no-console
        console.log(name, " ", ambiance, " ", cuisine);
        // props.onPreferenceChange(preference, !checked);
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
                <Box p={2}>
                    <Typography variant="h6" className={classes.header}>{name}</Typography>
                    <Typography variant="body1">{ambiance}</Typography>
                    <Rating value={3.5} readOnly />
                </Box>
            </Box>
        </Box>
    );
};

export default CreateRestaurant;
