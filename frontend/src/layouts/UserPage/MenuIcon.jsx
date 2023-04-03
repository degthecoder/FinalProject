import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
// import { IconButton } from "@mui/material";

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
    const username = localStorage.getItem("username");
    localStorage.removeItem("username");
    localStorage.removeItem(username);
    console.log("Delete");
    navigate("/home");
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default MenuIcon;
