import React from 'react';
import {alignCenter, TaskValue} from "../MyTasks/List/TaskList";
import {Box, Grid, IconButton, Tooltip, Typography} from "@mui/material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {useRecoilValue} from "recoil";
import {OneTask} from "../../../RecoilState/DrawerState";
import CloseIcon from "@mui/icons-material/Close";

export const addDayStyle = {
    p: 1.5, ...alignCenter,
    color: "rgba(0,0,0,0.5)",
    '&:hover': {
        bgcolor: "rgba(0,0,0,0.1)"
    },
    transitionDuration: '300ms',
    cursor: 'pointer'
}

const AddToMyJourney = () => {
    const task: any = useRecoilValue(OneTask);

    return (
        <Box sx={{ ...addDayStyle,
            color: task.project === "My journey" ? "rgb(0,61,201)" : "rgba(0,0,0,0.5)"
        }}>
            <Box sx={{ ...alignCenter, flexGrow: 1}}>
                <WbSunnyIcon sx={{fontSize: 20, mr: 2}}/>

                <Typography variant="body2">Add to my day</Typography>
            </Box>

            <Box sx={{ display: task.project === "My journey" ? "flex" : "none" }}>
                <Tooltip title="clear" arrow>
                    <CloseIcon sx={{fontSize: 20, color: "inherit" }}/>
                </Tooltip>
            </Box>

        </Box>
    );
};

export default AddToMyJourney;