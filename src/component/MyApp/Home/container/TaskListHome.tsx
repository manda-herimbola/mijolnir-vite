import React, {useEffect, useState} from 'react';
import {Box, Grid} from "@mui/material";
import {TaskValue} from "../../MyTasks/List/TaskList";
import CheckDone from "../../MyTasks/List/CheckDone";
import DateAndProfile from "../../MyTasks/List/DateAndProfile";
import {useRecoilState, useSetRecoilState} from "recoil";
import {
    DateAfterAddTask,
    DrawerState,
    IssueList,
    IssueState,
    OneTask,
    TitleOpen
} from "../../../../RecoilState/DrawerState";
import {FocusState} from "../../../../RecoilState/HomeState";
import {url} from "../../AppMain";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';

const ContainerTaskList = {
    width: "100%",
    height: '72vh',
    overflow: "auto"
}

const listStyle = {
    borderRadius: 2, p: 2,
    transitionDuration: "50ms",
    "&:hover": {backgroundColor: "rgba(255,255,255,0.95)"},
    "&:active": {pl: 2.2}
}

const TaskListHome = ({todoTask}: any) => {

    const listTodo: Array<TaskValue> = todoTask

    const setState = useSetRecoilState(DrawerState);
    const [task, setTask]: any = useRecoilState(OneTask);
    const setClickValue = useSetRecoilState(TitleOpen)
    const setFocusState = useSetRecoilState(FocusState)
    const setIssueList = useSetRecoilState(IssueList)
    const setDate = useSetRecoilState(DateAfterAddTask)

    const OpenTheTask = (item: TaskValue) => async () => {
        dayjs.extend(relativeTime);

        const pastDate = dayjs(item.date + ' ' + item.hours).fromNow();

        try {
            const res = await fetch(url + item._id)
            const data = await res.json()

            setDate(pastDate)
            setTask(data)
            setIssueList(data.issue === undefined ? [] : data.issue)
        } catch (err) {
            console.log(err)
        }

        setState(true)
        setClickValue(false)
        setFocusState(true)
    }

    return (
        <Box sx={todoTask.length === 0 ? {display: "none"} : ContainerTaskList}>
            <Grid container spacing={2}>
                {
                    listTodo.map((item, index) => (
                        <Grid key={index} onClick={OpenTheTask(item)}
                              sx={{cursor: "pointer"}} item minWidth={254} lg={3}>
                            <Grid sx={{
                                ...listStyle,
                                bgcolor: item._id === task._id ? '#FFF' : 'rgba(255,255,255,0.8)'
                            }}>
                                <CheckDone item={item} name="task-list"/>
                                <DateAndProfile item={item}/>
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
};

export default TaskListHome;