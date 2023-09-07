import * as React from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import {useEffect} from "react";
import useTime from "../../../Hooks/useTime";
import PicAudio from "../../../assets/Audio/Pic.mp3"
import AlarmButton from "./AlarmButton";

export interface State extends SnackbarOrigin {
    open: boolean;
}

export default function PositionedSnackbar() {
    const [ state, setState ]: any = React.useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'right',
    });

    const { vertical, horizontal, open } = state;
    const [, { alarm, task } ]: any = useTime()

    const handleClose = () => setState({ ...state, open: false });

    useEffect(() => {
        const audio = new Audio( PicAudio )

        if( alarm ){
            setState({ ...state ,open: true })
            audio.play()
        }else {
            setState({ ...state, open: false })
            audio.pause()
        }

    },[ alarm ])

    return (
        <div>
            <Snackbar anchorOrigin={{ vertical, horizontal }}
                      open={ open }
                      onClose={ handleClose }
                      message={ task.title }
                      action={ <AlarmButton handleClose={ handleClose } task={ task }/> }
                      key={ vertical + horizontal }/>
        </div>
    );
}