import React from 'react';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import {TaskType} from "../State/TaskState";
import TaskContent from "./TaskContent";

const ContainerStyle = {
    mt: 13,
    height: '75vh', pl:4.5, pr:4.5,
    overflow: "auto"
}

const TasksData = ({ data }: ObjectType) => {

    return (
        <Box sx={ ContainerStyle }>
            <Box>
                <Grid container spacing={0.7}>
                    {
                        data.map(( item, index)=>(
                            <Grid key={index} item sm={6} md={4} lg={3}>
                                <TaskContent item={item} index={index}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default TasksData;

export type ObjectType = { data: Array<TaskType> }