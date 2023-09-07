import React from 'react';
import {IconButton} from "@mui/material";
import AlarmIcon from "@mui/icons-material/Alarm";

const BtnTaskAlarm = () => {
    return (
        <IconButton type="submit"
                    edge="start"
                    color="inherit">
            <AlarmIcon />
        </IconButton>
    );
};

export default BtnTaskAlarm;