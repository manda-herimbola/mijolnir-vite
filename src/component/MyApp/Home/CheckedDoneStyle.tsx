import React, {useState} from 'react';
import {Box} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BtnDone from "./Button/BtnDone";
import useStyle from "../../../Style/Style";
import {useRecoilState, useRecoilValue} from "recoil";
import {FocusState} from "../../../RecoilState/HomeState";
import {ChangeCategory} from "../../../RecoilState/TaskCategory";

const checkedStyle = {
    position: "relative",
    transitionDuration: "300ms"
}

const CheckedDoneStyle = (props: any) => {
    const classes = useStyle()

    return (
        <Box sx={{ overflow: "hidden", height: props.height }}>
            <Box className={classes.ColumnCenter}
                 sx={{
                     opacity: props.style ? 1 : 0,
                     ...checkedStyle,
                     top: props.topAdd
                 }}>
                <AddIcon sx={{ color: "inherit", fontSize: props.fontSize }}/>
            </Box>
            <Box sx={{
                opacity: !props.style ? 1 : 0,
                ...checkedStyle,
                top: !props.style ? props.topDone : 0, left: -1
            }}>
                <BtnDone fontSize={props.fontSize}
                         category={props.category}
                         setCategory={props.setCategory} issueList="AddIssue"/>
            </Box>
        </Box>
    );
};

export default CheckedDoneStyle;