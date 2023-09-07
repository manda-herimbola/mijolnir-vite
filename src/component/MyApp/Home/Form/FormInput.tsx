import React from 'react';
import NavBarForm from "./NavBarForm";
import HomeFormData from "./HomeFormData";
import {Box} from "@mui/material";
import useStyle from "../../../../Style/Style";

const FormInput = ({ display, reduction, changeColor, setCardDesc, setReduction, setChangeColor }: any) => {
    const classes: any = useStyle()

    return (
        <Box className={classes.HomeFormInput}
             sx={{ ...display.input, height: reduction.height, ...changeColor }}>

            <NavBarForm setReduction={setReduction}
                        reduction={reduction}
                        setChangeColor={setChangeColor}/>

            <HomeFormData reduction={reduction}
                          setCardDesc={setCardDesc}
                          setChangeColor={setChangeColor}
                          changeColor={changeColor}/>

        </Box>
    );
};

export default FormInput;