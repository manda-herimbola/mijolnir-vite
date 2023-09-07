import React from 'react';
import {Box, Container} from "@mui/material";
import useStyle from "../../../Style/Style";
import CardTaskProject from "./CardTaskProject";
import Bg from "../../../assets/Img/Background.jpg";

const Favorite = () => {
    const classes: any = useStyle()

    return (
        <Box className={classes.ImageBgContainer}
             sx={{ backgroundImage: `url(${ Bg })`, pl: 3}}>
            <Box sx={{ width: '100%', mt:8 }}>
                <CardTaskProject />
            </Box>
        </Box>
    );
};

export default Favorite;