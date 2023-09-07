import React from 'react';
import {alignCenter} from "../MyTasks/List/TaskList";
import {Box, Grid, Typography} from "@mui/material";
import AlarmIcon from '@mui/icons-material/Alarm';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import {addDayStyle} from "./AddToMyJourney";

const ItemStyle = {
    ...addDayStyle,
    borderBottom: '1px solid rgba(0,0,0,0.05)'
}

const AddToAlarm = () => {
    const alarm = [
        {
            icon: <AlarmIcon sx={{fontSize: 20, mr: 2}}/>,
            text: 'Reminder'
        },{
            icon: <CalendarMonthIcon sx={{fontSize: 20, mr: 2}}/>,
            text: 'Add date of expiry'
        },{
            icon: <EventRepeatIcon sx={{fontSize: 20, mr: 2}}/>,
            text: 'Repeat'
        }
    ]

    return (
        <Box sx={{color: "rgba(0,0,0,0.5)"}}>
            {
                alarm.map((item,index) => (
                    <Grid key={index} sx={ItemStyle}>
                        <Grid sx={{...alignCenter}}>
                            {item.icon}
                            <Typography variant="body2">{item.text}</Typography>
                        </Grid>
                    </Grid>
                ))
            }
        </Box>
    );
};

export default AddToAlarm;