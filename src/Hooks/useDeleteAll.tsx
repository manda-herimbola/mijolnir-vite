import React, {useState} from 'react';
import {useRecoilState} from "recoil";
import {TaskData} from "../RecoilState/TaskData";
import {TaskValue} from "../component/MyApp/MyTasks/List/TaskList";

const useDeleteAll = ( url: string, ArrayId: Array<string>) => {
    const [response, setResponse]: any = useState({})

    const DeleteAll: any = async () => {
        const res: any = await fetch( url ,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ids: ArrayId })
        })
        const resJson: any = await res.json()

        setResponse(resJson)
    }

    return [ response, DeleteAll ]

};

export default useDeleteAll;