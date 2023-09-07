import React from 'react';
import {Box, Grid, IconButton, Typography} from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import {addDayStyle} from "./AddToMyJourney";

const Description = () => {
    return (
        <Box sx={addDayStyle}>
            <DescriptionIcon sx={{ fontSize: 20, mr: 2 }}/>

            <Typography variant="body2">
                Add the description
            </Typography>
        </Box>
    );
};

export default Description;