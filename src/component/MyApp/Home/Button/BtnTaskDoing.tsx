import React from 'react';
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import {IconButton} from "@mui/material";

const BtnTaskDoing = () => {
    return (
        <IconButton type="submit"
                    edge="start"
                    color="inherit">
            <HourglassBottomIcon />
        </IconButton>
    );
};

export default BtnTaskDoing;