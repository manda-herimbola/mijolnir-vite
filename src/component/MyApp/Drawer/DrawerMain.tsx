import React, {FormEvent} from 'react';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import {Avatar, Skeleton, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import {MainListItems, SecondaryListItems} from "../Navbar.tsx/NavListItems";
import FormInputProject from "./FormInputProject";
import useStyle from "../../../Style/Style";
import {Drawer} from "../../../Style/MuiStyle";
import logo from "../../../assets/logo/todo list_blue.png"
import SearchAppBar from "../Home/Search";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {FocusState} from "../../../RecoilState/HomeState";
import {IssueState} from "../../../RecoilState/DrawerState";
import {UsersState, UsersType} from "../../../RecoilState/UsersState";

const DrawerMain = ({ open }:any) => {
    const classes: any = useStyle()
    const setStyle = useSetRecoilState(FocusState)
    const setDisplayIssue = useSetRecoilState(IssueState);
    const users: UsersType = useRecoilValue(UsersState)

    const Initialise = () => {
        setStyle(true)
        setDisplayIssue(true)
    }

    return (
        <Drawer variant="permanent" open={open} onClick={Initialise}>
            <Toolbar className={classes.SpaceBetween} sx={{ px: [1.2] }}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>

                    {
                        users.email === '' ?
                            <Skeleton variant="circular" width={35} height={35} sx={{mr:1.5}}/> :
                            <Avatar sx={{ mr:1.5 }} src={logo} alt="mijolnir-logo"/>
                    }

                    <Box sx={{ width: 150 }}>

                        {
                            users.email === '' ? <Skeleton variant="rounded"/> :
                                <Typography variant="h6" component="h2">Mijolnir</Typography>
                        }

                        {
                            users.email === '' ? <Skeleton variant="text" height={20}/> :
                                <Typography variant="caption" sx={{color: "rgba(0,0,0,0.5)"}}
                                            component="p" noWrap>{ users.email }</Typography>
                        }

                    </Box>
                </Box>
            </Toolbar>

            <SearchAppBar/>

            <List component="nav">
                <MainListItems />
                <SecondaryListItems />
                <FormInputProject/>
            </List>
        </Drawer>
    );
};

export default DrawerMain;