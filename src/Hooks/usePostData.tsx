import React, {useState} from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {TaskData, MyDayTask} from "../RecoilState/TaskData";
import {AlarmData} from "../RecoilState/TaskAlarm";
import {ChangeCategory} from "../RecoilState/TaskCategory";
import {ProjectFavorite, TaskFavorite} from "../RecoilState/TaskFavorite";
import {TaskValue} from "../component/MyApp/MyTasks/List/TaskList";
import {Create_account, Sign_in} from "../RecoilState/Authentification";
import {ProjectValidate} from "../RecoilState/TaskProject";
import {dateString} from "../component/MyApp/Home/Form/HomeFormData";
import {ImgFile} from "../RecoilState/ImgBackground";

const usePostData = ( url: string ) => {
    const [ response, setResponse ]: any = useState( {} )
    const project: string = useRecoilValue(ProjectValidate)
    const category: string = useRecoilValue(ChangeCategory)
    /*const [ dataTask, setDataTask ]: any = useRecoilState(TaskData)*/
    const [ myDayTask, setMyDayTask ]: any = useRecoilState(MyDayTask)

    /*const [favPro, setFavPro] : [Array<string>, any] = useRecoilState(ProjectFavorite)
    const [favTask, setFavTask] : [Array<TaskValue>, any] = useRecoilState(TaskFavorite)

    const [errorCreat, setErrorCreat]: any = useRecoilState(Create_account)
    const [errorLog, setErrorLog]: any = useRecoilState(Sign_in)

    const alarm: object = useRecoilValue(AlarmData)
    const setCategory: any = useSetRecoilState(ChangeCategory)*/

    const PostData: any = async (ev: SubmitEvent) => {
        ev.preventDefault()

        const hours = new Date().toLocaleTimeString()
        const form = ev.target as HTMLFormElement
        const formData = new FormData( form )

        const newData: TaskValue = {
            ...Object.fromEntries(formData.entries()),
            category ,
            description: "",
            project ,
            date: dateString,
            hours: hours
        }

        const fetchData = async () => {
            const response: any = await fetch( url , {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newData)
            })

            return await response.json()
        }

        if (url === 'http://localhost:5000/tasks/'){
            try {

                if( newData.project === "My Day" && newData.title !== "" ){
                    const dataJson = await fetchData()

                    setMyDayTask([ ...myDayTask, { _id: dataJson.insertedId, ...newData }])
                }
                /*if( newData.favorite === 'true' ){

                    const newFav = [ ...favPro, newData.project + '#' + newData.image ]

                    setFavPro([ ...new Set( newFav ) ])

                    setFavTask([ ...favTask, { _id: dataJson.insertedId, ...newData } ])

                }

                setDataTask([ ...dataTask, { _id: dataJson.insertedId, ...newData } ])

                option(false)
                setCategory( 'To Do' )
                setResponse( dataJson )*/
                form.reset()
            }catch (err){
                setResponse( err )
            }

        }

        /*else if(url === 'http://localhost:5000/users/create_account') {
            const dataKeys = Object.keys(newData)

            const usersError = dataKeys.map((item) => {

                if( newData[item] !== '' ){
                    if( item === "password" ){
                        const PW = /\W/.test( newData[item] ) && /[0-9]/.test( newData[item] )
                        return !(PW && newData[item].length < 20 && newData[item].length >= 6)
                    } else if( item === "username" ){
                        const US = /[0-9]|\?|\.|\[|\]|\{|\}|\*|\$|=|\+|\(|\)/.test( newData[item] )
                        return !(newData[item].length < 40 && newData[item].length >= 5 && !US)
                    } else if( item === "email" ){
                        return !(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(newData[item]))
                    } else if( item === "confirmation" ){
                        return !(newData[item] === newData["password"])
                    }
                }else return  newData[item] === ''

            })

            setErrorCreat(usersError)

            try {
                const users = usersError.every((item) => !item)

                if( users ){
                    const dataJson = await fetchData()

                    console.log(dataJson)
                    setResponse( dataJson )
                    form.reset()
                }
            }catch (err) {
                setResponse( err )
            }
        }

        else if(url === 'http://localhost:5000/users/login'){
            const dataKeys = Object.keys(newData)

            const usersError = dataKeys.map((item) => newData[item] === '' )

            setErrorLog(usersError)

            try{

            }catch (err) {
                setResponse(err)
            }
        }*/

    }

    return [ response, PostData ]
};

export default usePostData;