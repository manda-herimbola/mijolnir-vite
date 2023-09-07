import React, {FormEvent, useState} from 'react';
import {Box, TextField, Typography} from "@mui/material";
import MiniBtnAlarm from "../../Home/Button/MiniButton/MiniBtnAlarm";
import CheckedDone from "../../Home/Button/MiniButton/checkedDone";
import {alignCenter} from "./TaskList";
import useStyle from "../../../../Style/Style";
import {useRecoilState, useSetRecoilState} from "recoil";
import {TitleOpen, TitleState} from "../../../../RecoilState/DrawerState";
import FormCheckDone from "../../Home/FormCheckDone";

export const InputStyle = {
    background: "none",
    marginLeft: 1,
    outline: "none",
    border: "none"
}

const CheckDone = ({ item, name }: any) => {
    const classes = useStyle()

    return (
        <Box className={ classes.SpaceBetween }>

            <Box sx={{ ...alignCenter, width: '100%' }}>
                {
                    item.category === 'AlarmButton' ?
                        <MiniBtnAlarm/> :
                        <CheckedDone data={ item } />
                }
                <FormCheckDone data={item} name={name} />
            </Box>

            <Typography variant="caption">{ item.alarm }</Typography>
        </Box>
    );
};

export default CheckDone;