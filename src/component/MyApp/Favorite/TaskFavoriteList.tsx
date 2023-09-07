import React from 'react';
import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import TextTitle from "./TextTitle";
import TextDesc from "./TextDesc";
import {useRecoilValue} from "recoil";
import {TaskValue} from "../MyTasks/List/TaskList";
import {TaskFavorite} from "../../../RecoilState/TaskFavorite";

const TaskFavoriteList = ({ project, image }: any) => {

    const favorite: Array<TaskValue> = useRecoilValue(TaskFavorite)

    const displayFav = (value: TaskValue) => project !== value.project ? 'none' : 'flex'

    return (
        <Box sx={{ backgroundImage: `url( ${ image })`, backgroundSize: "cover", p:2 }}
             height={225}>
            <Grid container spacing={2}>
                {
                    favorite.map((value,i) => (
                        <Grid key={ i } sx={{ display: displayFav(value) }} item>
                            <Card sx={{ width: 93, p:1 }}>
                                <TextTitle title={ value.title }/>
                                <TextDesc desc={ value.description }/>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default TaskFavoriteList;