import {atom} from "recoil";

export const ProjectFavorite: any = atom({
    key: 'State.ProjectFavorite',
    default: []
})

export const TaskFavorite: any = atom({
    key: 'State.TaskFavorite',
    default: []
})

export const IconFav: any = atom({
    key: 'State.IconFav',
    default: false
})