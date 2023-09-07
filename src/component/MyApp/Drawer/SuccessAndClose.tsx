import React from 'react';
import CloseIcon from "@mui/icons-material/Close";
import {Box, Grid, IconButton, Tooltip, Typography} from "@mui/material";
import {alignCenter} from "../MyTasks/List/TaskList";
import {useRecoilValue} from "recoil";
import {OneTask} from "../../../RecoilState/DrawerState";

const SuccessAndClose = ({ state, setState }: any) => {
    const task: any = useRecoilValue(OneTask);

    const successStyle = {
        backgroundColor: task.category === "Done" ? "#3caf00" : "none",
        pl: 1, pr: 1, pt: 0.5, pb: 0.5,
        borderRadius: 1,
        color: "#FFF",flexGrow:1
    }

    return (
        <Grid container sx={{mt: 1,mb: 1, ...alignCenter}}>

            <Typography variant="body1"
                        sx={successStyle}>{ task.category === "Done" ? "Success" : ""}</Typography>

            <Tooltip title="Closed" arrow>
                <IconButton size="small"
                            onClick={() => setState(!state)}
                            sx={{ color: "inherit", ml:1 }}>
                    <CloseIcon />
                </IconButton>
            </Tooltip>

        </Grid>
    );
};

export default SuccessAndClose;