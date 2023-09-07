import React from 'react';
import TextField from "@mui/material/TextField";
import AlarmDays from "../../../../services/AlarmDays";

const InputAlarmDays = ({ checked, setDay }: any) => {

    const changeDay = (ev: any) => {
        setDay( ev.currentTarget.value )
    }

    return (
        <TextField id="filled-select-currency-native" select
                   label="select day"
                   onChange={ changeDay }
                   SelectProps={{ native: checked }}
                   helperText="Please select your day"
                   variant="filled">

            { AlarmDays.map(( days,index) =>
                <option key={ index }>{ days.dayEn }</option>)
            }
        </TextField>
    );
};

export default InputAlarmDays;