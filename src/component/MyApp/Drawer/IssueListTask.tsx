import React from 'react';
import {Box, Grid} from "@mui/material";
import {IssueList, IssueType} from "../../../RecoilState/DrawerState";
import {useRecoilValue} from "recoil";
import ListIssue from "./ListIssue";

const IssueListTask = () => {
    const issueList: Array<IssueType> = useRecoilValue(IssueList)

    return (
        <Box sx={{color: "rgba(0,0,0,0.5)", mt:0.5}}>
            {
                issueList.map((item,index) => (
                    <Grid key={index}>
                        <ListIssue data={item} index={index}/>
                    </Grid>
                ))
            }
        </Box>
    );
};

export default IssueListTask;