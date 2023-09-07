import React, {useState} from 'react';
import {TaskValue} from "../component/MyApp/MyTasks/List/TaskList";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {TaskData, TaskOne} from "../RecoilState/TaskData";
import {AddIssue} from "../RecoilState/TaskProject";

const useEditData = ( dataEdit: any ) => {

    const [ response, setResponse ]: any = useState({})
    /*const [list, setList]: any = useRecoilState(AddIssue)
    const [task, setTask]: [Array<TaskValue>,any] = useRecoilState(TaskData)*/

    const EditData: any  = async (ev: SubmitEvent) => {
        ev.preventDefault()

        const form = ev.target as HTMLFormElement
        const formData = new FormData( form )
        const newData: any = Object.fromEntries( formData.entries() )

        try{
            const PostData = async ( data: any ) => {
                const res = await fetch( `${ dataEdit.url }${ dataEdit.id }`,{
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify( data )
                })

                return await res.json()
            }

            if( dataEdit.name === "issue" ){
                if( newData.issue === '' ) alert("Invalid issue")
                else{
                    dataEdit.setIssue([ ...dataEdit.issueList, { ...newData, done: dataEdit.done } ])
                    dataEdit.setDisplay(true)

                    const res = await PostData({
                        issue: [ ...dataEdit.issueList, { ...newData, done: dataEdit.done } ]
                    })

                    setResponse(res)
                    form.reset()
                }
            }/*else{
                const newTask = task.map((item) =>
                    item._id === id ? { ...item, ...newData } : item )
                setTask( newTask )

                const res = await PostData( newData )
                setResponse(res)

                alert("Edit success")
            }*/

        }catch (err) {
            console.log(err)
        }

    }

    return [ response, EditData ]
};

export default useEditData;