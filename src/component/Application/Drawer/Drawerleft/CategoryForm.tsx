import React from 'react';
import {Box, TextField, Typography} from "@mui/material";
import useStyle from '../../../../Style/Style';
import AddIcon from "@mui/icons-material/Add";
import {alignCenter} from "../../../MyApp/MyTasks/List/TaskList";

const CategoryForm = () => {
    const classes = useStyle()

    return (
        <Box component="form" className={classes.CategoryForm}>
            <TextField fullWidth
                       variant="standard"
                       id="category"
                       label={
                           <Box sx={{...alignCenter}}>
                               <AddIcon />
                               <Typography variant="body2" sx={{ ml: 2 }}>
                                   New category
                               </Typography>
                           </Box>
                       }
                       name="category"
                       size="small"
                       autoComplete="category"/>
        </Box>
    );
};

export default CategoryForm;