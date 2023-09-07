import {atom} from "recoil";

export const TaskCategory: any = atom({
    key: 'State.TaskCategory',
    default: ['To Do', 'AlarmButton', 'Done', 'Doing']
})

export const TaskCategoryWidth: any = atom({
    key: 'State.TaskCategoryWidth',
    default: 250
})

export const ChangeCategory: any = atom({
    key: 'State.ChangeCategory',
    default: 'To Do'
})
