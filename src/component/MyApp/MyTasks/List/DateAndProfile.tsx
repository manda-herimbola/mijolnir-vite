import React from 'react';
import {alignCenter} from "./TaskList";
import {Avatar, Box, Typography} from "@mui/material";

const DateAndProfile = ({ item }: any) => {
    return (
        <Box sx={{ ...alignCenter, mt: 2 }}>
            <Avatar sx={{ mr: 2, height: 22, width: 22 }}/>
            <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.5)' }}>
                { item.date }
            </Typography>
        </Box>
    );
};

export default DateAndProfile;