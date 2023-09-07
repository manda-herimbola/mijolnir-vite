import React from 'react';
import { Box, Typography} from "@mui/material";
import useStyle from "../../../../Style/Style";
import BtnOfReduction from "../Button/BtnOfReduction";
import BtnChangeColor from "../Button/BtnChangeColor";
import BtnAddProject from "../Button/BtnAddProject";
import useTime from "../../../../Hooks/useTime";

const NavBarForm = ({ setReduction, reduction, setChangeColor }: any) => {
    const classes: any = useStyle()
    const [ newHours, ]: any = useTime()

    return (
        <Box className={classes.SpaceBetween}>

            <Box className={classes.SpaceBetween}>
                <BtnAddProject />

                <BtnChangeColor setChangeColor={setChangeColor}/>

                <BtnOfReduction setReduction={setReduction} reduction={reduction}/>
            </Box>

            <Typography variant="caption" sx={{mr:1}}>
                { newHours.slice(0,5) } { newHours.slice(9,11) }
            </Typography>
        </Box>
    );
};

export default NavBarForm;