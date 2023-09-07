import React from 'react';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";

const BtnMoreList = () => {
    return (
        <IconButton edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{color: "#fff"}}>
            <MoreHorizIcon />
        </IconButton>
    );
};

export default BtnMoreList;