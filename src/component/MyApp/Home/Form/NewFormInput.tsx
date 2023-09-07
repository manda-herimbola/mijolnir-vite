import React, {useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import Input from "./Input";
import {alignCenter} from "../../MyTasks/List/TaskList";
import BtnSubmit from "../Button/BtnSubmit";
import usePostData from "../../../../Hooks/usePostData";
import CheckedDoneStyle from "../CheckedDoneStyle";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {FocusState} from "../../../../RecoilState/HomeState";
import {ChangeCategory} from "../../../../RecoilState/TaskCategory";

const NewFormInput = ({ form }: any) => {

    const [bgcolor,setBgColor] = useRecoilState(FocusState)
    const style: boolean = useRecoilValue(FocusState)
    const FormStyle = {
        backgroundColor: bgcolor ? "rgba(255,255,255,0.8)" : "#FFF",
        borderRadius: 2,
        width: form ? 0 : '100%',
        p: form ? 0 : 1,
        height: form ? 0 : '50px',
        opacity: form ? 0 : 1,
        overflow: 'hidden',
        transitionDuration: "500ms",
        '&:hover': { backgroundColor: "#FFF" }
    }

    const url: string = 'http://localhost:5000/tasks/'
    const [ ,subValue ]: any = usePostData( url )
    const [category, setCategory]: any = useRecoilState(ChangeCategory)

    return (
        <Box sx={ FormStyle } onFocus={() => setBgColor(false)}>
            <Grid container
                  onSubmit={ subValue }
                  component="form"
                  sx={{ ...alignCenter }}>

                <CheckedDoneStyle style={style}
                                  fontSize={"none"}
                                  height={30} topAdd={3} topDone={-25}
                                  category={category}
                                  setCategory={setCategory}/>

                <Input />
                <BtnSubmit />
            </Grid>
        </Box>
    );
};

export default NewFormInput;