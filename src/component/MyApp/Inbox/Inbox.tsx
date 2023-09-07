import React from 'react';
import {Box, Container} from "@mui/material";
import useStyle from "../../../Style/Style";
import Bg from "../../../assets/Img/Background.jpg";

const Inbox = () => {
    const classes: any = useStyle()

    return (
        <Box className={classes.ImageBgContainer}
             sx={{ backgroundImage: `url(${ Bg })`, pl:3}}>
            <Box sx={{ width: '100%', mt:8 }}>
                Inbox
            </Box>
        </Box>
    );
};

export default Inbox;