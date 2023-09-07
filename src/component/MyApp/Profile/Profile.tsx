import React from 'react';
import {Avatar, Box, Button, Container, Divider, Grid, Stack, TextField, Typography} from "@mui/material";
import ProfileButton from "./ProfileButton";
import useStyle from "../../../Style/Style";
import FirstName from "./FirstName";
import LastName from "./LastName";

const PhotoStyle: object = {
    width: 250,
    height: 250,
    m: "0 auto 20px",
    border: 5,
    boxShadow: 2
}

const Profile = () => {
    const classes: any = useStyle()

    return (
        <Box className={classes.ImageBgContainer} sx={{ display: "flex" }}>
            <Box maxWidth={ 400 } sx={{ textAlign: "center", color: "inherit", mt: 8 }}>
                <Avatar sx={PhotoStyle}>A</Avatar>

                <Box>
                    <Typography variant="h3">Manda Hermibola</Typography>
                    <Typography variant="h6">Web Developer</Typography>
                </Box>

                <Grid className={classes.SpaceBetween} sx={{ mt:2, mb:2 }}>
                    <Grid sx={{ width: 100 }}>
                        <Typography variant="h6">86</Typography>
                        <Typography variant="body2">Posts</Typography>
                    </Grid>
                    <Grid sx={{ width: 100 }}>
                        <Typography variant="h6">86</Typography>
                        <Typography variant="body2">messages</Typography>
                    </Grid>
                    <Grid sx={{ width: 100 }}>
                        <Typography variant="h6">86</Typography>
                        <Typography variant="body2">members</Typography>
                    </Grid>
                </Grid>

                <Stack spacing={2}>
                    <Button variant="contained">upload new avatar</Button>
                    <Button variant="outlined">Delete</Button>
                </Stack>

            </Box>
        </Box>
    );
};

export default Profile;