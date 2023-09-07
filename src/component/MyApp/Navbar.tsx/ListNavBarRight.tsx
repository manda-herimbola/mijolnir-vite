import React from 'react';
import BtnImageList from "../Home/Button/BtnImageList";
import {Box, Grid} from "@mui/material";
import {useSetRecoilState} from "recoil";
import {ImgBackground} from "../../../RecoilState/ImgBackground";
import BtnTaskDone from "../Home/Button/BtnTaskDone";
import useStyle from "../../../Style/Style";
import BtnTaskAlarm from "../Home/Button/BtnTaskAlarm";
import BtnTaskDoing from "../Home/Button/BtnTaskDoing";
import BtnTaskMore from "../Home/Button/BtnTaskMore";

const ListNavBarRight = () => {

    const setIndexBg: any = useSetRecoilState(ImgBackground)
    const classes = useStyle()

    const IconList = [
        <BtnImageList setIndexBg={setIndexBg}/>,
        /*<BtnTaskAlarm />,
        <BtnTaskDone />,
        <BtnTaskDoing />,*/
        <BtnTaskMore />
    ]

    return (
        <Grid className={ classes.AlignCenter }>
            {
                IconList?.map((item, index) =>
                    <Box key={ index } sx={{ mr: 1 }}>{ item }</Box>)
            }
        </Grid>
    );
};

export default ListNavBarRight;