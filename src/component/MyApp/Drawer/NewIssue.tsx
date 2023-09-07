import React, {FormEvent, useRef, useState} from 'react';
import {Box, Divider, Grid, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useStyle from "../../../Style/Style";
import {alignCenter} from "../MyTasks/List/TaskList";
import CheckedDoneStyle from "../Home/CheckedDoneStyle";
import BtnDone from "../Home/Button/BtnDone";
import {useRecoilState, useRecoilValue} from "recoil";
import {IssueList, IssueState, IssueType, OneTask} from "../../../RecoilState/DrawerState";
import IssueListTask from "./IssueListTask";
import useEditData from "../../../Hooks/useEditData";

const FormIssue = { color: "#0047e3", display:"flex", mt:1 }

const NewIssue = () => {

    const [done, setDone] = useState("To Do")

    const [display, setDisplay] = useRecoilState(IssueState)
    const [issueList,setIssue]: [Array<IssueType>,any] = useRecoilState(IssueList)
    const task: any = useRecoilValue(OneTask);

    const dataEdit = {
        url: 'http://localhost:5000/tasks/',
        id: task._id,
        done: done,
        name: "issue",
        issueList, setIssue, setDisplay
    }

    const [ ,AddIssue ] = useEditData( dataEdit )

    /*const SubIssueList = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        const form = ev.target as HTMLFormElement
        const formData = new FormData( form )
        const newData: any = Object.fromEntries( formData.entries() )

        setIssue([...issueList, { ...newData, done: 'To Do' }])

        setDisplay(true)
        form.reset()
    }*/

    const ChangeDisplay = () => {
        setDisplay(false)
    }

    return (
        <Box>

            <IssueListTask />

            <Box sx={FormIssue}
                 component="form"
                 onSubmit={AddIssue}>

                <CheckedDoneStyle style={display}
                                  fontSize={20}
                                  height={20} topAdd={1} topDone={-25}
                                  category={done}
                                  setCategory={setDone}/>

                <Typography variant="body2"
                            sx={{ display: display ? "flex" : "none", ml:1 }}
                            onClick={ChangeDisplay}>Add issue</Typography>

                <Typography variant="body2"
                            component="input"
                            name="issue"
                            sx={{
                                ml:1,
                                display: display ? "none" : "flex",
                                color: "inherit",
                                outline: "none",
                                border: "none",
                                textDecoration: done === "Done" ? "line-through" : "none"
                            }}/>
            </Box>

        </Box>
    );
};

export default NewIssue;