import React, {useState} from 'react';
import IconButton from "@mui/material/IconButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {useRecoilState, useSetRecoilState} from "recoil";
import {dateString} from "../../Form/HomeFormData";
import {TaskData, MyDayTask} from "../../../../../RecoilState/TaskData";
import {OneTask} from "../../../../../RecoilState/DrawerState";
import PicAudio from "../../../../../assets/Audio/Pic.mp3";
import {Tooltip} from "@mui/material";

const style = { fontSize:20, cursor: "pointer" }

const CheckedDone = ({ data }: any) => {

    const [dataMyDayTask, setMyDayTask]: any = useRecoilState(MyDayTask)
    const setDataTask = useSetRecoilState(TaskData)
    const setTask = useSetRecoilState(OneTask);

    const url: string = 'http://localhost:5000/tasks/'

    const EditCategory = async () => {
        const songs = new Audio( PicAudio )

        const newData = {
            ...data,
            category: data.category === "To Do" ? "Done" : "To Do",
            date: dateString
        }

        try {

            await fetch(`${ url }${ data._id }`,{
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify( newData )
            })

            const resGet = await fetch( url )
            const dataTaskRes = await resGet.json()
            const iData = dataMyDayTask.length
            const dataFil = iData === 0 ? [] : dataTaskRes.slice(-iData)

            setDataTask( dataTaskRes )
            setMyDayTask( dataFil )
            setTask ( newData )

            data.category === "Done" ? songs.pause() : await songs.play()

        }catch (err){
            console.log(err)
        }
    }

    return (
        <Tooltip title={data.category === "Done" ? "Remove to done" : "Add to done"} arrow>
            <IconButton size="small"
                        edge="start"
                        onClick={ EditCategory }
                        aria-label="open drawer"
                        sx={{color: "#000"}}>

                { data.category === "Done" ?
                    <CheckCircleIcon sx={style} /> :
                    <CheckCircleOutlineIcon sx={style}/> }
            </IconButton>
        </Tooltip>
    );
};

export default CheckedDone;