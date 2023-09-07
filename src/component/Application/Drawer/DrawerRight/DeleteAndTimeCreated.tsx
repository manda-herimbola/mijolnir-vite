import React from 'react';
import {Box, Typography} from "@mui/material";
import BtnDelete from "../../Button/Check_Done/Delete/BtnDelete";

const style = {
    display: "flex",
    alignItems: "center",
    padding: 0.5,
    borderTop: "1px solid rgba(0,0,0,0.1)",
    backgroundColor: "#FFFFFF"
}

const DeleteAndTimeCreated = () => {
    return (
        <Box sx={style}>
            <BtnDelete/>
            <Typography variant="body2" sx={{ml:2, color: "rgba(0,0,0,0.5)"}}>
                A few minites later
            </Typography>
        </Box>
    );
};

export default DeleteAndTimeCreated;