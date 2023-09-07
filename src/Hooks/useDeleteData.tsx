import React, {useState} from 'react';
import {useRecoilState, useSetRecoilState} from "recoil";
import {TaskData, MyDayTask} from "../RecoilState/TaskData";
import {TaskValue} from "../component/MyApp/MyTasks/List/TaskList";
import {DialogueState, DrawerState} from "../RecoilState/DrawerState";

const useDeleteData = ( url: string, id: string ) => {
    const [ response, setResponse ]: any = useState({})
    const handleClose = useSetRecoilState(DialogueState)
    const setState = useSetRecoilState(DrawerState)
    /*const [ dataTask, setDataTask ]: any = useRecoilState(TaskData)*/
    const [ myDayTask, setMyDayTask ]: any = useRecoilState(MyDayTask)

    const DeleteData: any = async () => {
        const todo: Array<TaskValue> = myDayTask.filter(({ _id }: TaskValue) => _id !== id)
        /*const dataFilter: Array<TaskValue> = dataTask.filter(({ _id }: TaskValue) => _id !== id)*/

        /*setDataTask( dataFilter )*/
        setState(false)
        handleClose(false)
        setMyDayTask( todo )

        try {
            const res: any = await fetch( `${ url }${ id }` ,{ method: 'DELETE'})

            setResponse(await res.json())
        }catch (e) {
            console.log(e)
        }

    }

    return [ response, DeleteData ]
};

export default useDeleteData;