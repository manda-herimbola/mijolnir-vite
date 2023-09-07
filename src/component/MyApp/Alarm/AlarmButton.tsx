import React from 'react';
import {Button, IconButton} from "@mui/material";
import SnoozeIcon from "@mui/icons-material/Snooze";
import CloseIcon from "@mui/icons-material/Close";
import {OpenOneTask} from "../MyTasks/List/OpenOneTask";

const AlarmButton = ({ handleClose, task }: any) => {

    return (
        <React.Fragment>
            <IconButton aria-label="close"
                        color="inherit"
                        sx={{ p: 0.5 }}>
                <SnoozeIcon />
            </IconButton>

            <OpenOneTask task={ task }/>

            <IconButton aria-label="close"
                        color="inherit"
                        sx={{ p: 0.5 }}
                        onClick={handleClose}>
                <CloseIcon />
            </IconButton>
        </React.Fragment>
    );
};

export default AlarmButton;