import React from 'react';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

const InputStyle = {
    border: "none",
    background: "none",
    marginLeft: 1
}

const TitleFormInput = ({ data, check }:any) => {
    const ChangeTitle = () => {
        console.log(data.title)
    }

    return (
        <Box component="form">
            {/*<Typography variant="body2"
                         sx={{
                             display: 'none',
                             ml: 1.4,
                             textDecoration: check ? "line-through" : "none"
                         }}>
                {data.title}
            </Typography>*/}

            <Typography variant="body1"
                        component="input"
                        type="text"
                        onChange={ ChangeTitle }
                        defaultValue={ data.title }
                        name="title"
                        sx={{
                            textDecoration: check ? "line-through" : "none",
                            ...InputStyle, width: "100%"
                        }}/>
        </Box>
    );
};

export default TitleFormInput;