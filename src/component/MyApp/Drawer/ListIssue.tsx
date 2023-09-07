import React, {useEffect, useState} from 'react';
import BtnDone from "../Home/Button/BtnDone";
import {Box, Grid, Tooltip, Typography} from "@mui/material";
import DeleteBtn from "../Home/Button/DeleteBtn";
import {alignCenter} from "../MyTasks/List/TaskList";
import {IssueList, IssueType, OneTask} from "../../../RecoilState/DrawerState";
import {useRecoilState, useRecoilValue} from "recoil";
import useEditIssue from "./EditIssue";

const listStyle = {
    borderBottom: 1,
    ...alignCenter, p: "5px 0",
    borderColor:"rgba(0,0,0,0.05)"
}

const ListIssue = ({data, index}: any) => {
    const [state, setState] = useState("To Do")

    const dataDone = { data, index, state, setState, name : "done" }

    const EditIssue = useEditIssue( dataDone )

    useEffect(() => {
        setState(data.done)
    },[data.done])

    return (
        <Grid sx={listStyle}>
            <BtnDone fontSize={18}
                     category={state} name="issue"
                     EditIssue={EditIssue}/>

            <Typography variant="body2"
                        sx={{
                            ml:1.5, flexGrow: 1,
                            textDecoration: state === "Done" ? "line-through" : "none"
                        }}>{ data.issue }</Typography>

            <DeleteBtn size="small"
                       fontSize={20}
                       name="issue"
                       data={data.issue}
                       index={index}/>
        </Grid>
    );
};

export default ListIssue;