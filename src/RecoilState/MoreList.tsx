import {atom} from "recoil";
import React, {ReactComponentElement} from "react";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import AlarmIcon from '@mui/icons-material/Alarm';
import TaskIcon from "@mui/icons-material/Task";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const MoreList = atom<Array<MoreListType>>({
    key: 'State.MoreList',
    default: [
        {
            value: 'Todo',
            component: <TaskIcon fontSize="small" />
        },{
            value: 'AlarmButton',
            component: <AlarmIcon fontSize="small" />
        },{
            value: 'Doing',
            component: <HourglassBottomIcon fontSize="small" />
        },{
            value: 'Done',
            component: <CheckCircleIcon fontSize="small"/>
        }
    ]
})

export type MoreListType = {
    value: string,
    component: ReactComponentElement<any>
}