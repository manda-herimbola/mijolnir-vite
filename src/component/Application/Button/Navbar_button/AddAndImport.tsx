import React, {Component} from 'react';
import {Box, Typography} from "@mui/material";
import {addDayStyle} from "../../../MyApp/Drawer/AddToMyJourney";
import AddIcon from "@mui/icons-material/Add";
import PrintIcon from "@mui/icons-material/Print";

type AddAndImportType = {
    icon: any,
    text: string
}

const AddAndImport = () => {

    const selectTouche: Array<AddAndImportType> = [
        {
            icon: <AddIcon sx={{mr: 2}}/>,
            text: 'More image'
        }, {
            icon: <PrintIcon sx={{mr: 2}}/>,
            text: 'Import image'
        }
    ]

    return (
        <Box sx={{pt:1}}>
            { selectTouche.map((item, index) => (
                <Box key={index} sx={{ ...addDayStyle }}>
                    { item.icon }
                    <Typography variant="body2">{ item.text }</Typography>
                </Box>
            )) }
        </Box>
    );
};

export default AddAndImport;