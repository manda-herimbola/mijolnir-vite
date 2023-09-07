import React from 'react';
import {Box, CardContent, Typography} from "@mui/material";
import {alignCenter} from "../MyTasks/List/TaskList";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const style = { fontSize:15, cursor: "pointer" }

const TextTitle = ({ title }: any) => {
    return (
        <Box sx={{ ...alignCenter, width: '100%' }}>
            <CheckCircleOutlineIcon sx={style}/>
            <Typography noWrap sx={{ ml:1,fontSize:11 }}>
                { title }
            </Typography>
        </Box>
    );
};

export default TextTitle;