import React from 'react';
import {Box, Grid} from "@mui/material";
import AppDate from "./AppDate";
import ListNavBarRight from "./ListNavBarRight";
import ProfileMenu from "../Profile/ProfileMenu";
import {alignCenter} from "../MyTasks/List/TaskList";
import {useRecoilValue} from "recoil";
import {ProjectValidate} from "../../../RecoilState/TaskProject";

const AppBarStyle: object = {
    color: "#fff", mb: 4
}

const NavBarGrid = () => {
    const project: string = useRecoilValue(ProjectValidate)

    return (
        <Grid container sx={{ ...AppBarStyle, ...alignCenter }}>
            <AppDate project={ project }/>

            <ListNavBarRight />

            <ProfileMenu />
        </Grid>
    );
};

export default NavBarGrid;