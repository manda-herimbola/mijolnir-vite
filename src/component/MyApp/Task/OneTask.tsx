import React from 'react';
import {Box, Button, Container, Grid, Stack, TextField, Typography} from "@mui/material";
import useStyle from "../../../Style/Style";
import BtnDone from "../Home/Button/BtnDone";
import TaskForm from "./TaskForm";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import AddchartIcon from '@mui/icons-material/Addchart';
import SettingsIcon from '@mui/icons-material/Settings';
import {TaskValue} from "../MyTasks/List/TaskList";
import {useRecoilValue} from "recoil";
import {TaskOne} from "../../../RecoilState/TaskData";
import Assignees from "./Assignees";
import AddNewIssue from "./AddNewIssue";

const OneTask = () => {
    const classes = useStyle()
    const taskOne: TaskValue = useRecoilValue( TaskOne )

    return (
        <Container maxWidth="lg" sx={{ display: "flex", mt: 8 }}>

            <Box className={classes.TaskOption}>
                <Box className={classes.SpaceBetween}>
                    <Typography variant="body1" component="p">{ taskOne.project }</Typography>

                    <Grid className={ classes.AlignCenter }>
                        <Box className={ classes.AlignCenter } sx={{ml:1}}>
                            <PlaylistAddIcon />
                            <Typography variant="body2" component="p" sx={{ml:0.5}}>To do</Typography>
                        </Box>
                        <Box className={classes.AlignCenter} sx={{ml:1}}>
                            <AlarmOnIcon />
                            <Typography variant="body2" component="p" sx={{ml:0.5}}>Alarm</Typography>
                        </Box>
                        <Box className={classes.AlignCenter} sx={{ml:1}}>
                            <BtnDone />
                            <Typography variant="body2" component="p" sx={{ml:0.5}}>Done</Typography>
                        </Box>
                        <Box className={classes.AlignCenter} sx={{ml:1}}>
                            <AddchartIcon />
                            <Typography variant="body2" component="p" sx={{ml:0.5}}>Doing</Typography>
                        </Box>
                    </Grid>
                </Box>

                <TaskForm />
            </Box>

            <Box>
                <Assignees />

                <AddNewIssue />
            </Box>

        </Container>
    );
};

export default OneTask;