import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {DateAfterAddTask, DrawerState, OneTask} from "../../../RecoilState/DrawerState";
import TaskTitleAndDesc from "./TaskTitleAndDesc";
import SuccessAndClose from "./SuccessAndClose";
import {FocusState} from "../../../RecoilState/HomeState";
import {IconButton, Typography} from "@mui/material";
import {alignCenter} from "../MyTasks/List/TaskList";
import DeleteBtn from "../Home/Button/DeleteBtn";

const drawerWidth = 320
const DeleteStyle ={ ...alignCenter, m:"auto", width: "90%"}
const ContainerStyle = {
    borderTop: 1,
    color: "rgba(0,0,0,0.5)",
    borderColor: "rgba(0,0,0,0.2)",
}

export default function DrawerRight() {

    const [state, setState]: any = useRecoilState(DrawerState)
    const setFocusState = useSetRecoilState(FocusState)
    const task: any = useRecoilValue(OneTask);
    const date: string = useRecoilValue(DateAfterAddTask);

    const DoneStyle = () => setFocusState(true)

    return (
        <React.Fragment>
            <Drawer sx={{ flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth } }}
                    variant="persistent"
                    anchor="right" open={ state }>

                <Box sx={{ pl: 2, pr: 2, height: "100vh", bgcolor:"rgba(0,0,0,0.01)" }}
                     onClick={DoneStyle}
                     role="presentation">
                    <SuccessAndClose state={state} setState={setState}/>
                    <TaskTitleAndDesc item={task}/>
                </Box>

                <Box sx={ContainerStyle}>
                    <Box sx={DeleteStyle}>
                        <Typography variant="body2" sx={{flexGrow:1}}>
                            Posted { date }
                        </Typography>

                        <DeleteBtn size="large"
                                   name="task"
                                   data={task.title}
                                   index={0}/>
                    </Box>
                </Box>

            </Drawer>
        </React.Fragment>
    );
}