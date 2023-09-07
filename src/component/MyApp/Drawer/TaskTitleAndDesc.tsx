import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import CheckDone from "../MyTasks/List/CheckDone";
import Description from "./Description";
import NewIssue from "./NewIssue";
import AddFileComponent from "./AddFileComponent";
import AddToMyJourney from "./AddToMyJourney";
import AddToAlarm from "./AddToAlarm";

export const styleCardDrawer = {
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: 1,
    backgroundColor: "#FFF",
    width: "100%",
    mb:1
}

const TaskTitleAndDesc = ({ item }: any) => {
    const DrawerList = [
        <CheckDone item={ item } name="one-task"/>,
        <AddToMyJourney />,
        <AddToAlarm />,
        <AddFileComponent />,
        <Description />
    ]

    return (
        <Box>
            {
                DrawerList.map((item,index) => (
                    <Grid sx={styleCardDrawer} key={index}>
                        { index === 0 ? (
                            <Box sx={{p: 1.5}}>
                                { item }
                                <NewIssue />
                            </Box>
                        ) : item }
                    </Grid>
                ))
            }
        </Box>
    );
};

export default TaskTitleAndDesc;