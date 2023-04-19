import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const MenuIcon = () => {
    const [anchorEl, setAnchorEl] = useState(false);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logOut = () => {
        sessionStorage.clear();
        navigate("/home");
        setAnchorEl(null);
    };

    const profile = () => {
        handleClose();
        navigate("/user/profile");
    };

    return (
        <>
            <IconButton onClick={handleClick}>
                <AccountCircleIcon fontSize="large"/>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={profile}>Profile</MenuItem>
                <MenuItem onClick={logOut}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default MenuIcon;
