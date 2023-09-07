import React, {useEffect} from 'react';
import {Box, Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import TodoLogo from "../../../../assets/logo/todo list_blue.png";
import {useRecoilValue} from "recoil";
import {MyDayTask} from "../../../../RecoilState/TaskData";
import {TaskValue} from "../../MyTasks/List/TaskList";
import useStyle from "../../../../Style/Style";

const HomeCard: object = {
    maxWidth: 350,
    textAlign: 'center',
    backgroundColor: '#fff',
    p:1,
    borderRadius: 3,
    '& .MuiButton-root': {
        borderRadius: 2
    }
}

const CardDescHome = ({ form, AddForm }: any) => {

    const myDayTask: Array<TaskValue> = useRecoilValue(MyDayTask)
    const DisplayCard = myDayTask.length === 0 ? 'block' : 'none'

    return (
        <Box sx={{ height: "72vh", pt: 6, display: DisplayCard }}>
            <Card sx={{ ...HomeCard, m: "auto" }}>
                <CardMedia component="img"
                           alt="Todo_logo"
                           height="150"
                           sx={{ width: 150, m: 'auto' }}
                           image={TodoLogo}/>

                <CardContent>
                    <Typography variant="h6" component="div" sx={{mb:1}}>
                        Concentrez-vous
                    </Typography>
                    <Typography variant="body2">
                        Effectuer des tâches avec Ma journée, une liste actualisée tous les jours
                    </Typography>
                </CardContent>

                <Button variant="contained"
                        onClick={ () => AddForm( false ) }
                        size="small"
                        sx={{ width: '100%', display: form ? "block" : "none" }}>
                    Ajouter une tâche
                </Button>

            </Card>
        </Box>
    );
};

export default CardDescHome;