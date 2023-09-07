import React from 'react';
import {Box, Grid,Typography} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ListItemButton from "@mui/material/ListItemButton";
import {alignCenter} from "../../../MyApp/MyTasks/List/TaskList";

const CategoryList = () => {
    const categoryList = [
        "Done","favorite","mick","bare"
    ]

    return (
        <Box sx={{flexGrow: 1}}>
            {
                categoryList.map((item, index)=>(
                    <ListItemButton key={ index } sx={{p:1.5}}>
                        <Grid sx={{ ...alignCenter,color: 'rgb(95,95,95)'}}>
                            <AssignmentIcon fontSize="small"/>
                            <Typography variant="body2" sx={{ml:2}}>{ item }</Typography>
                        </Grid>
                    </ListItemButton>
                ))
            }
        </Box>
    );
};

export default CategoryList;