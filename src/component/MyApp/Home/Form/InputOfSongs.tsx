import React from 'react';
import {Box, TextField} from "@mui/material";
import AlarmDays from "../../../../services/AlarmDays";

const InputOfSongs = () => {
    return (
        <TextField id="filled-select-currency-native" select
                   label="select songs"
                   SelectProps={{ native: true }}
                   helperText="Please select your songs"
                   variant="filled">
            { AlarmDays?.map(( days,index) =>
                <option key={ index }>{ days.dayEn }</option>)
            }
        </TextField>
    );
};

export default InputOfSongs;