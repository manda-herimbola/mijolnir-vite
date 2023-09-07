import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import useStyle from "../../../Style/Style";
import {TaskValue} from "../MyTasks/List/TaskList";
import {useRecoilValue} from "recoil";
import {TaskOne} from "../../../RecoilState/TaskData";
import useEditData from "../../../Hooks/useEditData";
import useDeleteData from "../../../Hooks/useDeleteData";
import {Link, NavLink} from "react-router-dom";

const TaskForm = () => {
    const classes = useStyle()
    const taskOne: TaskValue = useRecoilValue( TaskOne )
    const url: string = 'http://localhost:5000/tasks/'

    return (
        <Box component="form"
             className={classes.TaskForm}
             sx={{ m:"10px 0" }}>

            <TextField variant="standard"
                       name="title"
                       defaultValue={ taskOne.title }
                       placeholder="Title"/>

            <TextField variant="standard"
                       name="description"
                       placeholder="Description"
                       defaultValue={ taskOne.description }
                       rows={18}
                       multiline/>

            <Button variant="text" type="submit">Edit</Button>

            <Link to={'/' + taskOne.project} style={{ textDecoration: "none" }}>
                <Button variant="text" >Remove</Button>
            </Link>

        </Box>
    );
};

export default TaskForm;