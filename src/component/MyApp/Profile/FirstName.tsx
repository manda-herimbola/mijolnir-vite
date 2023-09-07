import React from 'react';
import {Box, TextField, Typography} from "@mui/material";
import useStyle from "../../../Style/Style";

const FirstName = () => {
    const classes: any = useStyle()

    return (
        <Box>
            <Typography variant="body2">FIRST NAME</Typography>
            {/*<TextField variant="standard"*/}
            {/*           name="username"*/}
            {/*           placeholder="username"*/}
            {/*           className={classes.SmallInputProfile}/>*/}
        </Box>
    );
};

export default FirstName;