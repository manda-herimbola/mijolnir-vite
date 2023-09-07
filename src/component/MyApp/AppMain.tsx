import React, {useEffect} from 'react';
import Box from "@mui/material/Box";
import {ThemeProvider} from "@mui/material/styles";
import {createTheme, Toolbar} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Navbar.tsx/Navbar";
import {AppBar} from "../../Style/MuiStyle";
import DrawerMain from "./Drawer/DrawerMain";
import useGetData from "../../Hooks/useGetData";
import AlarmNotification from './Alarm/AlarmNotification';
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import { ProjectValidate} from "../../RecoilState/TaskProject";
import DrawerRight from "./Drawer/DrawerRight";
import {DeleteName, DialogueState, OneTask, TitleState} from "../../RecoilState/DrawerState";
import {TaskValue} from "./MyTasks/List/TaskList";
import AlertDialogSlide from "./Drawer/Dialogue";
import useEditIssue from "./Drawer/EditIssue";
import useDeleteData from "../../Hooks/useDeleteData";

const mdTheme = createTheme()

export const url: string = 'http://localhost:5000/tasks/'
export const urlUsers: string = 'http://localhost:5000/users/'
export const urlProject: string = 'http://localhost:5000/category/'

const AppMain = ({ component }: any) => {
    const [ open, ] = React.useState(true);
    const [openDia, handleClick]: [boolean, any] = useRecoilState(DialogueState)
    const name = useRecoilValue(DeleteName)
    const task: any = useRecoilValue(OneTask);
    /*const title = useRecoilValue(TitleState)
    const myJourneyTask: Array<TaskValue> = useRecoilValue(MyJourneyTask)
    const setMyJourneyTask: any = useSetRecoilState(MyJourneyTask)*/
    const url: string = 'http://localhost:5000/tasks/'

    const DeleteIssue = useEditIssue({ name : "delete" })
    const [,DeleteTask] = useDeleteData( url, task._id )

    const [] = useGetData( url )

    /*const newData = myJourneyTask.map((item) => item._id === title.id ? {...item, ...title} : item )

    const ChangeData = () => setMyJourneyTask([...newData])*/

    return (
        <ThemeProvider theme={ mdTheme }>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <DrawerMain open={open}/>
                <DrawerRight />

                <Box component="main"
                     sx={{ flexGrow: 1, height: '100vh', overflow: 'auto' }}>
                    { component }
                </Box>

                <AlarmNotification />
                <AlertDialogSlide open={ openDia }
                                  handleClose={ handleClick }
                                  name={ name }
                                  DeleteData={ name.name === "issue" ? DeleteIssue : DeleteTask }/>
            </Box>
        </ThemeProvider>
    );
};

export default AppMain;