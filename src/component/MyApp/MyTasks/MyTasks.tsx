import React from 'react';
import {Box,Typography} from "@mui/material";
import Container from "@mui/material/Container";
import TaskList from "./List/TaskList";
import useStyle from "../../../Style/Style";
import IconMore from './More/IconMore';
import {useRecoilValue} from "recoil";
import {TaskCategory, TaskCategoryWidth} from "../../../RecoilState/TaskCategory";
import ButtonMore from "./More/ButtonMore";

const MyTasks = () => {

    const classes: any = useStyle()
    const taskCategoryList: Array<string> = useRecoilValue(TaskCategory)
    const taskWidth: number = useRecoilValue(TaskCategoryWidth)

    return (
        <Box sx={{ display: "flex", mt: 8 }}>
            {
                taskCategoryList.map((value,index) => (
                    <Box key={index} className={ classes.TaskCategory } minWidth={ taskWidth }>

                        <Box className={ classes.SpaceBetween } sx={{ height: 40 }}>
                            <Typography variant="body1" component="h3">{ value }</Typography>
                            <Box>
                                { taskWidth !== 250 ?
                                    <ButtonMore category={value}/> :
                                    <IconMore category={value}/> }
                            </Box>
                        </Box>

                        <TaskList category={value}/>
                    </Box>
                ))
            }
        </Box>
    );
};

export default MyTasks;