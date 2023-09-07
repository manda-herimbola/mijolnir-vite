import React from 'react';
import {Box, IconButton, Typography} from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import {addDayStyle} from "./AddToMyJourney";

const AddFileComponent = () => {
    return (
        <Box sx={addDayStyle}>
            <AttachFileIcon sx={{fontSize: 20, mr: 2}}/>

            <Typography variant="body2">Add File</Typography>
        </Box>
    );
};

export default AddFileComponent;