import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import AddTaskIcon from '@mui/icons-material/AddTask';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {NavLink} from "react-router-dom";

import {AddProject, FilterProject, ProjectValidate} from "../../../RecoilState/TaskProject";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {Box, Divider, Grid, Typography} from "@mui/material";
import Project from "../Project/Project";
import {RouteName, RouteState} from "../../../RecoilState/RouteState";
import BtnDelete from "../Home/Button/BtnDelete";
import {ImgFile} from "../../../RecoilState/ImgBackground";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ImageBgHome from "../../../services/ImageBgHome";
import {ProjectState, ProjectType} from "../../../RecoilState/ProjectState";
import {alignCenter} from "../MyTasks/List/TaskList";

const Link: object = {
    color: 'inherit',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1
}

/*const ListItem: Array<pathList> = [
    { acc: 'Home', icon: <HomeIcon sx={{fontSize: 22}}/>, path: '/' },
    { acc: 'My Tasks', icon: <AddTaskIcon sx={{fontSize: 22}}/>, path: '/my-tasks' },
    { acc: 'Inbox', icon: <NotificationsNoneIcon sx={{fontSize: 22}}/>, path: '/inbox' },
    { acc: 'Favorite', icon: <FavoriteIcon sx={{fontSize: 22}}/>, path: '/favorite' }
]*/

type pathList = {
    acc: string,
    icon: any,
    path: string
}

export const MainListItems = () => {

    const setProject = useSetRecoilState(ProjectValidate)
    const projectCategory: Array<ProjectType> = useRecoilValue(ProjectState)
    /*const setImgBg: any = useSetRecoilState(ImgFile)
    const setRouteName: any = useSetRecoilState(RouteName)
    const img: any = localStorage.getItem('image')*/

    const changePro = ( path: string ) => {
        setProject("My Day")
        /*setImgBg( ImageBgHome[ +img ].photo )
        setRouteName(path.split('/')[1])*/
    }

    return (
        <React.Fragment>
            {
                projectCategory.map((item, index) =>(
                    <NavLink to={item.path}
                             onClick={ () => changePro(item.path) }
                             key={index} style={Link}>
                        <ListItemButton>
                            <Grid sx={{ ...alignCenter, color: "rgba(0,0,0,0.5)", m:"2px 0" }}>

                                {
                                    item.project === "Home" ?
                                        <HomeIcon sx={{fontSize: 22, mr:3}}/> :
                                        <AddTaskIcon sx={{fontSize: 22, mr:3}}/>
                                }

                                <Typography variant="body2">{ item.project }</Typography>
                            </Grid>
                        </ListItemButton>
                    </NavLink>
                ))
            }
        </React.Fragment>
    )
}

export const SecondaryListItems = () => {
    const project: Array<string> = useRecoilValue(AddProject)
    const setProject: any = useSetRecoilState(AddProject)
    const setImage: any = useSetRecoilState(ImgFile)
    const setCategory: any = useSetRecoilState(FilterProject)

    const [pathRoute, setPathRoute]: any = useRecoilState(RouteState)
    const [pro, setPro]: [string, any] = useRecoilState(ProjectValidate)

    const AddPathLink = ( item: string ) => {
        const projectVal = item.split('#')

        setPathRoute([
            ...pathRoute, {
                path: `/${ projectVal[0] }`,
                component: <Project pathProject={ projectVal[0] } image={ projectVal[1] }/>
            }
        ])

        setImage( projectVal[1] )
        setPro( projectVal[0] )
        setCategory('Todo')

    }

    return (
        <React.Fragment>
            <Divider sx={{width: "90%",m:"5px auto"}}/>

            <Box sx={{ height: "48vh" }}>
                {
                    project?.map((item,index) => (
                        <ListItemButton key={ index }>

                            <NavLink to={ `/${ item.split('#')[0] }` }
                                     onClick={ () => AddPathLink( item ) } style={ Link }>
                                <ListItemIcon>
                                    <AssignmentIcon sx={{fontSize: 20}}/>
                                </ListItemIcon>
                                <ListItemText primary={ item.split('#')[0] }
                                              primaryTypographyProps={{ variant: 'body2' }}/>
                            </NavLink>

                            <BtnDelete data={ project }
                                       setData={ setProject }
                                       index={ index }
                                       value={ item.split('#')[0] }/>

                        </ListItemButton>
                    ))
                }
            </Box>
        </React.Fragment>
    )
};