import React from 'react';
import {Box, TextField, Typography} from "@mui/material";
import useStyle from "../../../Style/Style";

const LastName = () => {
    const classes: any = useStyle()

    return (
        <Box>
            <Typography variant="body2">LAST NAME</Typography>
            {/*<TextField variant="standard"*/}
            {/*           name="last-name"*/}
            {/*           placeholder="Last name"*/}
            {/*           className={classes.SmallInputProfile}/>*/}
        </Box>
    );
};

export default LastName;