import React from 'react';
import {IconButton} from "@mui/material";
import {useRecoilState} from "recoil";
import {ChangeCategory} from "../../../../RecoilState/TaskCategory";
import HourglassBottomRoundedIcon from '@mui/icons-material/HourglassBottomRounded';
import HourglassTopRoundedIcon from '@mui/icons-material/HourglassTopRounded';

const BtnAddToDoing = () => {

    const [category, setCategory]: any = useRecoilState(ChangeCategory)

    const AddToDoing = () => {
        category === 'To Do' ? setCategory( 'Doing' ) : setCategory('To Do')
    }

    return (
        <IconButton size="small"
                    onClick={ AddToDoing }
                    color="inherit"
                    edge="end">
            { category === 'Doing' ? <HourglassTopRoundedIcon/> : <HourglassBottomRoundedIcon /> }
        </IconButton>
    );
};

export default BtnAddToDoing;