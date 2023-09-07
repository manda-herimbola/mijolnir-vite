import React, {useState} from 'react';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconButton from "@mui/material/IconButton";
import {Tooltip} from "@mui/material";

const BtnDone = (props:any) => {

    const AddToDone = () => {
        props.category === 'To Do' ?
            props.setCategory( 'Done' ) :
            props.setCategory('To Do')
    }

    return (
        <Tooltip title={props.category === "Done" ? "Remove done" : "Done"} arrow>
            <IconButton size="small"
                        edge="end"
                        onClick={ props.name === "issue" ? props.EditIssue : AddToDone }
                        color="inherit">
                { props.category === 'Done' ?
                    <CheckCircleIcon sx={{fontSize: props.fontSize}}/> :
                    <CheckCircleOutlineIcon sx={{fontSize: props.fontSize}}/> }
            </IconButton>
        </Tooltip>
    );
};

export default BtnDone;