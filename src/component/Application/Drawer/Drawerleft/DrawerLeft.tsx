import React from 'react';
import {Box, Drawer} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import SearchAppBar from "../../../MyApp/Home/Search";
import useStyle from "../../../../Style/Style";
import LogoAndName from "./LogoAndName";
import OptionList from "./OptionList";
const DrawerLeft = () => {
    const classes = useStyle()

    return (
        <Box>
            <Toolbar className={classes.SpaceBetween} sx={{ px: [1.2] }}>
                <LogoAndName/>
            </Toolbar>
            <OptionList/>
        </Box>
    );
};

export default DrawerLeft;