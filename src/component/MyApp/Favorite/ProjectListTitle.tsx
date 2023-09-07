import React from 'react';
import {Box, CardContent, Typography} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import useStyle from "../../../Style/Style";
import IconButton from "@mui/material/IconButton";

const ProjectListTitle = ({ project }: any) => {
    const classes = useStyle()

    return (
        <Box className={classes.SpaceBetween} sx={{ height:55,pl:2,pr:2 }}>
            <Typography>
                { project }
            </Typography>

            <IconButton size="small" sx={{ color: "inherit" }}>
                <MoreHorizIcon />
            </IconButton>
        </Box>
    );
};

export default ProjectListTitle;