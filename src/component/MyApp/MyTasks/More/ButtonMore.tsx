import React from 'react';
import IconButton from "@mui/material/IconButton";
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import {Button, Grid} from "@mui/material";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {TaskCategory, TaskCategoryWidth} from "../../../../RecoilState/TaskCategory";
import useStyle from "../../../../Style/Style";
import useDeleteAll from "../../../../Hooks/useDeleteAll";
import {TaskData} from "../../../../RecoilState/TaskData";
import {TaskValue} from "../List/TaskList";

const ButtonMore = ({ category }: any) => {

    const setTaskCategory: any = useSetRecoilState(TaskCategory)
    const setTaskWidth: any = useSetRecoilState(TaskCategoryWidth)
    const taskValue: Array<TaskValue> = useRecoilValue(TaskData)

    const classes: any = useStyle()
    //Filter data with category
    const CategoryFilter: Array<TaskValue> = taskValue.filter((item) => item.category === category)
    const ArrayId: Array<any> = CategoryFilter.map((item) => item._id)
    //Delete All dataCategory
    const url: string = 'http://localhost:5000/tasks/delete-many'
    const [ response, DeleteAll ]: any = useDeleteAll( url, ArrayId)

    const MoreIcon: any = () => {
        setTaskCategory(['To Do', 'AlarmButton', 'Done', 'Doing'])
        setTaskWidth( 250 )
    }

    return (
        <Grid container className={ classes.ButtonCategory }>
            <Button variant="outlined">Add</Button>
            <Button variant="outlined" onClick={ DeleteAll }>delete All</Button>
            <Button variant="outlined" onClick={ MoreIcon }>Tasks</Button>
        </Grid>
    );
};

export default ButtonMore;