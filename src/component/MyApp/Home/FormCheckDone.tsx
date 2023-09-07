import React, {FormEvent, useEffect, useRef, useState} from 'react';
import {Box, Typography} from "@mui/material";
import {InputStyle} from "../MyTasks/List/CheckDone";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {TitleOpen, TitleState} from "../../../RecoilState/DrawerState";
import {TaskValue} from "../MyTasks/List/TaskList";
import {MyDayTask} from "../../../RecoilState/TaskData";

const FormCheckDone = ({ data, name }: any) => {
    const [clickValue, setClickValue] = useRecoilState(TitleOpen)
    const [title, setTitle] = useRecoilState(TitleState)

    const [myDayTask, setMyDayTask]: [Array<TaskValue>, any] = useRecoilState(MyDayTask)

    const url: string = 'http://localhost:5000/tasks/'

    const ref: any = useRef(null)
    const newData = myDayTask.map((item) => item._id === title.id ? {...item, ...title} : item )

    const EditTitle = async (ev: FormEvent<HTMLSpanElement>|any) => {

        try {
            setTitle({ title: ev.target.value, id: data._id })

            const res = await fetch( `${ url }${ data._id }`,{
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ title: ev.target.value })
            })

        }catch (err) {
            console.log(err)
        }
    }
    const SubmitTitle = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        setMyDayTask([...newData])
    }
    const ChangeValue = () => {
        setClickValue(true)
        ref.current.value = data.title
    }

    return (
        <Box component="form" onSubmit={SubmitTitle}>
            <Box sx={{
                width: 170,
                ml: 1.2,
                display: name !== "task-list" && clickValue ? "none" : "flex",
                textDecoration: data.category === "Done" ? "line-through" : "none"
            }}>
                <Typography variant="body1"
                            noWrap
                            onClick={ ChangeValue }>
                    { data.title }
                </Typography>
            </Box>

            <Typography variant="body1"
                        component="input"
                        onChange={EditTitle}
                        type="text"
                        ref={ref}
                        defaultValue={ data.title }
                        name="title"
                        sx={{
                            display: name !== "task-list" && clickValue ? "flex" : "none",
                            ...InputStyle,
                            textDecoration: data.category === "Done" ? "line-through" : "none",
                            width: "100%"
                        }}/>
        </Box>
    );
};

export default FormCheckDone;