import React, {useState} from 'react';
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import usePostData from "../../../../Hooks/usePostData";
import useStyle from "../../../../Style/Style";
import {useRecoilState, useRecoilValue} from "recoil";
import {ChangeCategory} from "../../../../RecoilState/TaskCategory";
import BtnDone from "../Button/BtnDone";
import BtnFavorite from '../Button/BtnFavorite';
import BtnAddToAlarm from "../Button/BtnAddToAlarm";
import BtnSubmit from "../Button/BtnSubmit";
import {AddProject, ProjectValidate} from "../../../../RecoilState/TaskProject";
import BtnAddToDoing from "../Button/BtnAddToDoing";
import {ImgFile} from "../../../../RecoilState/ImgBackground";
import {IconFav} from "../../../../RecoilState/TaskFavorite";

const date = new Date()
const fullYear = date.getUTCFullYear()
const year = fullYear % 100
const month = date.toDateString().split(' ')

export const dateString = month[2] + '-' + year + ' ' + month[1]

const HomeFormData = ({ reduction, setCardDesc, setChangeColor , changeColor }: any) => {
    const classes: any = useStyle()

    const category: string = useRecoilValue(ChangeCategory)
    const projectValue: string = useRecoilValue(ProjectValidate)
    const imgBg: string = useRecoilValue(ImgFile)
    const [ iconFav, setIconFav ] = useRecoilState(IconFav)

    const url: string = 'http://localhost:5000/tasks/'
    const [ ,subValue ]: any = usePostData( url )

    return (
        <Grid component="form"
              sx={ reduction }
              onSubmit={subValue}
              className={classes.TaskForm}
              width="100%">

            <TextField variant="standard"
                       size="small"
                       name="title"
                       placeholder="Title" sx={{width: 'calc(50% - 50px)', mr:1}}/>

            <TextField variant="standard"
                       name="description"
                       placeholder="Description"
                       rows={7}
                       multiline/>

            <TextField variant="standard"
                       name="project"
                       value={ projectValue }
                       sx={{ display: "none" }}
                       placeholder="Project"/>

            <TextField name="category" value={ category } sx={{ display: "none" }}/>
            <TextField name="color" value={ changeColor.backgroundColor } sx={{ display: "none" }}/>
            <TextField name="date" value={ dateString } sx={{ display: "none" }}/>
            <TextField name="favorite" value={ iconFav } sx={{ display: "none" }}/>
            <TextField name="image" value={ imgBg } sx={{ display: "none" }}/>

            <Box className={classes.AlignCenter}>
                <BtnFavorite />
                <BtnAddToDoing />
                <BtnAddToAlarm />
                <BtnDone />
                <BtnSubmit />
            </Box>

        </Grid>
    );
};

export default HomeFormData;