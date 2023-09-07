import React, {useEffect, useState} from 'react';
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {TaskData} from "../RecoilState/TaskData";
import {TaskValue} from "../component/MyApp/MyTasks/List/TaskList";

const useTime = () => {

    const date = new Date()
    const time = date.toLocaleTimeString()
    const AmAndPm = date.getHours() < 12 ? 'AM' : 'PM'
    const hours = time + ' ' + AmAndPm

    const dataTask: Array<TaskValue> = useRecoilValue(TaskData)

    const [ newHours, setNewHours ]: any = useState( '00:00 AM' )
    const [ newAlarm, setNewAlarm ]: any = useState({
        alarm: false,
        task: {}
    })

    useEffect(() => {
        setTimeout(() => {
            const days = dataTask.filter((item) => item.day === 'All' )
            const day = dataTask.filter((item) => item.day !== 'All' && item.day !== undefined )
            const d = date.toDateString()

            setNewHours( hours )

            days.map((item) => {
                if( item.hours === time.slice(0,5) ){
                    setNewAlarm({ alarm: true, task: item })
                }else {
                    setNewAlarm({ alarm: false, task: {} })
                }
            })

            day.map((item) => {
                if( item.day?.slice(0,3) === d.slice(0,3) && item.hours === time.slice(0,5) ){
                    setNewAlarm({ alarm: true, task: item })
                }else {
                    setNewAlarm({ alarm: false, task: {} })
                }
            })

        },1000)
    })

    return [ newHours, newAlarm ];
};

export default useTime;