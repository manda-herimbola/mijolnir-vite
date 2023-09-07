import React, {useState} from 'react';
import {Avatar, Box, Button, Grid, Typography} from "@mui/material";
import useStyle from "../../../../Style/Style";
import {useRecoilValue} from "recoil";
import {TaskCategoryWidth} from "../../../../RecoilState/TaskCategory";
import {TaskData} from "../../../../RecoilState/TaskData";
import ButtonAdd from "../Button/ButtonAdd";
import {OpenOneTask} from "./OpenOneTask";
import ButtonDelete from "../Button/ButtonDelete";
import CheckedDone from "../../Home/Button/MiniButton/checkedDone";
import MiniBtnAlarm from "../../Home/Button/MiniButton/MiniBtnAlarm";
import {IssueType} from "../../../../RecoilState/DrawerState";

export const alignCenter: object = { display: 'flex', alignItems: 'center' }

const TaskList = ({ category }: any) => {

    const classes: any = useStyle()
    const taskWidth: any = useRecoilValue(TaskCategoryWidth)
    const taskValue: Array<TaskValue> = useRecoilValue(TaskData)
    const [openTask, setOpenTask]: any = useState(false)
    const [ taskModal, setTaskModal ]: any = useState({ id:'', title: '', description: '' })

    const [{ indexO, style }, setStyle]: any = useState({ index0: 0, style: 'none'})
    //Filter Category
    const FilterCategory: Array<any> = taskValue.filter((item) => item.category === category)
    //Add button in TaskData
    FilterCategory.push(<ButtonAdd />)
    //Filter data if width = 250
    const taskFilter: Array<any> = FilterCategory.slice(-4)

    const DataTask: Array<TaskValue> = taskWidth === '100%' || FilterCategory.length < 4 ? FilterCategory : taskFilter

    return (
        <Box className={ classes.ContainerCardFlex } maxWidth={ taskWidth }>

            {
                DataTask.map((item,index) => (

                    item.title === undefined && item.description === undefined
                        ? (
                            <Box key={ index }>
                                <ButtonAdd setOpenTask={ setOpenTask } setTaskModal={ setTaskModal }/>
                            </Box>
                        )
                        : (
                            <Box key={ index }
                                 className={ classes.ContainerCard }
                                 sx={ taskWidth === 250 ? { mr: 0, bgcolor: item.color } : { mr:3 } }>

                                <Grid onClick={() => ( style === 'none'
                                            ? setStyle({ indexO: index, style: 'flex' })
                                            : setStyle({ indexO: index, style: 'none' }))}

                                      className={ indexO === index && style === 'flex'
                                            ? classes.CardTaskActive
                                            : classes.CardTask } sx={{ bgcolor: item.color }}>

                                    <Box className={ classes.SpaceBetween }>
                                        <Box sx={{ ...alignCenter, width: '100%' }}>
                                            {
                                                item.category === 'AlarmButton' ?
                                                    <MiniBtnAlarm /> : <CheckedDone data={ item } />
                                            }
                                            <Typography variant="body1" noWrap sx={{ ml:2 }}>
                                                { item.title }
                                            </Typography>
                                        </Box>

                                        <Typography variant="caption" sx={{ ml:2 }}>{ item.hours }</Typography>
                                    </Box>

                                    {
                                        indexO === index && style === 'flex' ? (
                                            <Grid container sx={{ mt:1, mb:1 }}>

                                                <OpenOneTask task={ item }/>

                                                <ButtonDelete id={ item._id }/>

                                            </Grid>
                                        ) : ''
                                    }

                                    <Box sx={{ ...alignCenter, mt: 2 }}>
                                        <Avatar sx={{ mr:2, height: 22, width: 22 }}/>
                                        <Typography variant="caption" sx={{ color: 'rgba(0,0,0,0.6)' }}>
                                            { item.date }
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Box>
                        )
                ))
            }

        </Box>
    );
};

export type TaskValue = {
    _id?: string
    title?: string,
    description?: string,
    category?: string,
    project: string,
    color?: string,
    date?: string,
    hours?: string,
    day?: string,
    image?: any,
    issue?: Array<IssueType>
    favorite?: boolean
}

export default TaskList;