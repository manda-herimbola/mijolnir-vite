import React, {useState} from 'react';
import {TextField, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import useStyle from "../../../../Style/Style";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {useRecoilValue} from "recoil";
import {ChangeCategory} from "../../../../RecoilState/TaskCategory";

const cursor = { cursor: "pointer" }
const InputAlarm = { width: 46 }

const AlarmInputHours = ({ incHours, setIncHours, incMinutes, setIncMinutes }:any) => {
    const classes: any = useStyle()

    const upHours = () => incHours < 23 ? setIncHours( incHours + 1 ) : setIncHours( 0 )

    const downHours = () => incHours <= 0 ? setIncHours( 23 ) : setIncHours( incHours - 1 )

    const upMinutes = () => incMinutes < 59 ? setIncMinutes( incMinutes + 1 ) : setIncMinutes( 0 )

    const downMinutes = () => incMinutes <= 0 ? setIncMinutes( 59 ) : setIncMinutes( incMinutes - 1 )

    return (
        <Box className={classes.Center}
             sx={{ m: "10px auto",
                 '& .MuiTextField-root': InputAlarm }}>
            <Box className={ classes.ColumnCenter }>
                <ArrowDropUpIcon sx={ cursor } onClick={ upHours }/>

                <TextField type="text" value={ incHours < 10 ? `0${ incHours }` : incHours }/>

                <ArrowDropDownIcon sx={ cursor } onClick={ downHours }/>
            </Box>

            <Typography variant="h5">:</Typography>

            <Box className={ classes.ColumnCenter }>
                <ArrowDropUpIcon sx={ cursor } onClick={ upMinutes }/>

                <TextField type="text" value={ incMinutes < 10 ? `0${ incMinutes }` : incMinutes } />

                <ArrowDropDownIcon sx={ cursor } onClick={ downMinutes }/>
            </Box>
        </Box>
    );
};

export default AlarmInputHours;