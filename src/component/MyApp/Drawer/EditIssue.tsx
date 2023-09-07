import React from 'react';
import {DeleteName, DialogueState, IssueList, IssueType, OneTask} from "../../../RecoilState/DrawerState";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import PicAudio from "../../../assets/Audio/Pic.mp3";
import {url} from "../AppMain";

const useEditIssue = ( data: any ) => {

    const task: any = useRecoilValue(OneTask);
    const [issueList,setIssue]: [Array<IssueType>,any] = useRecoilState(IssueList)
    const handleClose = useSetRecoilState(DialogueState)
    const name: any = useRecoilValue(DeleteName)

    const EditIssue: any = async () => {

        const SaveData = async ( url: string, id: string, dataSaving: any ) => {
            const res = await fetch( `${ url }${ id }`,{
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify( { issue: dataSaving } )
            })

            return await res.json()
        }

        if( data.name === "done" ){
            const songs = new Audio( PicAudio )

            const fetchData = async (done: string) => {
                const newData: IssueType = { ...data.data, done: done }
                const issueFilter = issueList.map((item,i) => i === data.index ? newData : item)

                setIssue(issueFilter)

                try {
                    const response = await SaveData( url , task._id, issueFilter )
                }catch (err){
                    console.log(err)
                }

            }

            if( data.state === "To Do" ){
                data.setState("Done")
                await songs.play()

                const response = await fetchData("Done")
            }else {
                data.setState( "To Do" )

                const response = await fetchData("To Do")
            }
        }
        else if( data.name === "delete" ){
            const issueFilter = issueList.filter((item, i) => i !== name.index)

            handleClose(false)
            setIssue([...issueFilter])

            try{
                const response = await SaveData( url , task._id, issueFilter )
            }catch (err) {
                console.log(err)
            }
        }

    }

    return EditIssue;
};

export default useEditIssue;