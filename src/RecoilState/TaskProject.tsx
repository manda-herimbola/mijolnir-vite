import {atom} from "recoil";

export const AddProject = atom<Array<string>>({
    key: 'State.AddProject',
    default: []
})

export const ProjectValidate = atom({
    key: 'State.ProjectValidate',
    default: 'My Day'
})

export const AddIssue = atom<Array<string>>({
    key: 'State.AddIssue',
    default: []
})

export const FilterProject = atom<string>({
    key: 'State.FilterProject',
    default: 'Todo'
})