import React from 'react';
import {Box, Typography} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import useStyle from "../../../Style/Style";

export const AssigneesStyles = {
    ml: 2,
    display: "flex",
    width: '300px',
    justifyContent: "space-between",
    alignItems: "center"
}

const Assignees = () => {
    const classes = useStyle()

    return (
        <Box className={classes.TaskOption} sx={AssigneesStyles}>
            <Typography variant="body1" component="p">Assignees</Typography>
            <SettingsIcon/>
        </Box>
    );
};

export default Assignees;