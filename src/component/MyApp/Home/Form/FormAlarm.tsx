import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, Typography} from "@mui/material";
import AlarmInputHours from "./AlarmInputHours";
import {useState} from "react";
import InputOfSongs from "./InputOfSongs";
import InputAlarmDays from "./InputAlarmDays";
import useStyle from "../../../../Style/Style";
import {useRecoilState, useSetRecoilState} from "recoil";
import {ChangeCategory} from "../../../../RecoilState/TaskCategory";
import {AlarmData} from "../../../../RecoilState/TaskAlarm";

const FormAlarm = ({ setAnchorEl }:any) => {
    const classes: any = useStyle()

    const [ category, setCategory ]: any = useRecoilState(ChangeCategory)
    const setAlarmData: any = useSetRecoilState(AlarmData)

    const [ checked, setChecked ]: any = useState( true )
    const [ incHours, setIncHours ]: any = useState( 0 )
    const [ incMinutes, setIncMinutes ]: any = useState( 0 )
    const [ day, setDay ]: any = useState( 'Monday' )

    const checkInput = () => checked ? setChecked( false ) : setChecked( true )

    const RemoveAlarm = () => {
        setCategory( 'To Do' )
        setAnchorEl( null )
    }

    const AddAlarm = () => {
        const hr = incHours < 10 ? `0${ incHours }` : incHours
        const mn = incMinutes < 10 ? `0${ incMinutes }` : incMinutes

        setAlarmData({ hours: hr + ':' + mn,  day: checked ? day : 'All' })
        setCategory( 'AlarmButton' )
        setAnchorEl( null )
    }

    return (
        <Box sx={{ '& .MuiTextField-root': { width: '100%' }, p:2 }}>

            <Typography variant="h6" component="p" >
                Ajouter une nouvelle alarme
            </Typography>

            <AlarmInputHours incHours={incHours}
                             setIncHours={setIncHours}
                             incMinutes={incMinutes}
                             setIncMinutes={setIncMinutes}/>

            <Box className={classes.AlignCenter} sx={{ mb:1 }}>
                <input type="checkbox" onClick={ checkInput } />
                <Typography variant="body1" sx={{ ml:1 }}>Tous les jours</Typography>
            </Box>

            <InputAlarmDays checked={checked} setDay={setDay}/>

            {/*<InputOfSongs />*/}

            <Button variant="contained"
                    onClick={ category === 'AlarmButton' ? RemoveAlarm : AddAlarm }
                    sx={{ width: "100%" }}>
                { category === 'AlarmButton' ? 'remove' : 'Add' }
            </Button>

        </Box>
    );
}

export default FormAlarm;