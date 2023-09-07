import React from 'react';
import {AppBar} from "../../../Style/MuiStyle";
import {Grid, Toolbar} from "@mui/material";
import ProfileMenu from "../Profile/ProfileMenu";
import Typography from "@mui/material/Typography";
import {useRecoilValue} from "recoil";
import {RouteName} from "../../../RecoilState/RouteState";

const NewNavBar = () => {

    const routeName: any = useRecoilValue(RouteName)
    const cd = routeName === "inbox" || routeName === "favorite" ? "#fff" : "#000"

    return (
        <AppBar position="absolute" open={true}
                sx={{ background: 'none', boxShadow: 0, color: cd }}>
            <Toolbar>
                <Typography variant="h6"
                            component="h2"
                            sx={{flexGrow: 1}}>{ routeName.toUpperCase() }</Typography>

                <ProfileMenu />
            </Toolbar>
        </AppBar>
    );
};

export default NewNavBar;