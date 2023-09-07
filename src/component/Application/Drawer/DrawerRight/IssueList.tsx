import React from 'react';
import {Box, IconButton, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const IssueList = () => {

    return (
        <Box>
            <IconButton size="small" sx={{borderRadius: 1}}>
                <AddIcon sx={{fontSize:20, mr:1}}/>
                <Typography variant="body2" sx={{ color: "rgba(0,0,0,0.5)" }}>
                    New issue
                </Typography>
            </IconButton>
        </Box>
    );
};

export default IssueList;