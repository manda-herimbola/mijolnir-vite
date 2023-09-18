import {atom} from "recoil";
import {ReactComponentElement} from "react";
import MyDay from "../component/Application/MyDay/MyDay";
import TasksComponent from "../component/Application/Tasks/TasksComponent";
import Important from "../component/Application/Important/Important";
import Planned from "../component/Application/Planned/Planned";

export const RouteState = atom<Array<PathNameType>>({
    key: 'State.RouteState',
    default: [
        {
            path: '/',
            component: <MyDay/>
        },
        {
            path: '/tasks',
            component: <TasksComponent/>
        },
        {
            path: '/important',
            component: <Important/>
        },
        {
            path: '/planned',
            component: <Planned/>
        }
    ]
})

export const RouteName = atom({
    key: 'State.RouteName',
    default: ""
})

export type PathNameType = {
    path: string,
    component: ReactComponentElement<any>
}