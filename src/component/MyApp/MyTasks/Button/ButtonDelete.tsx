import React, {useState} from 'react';
import {Box, Button} from "@mui/material";
import useDeleteData from "../../../../Hooks/useDeleteData";

const ButtonDelete = ({ id }: any) => {

    const [ response, DeleteTask ]: any = useDeleteData( 'http://localhost:5000/tasks/', id )

    return (
        <Button variant="contained"
                onClick={ DeleteTask }
                sx={{ml:1}}>delete</Button>
    );
};

export default ButtonDelete;