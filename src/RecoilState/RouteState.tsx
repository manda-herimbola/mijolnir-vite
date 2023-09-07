import {atom} from "recoil";
import Home from "../component/MyApp/Home/Home";
import MyTasks from "../component/MyApp/MyTasks/MyTasks";
import Inbox from "../component/MyApp/Inbox/Inbox";
import Profile from "../component/MyApp/Profile/Profile";
import {ReactComponentElement} from "react";
import OneTask from "../component/MyApp/Task/OneTask";
import Favorite from "../component/MyApp/Favorite/Favorite";
import MyDay from "../component/Application/MyDay/MyDay";
import TasksComponent from "../component/Application/Tasks/TasksComponent";
import Important from "../component/Application/Important/Important";
import Planned from "../component/Application/Planned/Planned";

export const RouteState = atom<Array<PathNameType>>({
    key: 'State.RouteState',
    /*default: [
        {
            path: '/',
            component: <Home />
        },{
            path: '/my-tasks',
            component: <MyTasks />
        },{
            path: '/inbox',
            component: <Inbox />
        },{
            path: '/favorite',
            component: <Favorite />
        },{
            path: '/profile',
            component: <Profile />
        },{
            path: '/my-tasks/task',
            component: <OneTask />
        },{
            path: '*',
            component: <Home />
        }
    ]*/
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