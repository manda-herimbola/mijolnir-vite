import React, {useState} from 'react';
import {Box, Toolbar} from "@mui/material";
import {TaskValue} from "../MyTasks/List/TaskList";
import {useRecoilState, useRecoilValue} from "recoil";
import TaskListHome from "../Home/container/TaskListHome";
import {TaskData} from "../../../RecoilState/TaskData";
import FormInput from "../Home/Form/FormInput";
import {InputAnimationBlock, InputAnimationNone} from "../Home/Home";
import useStyle from "../../../Style/Style";
import {FilterProject} from "../../../RecoilState/TaskProject";

const Project = ({ pathProject, image }: any) => {
    const taskList: Array<TaskValue> = useRecoilValue(TaskData)
    const category: string = useRecoilValue(FilterProject)

    const projectFilter: Array<TaskValue> = taskList.filter((item) => item.project === pathProject)
    const FilterProCategory = projectFilter.filter((item) => item.category === category)

    const [ display, ]: any = useState({
        button: 'none',
        input: InputAnimationBlock
    })

    const classes: any = useStyle()

    const [, setCardDesc ]: any = useState( true )
    const [ reduction, setReduction ]: any = useState( { display: "none" })
    const [ changeColor, setChangeColor ]: any = useState( { backgroundColor: "#fff" })

    return (
        <Box maxWidth="lg"
             className={ classes.ImageBgContainer }>

            <Toolbar sx={{ height: 140 }}/>

            <TaskListHome todoTask={ category === 'Todo' ? projectFilter : FilterProCategory }/>

            <FormInput display={display}
                       reduction={reduction}
                       changeColor={changeColor}
                       setCardDesc={setCardDesc}
                       setReduction={setReduction}
                       setChangeColor={setChangeColor}/>
        </Box>
    );
};

export default Project;