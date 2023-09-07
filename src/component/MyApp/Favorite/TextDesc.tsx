import React from 'react';
import {Avatar, Box, CardContent, Typography} from "@mui/material";
import {alignCenter} from "../MyTasks/List/TaskList";

const TextDesc = ({ desc }: any) => {
    return (
        <Box sx={{ ...alignCenter,mt:0.5 }}>
            <Avatar sx={{ mr:1, height: 15, width: 15 }}/>
            <Typography sx={{ color: 'rgba(0,0,0,0.6)',fontSize:10 }}>
                { desc }
            </Typography>
        </Box>
    );
};

export default TextDesc;