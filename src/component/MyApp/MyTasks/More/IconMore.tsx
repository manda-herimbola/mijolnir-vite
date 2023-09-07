import React from 'react';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import {TaskCategory, TaskCategoryWidth} from "../../../../RecoilState/TaskCategory";
import {useSetRecoilState, useRecoilState, useRecoilValue} from "recoil";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import ClearAllIcon from '@mui/icons-material/ClearAll';
import {Grid} from "@mui/material";
import useDeleteAll from "../../../../Hooks/useDeleteAll";
import {TaskValue} from "../List/TaskList";
import {TaskData} from "../../../../RecoilState/TaskData";

const IconMore = ({ category }: any ) => {

    const setTaskCategory: any = useSetRecoilState(TaskCategory)
    const [taskWidth, setTaskWidth]: any = useRecoilState(TaskCategoryWidth)
    const taskValue: Array<TaskValue> = useRecoilValue(TaskData)
    //filter data with category
    const CategoryFilter: Array<TaskValue> = taskValue.filter((item) => item.category === category)
    const ArrayId: Array<any> = CategoryFilter.map((item) => item._id)
    //Delete All dataCategory
    const url: string = 'http://localhost:5000/tasks/delete-many'
    const [ response, DeleteAll ]: any = useDeleteAll( url, ArrayId)

    const MoreButton: any = () => {
        setTaskCategory([ category ])
        setTaskWidth( '100%' )
    }

    return (
        <Grid container>
            <IconButton size="small">
                <AddCircleOutlineTwoToneIcon />
            </IconButton>

            <IconButton size="small" onClick={ DeleteAll }>
                <ClearAllIcon />
            </IconButton>

            <IconButton size="small" onClick={ MoreButton }>
                <MoreHorizIcon />
            </IconButton>
        </Grid>
    );
};

export default IconMore;