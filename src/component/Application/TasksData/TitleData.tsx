import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import CheckDone from "../Button/Check_Done/CheckDone";
import useStyle from "../../../Style/Style";
import TitleFormInput from "../Drawer/DrawerRight/TitleFormInput";

const TitleData = ({ data }: any) => {
    const classes = useStyle()
    const [check, setCheck] = useState(false)

    useEffect(()=>{
        setCheck( data.done )
    },[ data.done ])

    return (
        <Box className={classes.AlignCenter} sx={{color:"#000"}}>
            <CheckDone fontSize={20}
                       reference="task"
                       task={data}
                       check={check}
                       setCheck={setCheck}/>

            <TitleFormInput data={data} check={check}/>
        </Box>
    );
};

export default TitleData;