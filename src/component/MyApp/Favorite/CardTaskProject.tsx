import React from 'react';
import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import TaskFavoriteList from "./TaskFavoriteList";
import {useRecoilValue} from "recoil";
import ProjectListTitle from "./ProjectListTitle";
import {ProjectFavorite} from "../../../RecoilState/TaskFavorite";

const CardTaskProject = () => {

    const project: Array<string> = useRecoilValue(ProjectFavorite)

    return (
        <Box>
            <Grid container spacing={3}>
                {
                    project?.map((item,index) => (
                        <Grid key={index} item xs={6} sm={5} lg={3.9} >
                            <Card sx={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
                                <ProjectListTitle project={ item.split('#')[0] }/>

                                <TaskFavoriteList project={ item.split('#')[0] }
                                                  image={ item.split('#')[1] } />
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default CardTaskProject;