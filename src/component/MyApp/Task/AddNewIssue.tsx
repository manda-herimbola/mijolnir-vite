import React, {FormEvent, useState} from 'react';
import {Box, Button, Divider, TextField, Typography} from "@mui/material";
import useStyle from "../../../Style/Style";
import IconButton from "@mui/material/IconButton";
import IssueList from "./IssueList";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {AddIssue} from "../../../RecoilState/TaskProject";
import BtnSubmit from "../Home/Button/BtnSubmit";
import useEditData from "../../../Hooks/useEditData";
import {TaskValue} from "../MyTasks/List/TaskList";
import {TaskOne} from "../../../RecoilState/TaskData";

const AddNewIssue = () => {
    const classes = useStyle()
    const [display, setDisplay] = useState("none")
    const taskOne: TaskValue = useRecoilValue( TaskOne )
    const url: string = 'http://localhost:5000/tasks/'

    const [, EditTask ]: any = useEditData( url, taskOne._id, "issue" )

    const openInput =() => setDisplay("flex")

    return (
        <Box className={classes.TaskOption} sx={{ ml: 2, width: "300px" }}>
            <Box onSubmit={EditTask}
                 component="form">

                <Box className={classes.SpaceBetween}
                     sx={{ display: display === "flex" ? "none" : "flex" }}>
                    <Typography variant="body1"
                                component="p">Add new issue</Typography>

                    <IconButton size="small" onClick={ openInput }>
                        <Typography variant="h5" sx={{ width: 30, height: 30 }}>+</Typography>
                    </IconButton>
                </Box>

                <Box className={classes.SpaceBetween} sx={{display: display}}>
                    <TextField variant="outlined"
                               size="small"
                               name="issue"
                               sx={{ width: "100%" }}
                               placeholder="Add new issue"/>

                    <BtnSubmit/>
                </Box>

            </Box>

            <IssueList url={url}/>
        </Box>
    );
};

export default AddNewIssue;