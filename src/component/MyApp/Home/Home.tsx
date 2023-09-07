import React, {useState} from 'react';
import {Box} from "@mui/material";
import useStyle from "../../../Style/Style";
import ImageBgHome from "../../../services/ImageBgHome";
import CardDescHome from './container/CardDescHome';
import TaskListHome from "./container/TaskListHome";
import {TaskValue} from "../MyTasks/List/TaskList";
import { useRecoilValue, useSetRecoilState} from "recoil";
import {MyDayTask} from "../../../RecoilState/TaskData";
import {ImgBackground, ImgFile} from "../../../RecoilState/ImgBackground";
import {DrawerState, IssueState } from "../../../RecoilState/DrawerState";
import NavBarGrid from "../Navbar.tsx/NavBarGrid";
import NewFormInput from "./Form/NewFormInput";
import OpenIconSpeedDial from "./SpeedDial";

export const InputAnimationNone: object = {
    opacity: 0,
    bottom : -10
}

export const InputAnimationBlock: object = {
    opacity: 1,
    bottom : 10
}

const Home = () => {
    const classes: any = useStyle()
    const myDayTask: Array<TaskValue> = useRecoilValue(MyDayTask)
    const state: boolean = useRecoilValue(DrawerState)
    const imagePexels: Array<any> = useRecoilValue(ImageBgHome)
    const imageBg = useRecoilValue(ImgFile)

    const indexBg: number = useRecoilValue( ImgBackground )
    const setDisplayIssue = useSetRecoilState(IssueState);

    const [ form, AddForm ]: any = useState( true )
    const conditionBg = imagePexels[0] === undefined ? "" : imageBg

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
        width: `calc(100% - ${ state ? 320 : 0 }px)`,
        p: "0 30px",
        transitionDuration: "200ms"
    }

    const Initialize = () => {
        setDisplayIssue(true)
    }

    return (
        <Box className={ classes.ImageBgContainer }
             sx={{ backgroundImage: `url(${ conditionBg })` }}>

            <Box sx={{ ...containerStyle }} onClick={Initialize}>
                <Box sx={{ width: "100%", height: "100vh", pt: 2, pb: 2 }}>
                    <NavBarGrid />
                    <TaskListHome todoTask={myDayTask}/>
                    <CardDescHome form={form} AddForm={AddForm}/>
                    <NewFormInput form={form}/>
                    <OpenIconSpeedDial form={form} AddForm={AddForm}/>
                </Box>
            </Box>
        </Box>
    )
};

export default Home;