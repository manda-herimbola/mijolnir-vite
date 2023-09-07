import React from 'react';
import NotificationsIcon from "@mui/icons-material/Notifications";
import {IconButton} from "@mui/material";

const BtnTaskNotification = () => {
    return (
        <IconButton type="submit"
                    edge="start"
                    color="inherit">
            <NotificationsIcon />
        </IconButton>
    );
};

export default BtnTaskNotification;