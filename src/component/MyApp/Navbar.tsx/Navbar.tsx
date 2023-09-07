import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ProfileMenu from '../Profile/ProfileMenu';
import AppDate from "./AppDate";
import ListNavBarRight from "./ListNavBarRight";
import {useRecoilValue} from "recoil";
import {DrawerState} from "../../../RecoilState/DrawerState";

export const ProfileStyle: object = {
    ml:2, height: 35,
    width: 35, cursor: "pointer"
}

export const LinkStyle: object = {
    color: 'inherit',
    textDecoration: 'none'
}

const Navbar = ({ AppBar,project,toggleDrawer,open }:any) => {

    const state: boolean = useRecoilValue(DrawerState)

    const AppBarStyle: object = {
        background: 'none',
        boxShadow: 0, color: "#fff", p: 2, pt: 4,
        width: state ? 834 : "none",
        mr: state ? 38 : 0
    }

    return (
        <AppBar position="absolute" open={open}
                sx={ AppBarStyle }>
            <Toolbar>
                {/*<IconButton edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={toggleDrawer}
                                sx={{marginRight: '36px', ...(open && {display: 'none'}),}}>
                        <MenuIcon/>
                    </IconButton>*/}
                <AppDate project={project}/>

                <ListNavBarRight />

                <ProfileMenu />

            </Toolbar>
        </AppBar>
    );
};

export default Navbar;