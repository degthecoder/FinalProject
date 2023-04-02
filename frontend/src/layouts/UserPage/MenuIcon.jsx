import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Menu, MenuItem } from "@material-ui/core";

const MenuIcon = () => {
  const [anchorEl, setAnchorEl] = useState(true);
  const open = Boolean(anchorEl);
  const handleClick = () => {
    setAnchorEl();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box handleClick={handleClick}>
        <AccountCircleIcon />
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default MenuIcon;
