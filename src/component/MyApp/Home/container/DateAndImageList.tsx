import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import BtnImageList from "../Button/BtnImageList";
import BtnMoreList from "../Button/BtnMoreList";
import useStyle from "../../../../Style/Style";

const DateAndImageList = ({ setIndexBg }: any) => {

    const classes: any = useStyle()

    const date = new Date()
    const arrayDate = date.toDateString().split(' ')
    const dateOnMoment: string = `${ arrayDate[0]} ${arrayDate[2]} ${arrayDate[1]} ${arrayDate[3]}`

    return (
        <Grid container sx={{ p: 5 }}>
            <Box sx={{ color: '#fff', flexGrow: 1 }}>
                <Typography variant="h4" component="h1" sx={{ mb:1 }}>Ma journée</Typography>
                <Typography variant="body2" component="p" >{ dateOnMoment }</Typography>
            </Box>
            <Box className={classes.SpaceBetween}>
                <BtnImageList setIndexBg={setIndexBg}/>
            </Box>
        </Grid>
    );
};

export default DateAndImageList;