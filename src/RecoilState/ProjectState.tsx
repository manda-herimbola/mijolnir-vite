import {atom} from "recoil";
import {Component} from "react";

export const ProjectState = atom<Array<ProjectType>>({
    key: 'State.ProjectState',
    default: []
})

export type ProjectType = {
    _id: string,
    usersId: string,
    image: string,
    project: string,
    path: string
}