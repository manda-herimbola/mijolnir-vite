import React from 'react';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import {IconButton} from "@mui/material";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {TaskData} from "../../../../RecoilState/TaskData";
import {TaskValue} from "../../MyTasks/List/TaskList";
import useDeleteAll from "../../../../Hooks/useDeleteAll";
import {useNavigate} from "react-router-dom";
import {ProjectValidate} from "../../../../RecoilState/TaskProject";

const BtnDelete = ({ data, setData, index, value }: any) => {

    const dataTask: Array<TaskValue> = useRecoilValue(TaskData)
    const setDataTask: any = useSetRecoilState(TaskData)
    const SetProject: any = useSetRecoilState(ProjectValidate)
    const navigate = useNavigate()

    const url: string = 'http://localhost:5000/tasks/delete-many'

    const ProjectFilter: Array<TaskValue> = dataTask.filter(( item) => item.project === value)
    const ArrayId: Array<string> = ProjectFilter.map(( item) => item._id )

    const [, DeleteAll ]: any = useDeleteAll( url, ArrayId )

    const DeleteData = () => {
        const confirmation = confirm("Are you sure to delete this project?")
        const beforeDelete = data[index-1].split('#')[0]

        if( confirmation ){
            setData( data.filter(( item: string ) => item.split('#')[0] !== value ))
            setDataTask( dataTask.filter((item: TaskValue) => item.project !== value ))

            DeleteAll()
            navigate(`/${beforeDelete}`)
            SetProject( beforeDelete )
        }

    }

    return (
        <IconButton size="small"
                    onClick={ DeleteData }
                    edge="end">
            <DeleteSweepIcon sx={{fontSize: 20}}/>
        </IconButton>
    );
};

export default BtnDelete;