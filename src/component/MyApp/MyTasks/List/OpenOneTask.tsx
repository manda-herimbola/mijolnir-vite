import * as React from 'react';
import Button from '@mui/material/Button';
import useGetOneData from "../../../../Hooks/useGetOneData";

export const OpenOneTask = ({ task }: any) => {

    const url: string = 'http://localhost:5000/tasks/'
    const [, GetOneTask] = useGetOneData( url, task._id)

    return (
        <div>
            <Button onClick={ GetOneTask }>Open</Button>
        </div>
    );

}