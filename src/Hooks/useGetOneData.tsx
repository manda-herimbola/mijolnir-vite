import React, {useState} from 'react';
import {useRecoilState, useSetRecoilState} from "recoil";
import {TaskOne} from "../RecoilState/TaskData";
import {RouteName} from "../RecoilState/RouteState";
import {useNavigate} from "react-router-dom";
import {AddIssue} from "../RecoilState/TaskProject";

const useGetOneData = ( url: string, id: string) => {
    const [ response, setResponse ]: any = useState({})
    const navigate = useNavigate()

    const setDataTaskOne = useSetRecoilState( TaskOne )
    const setRouteName: any = useSetRecoilState(RouteName)
    const setList: any = useSetRecoilState(AddIssue)

    const GetOneData: any = async () => {
        try{
            const res: any = await fetch( `${ url }${ id }`)
            const resData: any = await res.json()

            setDataTaskOne( resData )
            setResponse( resData )
            setRouteName( resData.project )
            setList( resData.issue === undefined ? [] : resData.issue )

            navigate("/my-tasks/task")
        }catch (err){
            console.log(err)
        }
    }

    return [ response, GetOneData ]
};

export default useGetOneData;