import React from 'react';
import AlarmIcon from "@mui/icons-material/Alarm";
import {IconButton} from "@mui/material";

const style = { fontSize:20, cursor: "pointer" }

const MiniBtnAlarm = () => {
    return (
        <IconButton type="submit"
                    size="small"
                    edge="start"
                    color="inherit">
            <AlarmIcon sx={style}/>
        </IconButton>
    );
};

export default MiniBtnAlarm;