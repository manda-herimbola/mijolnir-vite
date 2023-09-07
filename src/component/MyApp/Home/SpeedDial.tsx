import * as React from 'react';
import Box from '@mui/material/Box';
import EditIcon from "@mui/icons-material/Edit";
import {IconButton, SpeedDialIcon} from "@mui/material";
import {TaskValue} from "../MyTasks/List/TaskList";
import {useRecoilValue} from "recoil";
import {MyDayTask} from "../../../RecoilState/TaskData";

const OpenIconSpeedDial = ({ form, AddForm }: any) => {
    const myDayTask: Array<TaskValue> = useRecoilValue(MyDayTask)
    const DisplayCard = myDayTask.length === 0 || form === false ? 'none' : 'flex'

    return (
        <Box sx={{ display: DisplayCard, justifyContent: "end" }}>
            <Box sx={{
                bgcolor: "rgba(255,255,255,0.8)",
                borderRadius: "100%",
                "&:hover": { bgcolor: "#FFF" },
                transitionDuration: "300ms"
            }}>
                <IconButton size="large"
                            onClick={ () => AddForm( false ) }>
                    <SpeedDialIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default OpenIconSpeedDial;