import {atom} from "recoil";
import {TaskValue} from "../component/MyApp/MyTasks/List/TaskList";


export const DrawerState: any = atom({
    key: 'State.DrawerState',
    default: false
})

export const OneTask = atom({
    key: 'State.OneTask',
    default: {}
})

export const TitleState = atom<TitleType>({
    key: 'State.TitleState',
    default: {}
})

export type TitleType = {
    title?: string, id?: string
}

export const TitleOpen = atom({
    key: 'State.TitleOpen',
    default: false
})

export const IssueList = atom<Array<IssueType>>({
    key: 'State.IssueList',
    default: []
})

export type IssueType = {
    issue: string,
    done: string
}

export const DialogueState = atom({
    key: 'State.DialogueState',
    default: false
})

export const IssueState = atom({
    key: 'State.IssueState',
    default: true
})

export const DeleteName = atom({
    key: 'State.DeleteName',
    default: {
        name: "",
        data: "",
        index: 0
    }
})

export const DateAfterAddTask = atom({
    key: 'State.DateAfterAddTask',
    default: ''
})