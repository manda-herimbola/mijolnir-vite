import React from 'react';
import TaskIcon from '@mui/icons-material/Task';
import {IconButton} from "@mui/material";

const BtnTaskDone = () => {
    return (
        <IconButton type="submit"
                    edge="start"
                    color="inherit">
            <TaskIcon />
        </IconButton>
    );
};

export default BtnTaskDone;