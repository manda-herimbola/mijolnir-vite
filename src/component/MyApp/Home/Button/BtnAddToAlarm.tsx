import React, {useState} from 'react';
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import AlarmOnTwoToneIcon from '@mui/icons-material/AlarmOnTwoTone';
import IconButton from "@mui/material/IconButton";
import {Box, Grid, Menu, TextField, Typography} from "@mui/material";
import FormAlarm from "../Form/FormAlarm";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {AlarmData} from "../../../../RecoilState/TaskAlarm";
import {ChangeCategory} from "../../../../RecoilState/TaskCategory";

const BtnAddToAlarm = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const setAlarmData = useSetRecoilState(AlarmData)
    const category: string = useRecoilValue(ChangeCategory)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setAlarmData({})
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <IconButton size="small"
                        edge="end"
                        onClick={handleClick}
                        color="inherit">
                { category === 'AlarmButton' ? <AlarmOnTwoToneIcon /> : <AccessAlarmsIcon />  }
            </IconButton>

            <Menu id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={ handleClose }
                  MenuListProps={{'aria-labelledby': 'basic-button'}}>

                <FormAlarm setAnchorEl={setAnchorEl}/>

            </Menu>
        </Box>
    );
};

export default BtnAddToAlarm;