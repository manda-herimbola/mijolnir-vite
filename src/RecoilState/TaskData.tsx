import {atom} from "recoil";

export const TaskData: any = atom({
    key: 'State.TaskData',
    default: []
})

export const MyDayTask: any = atom({
    key: 'State.MyDayTask',
    default: []
})

export const TaskOne: any = atom({
    key: 'State.TaskOne',
    default: {}
})