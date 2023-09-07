import React from 'react';
import {IconButton, Typography} from "@mui/material";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";

const Button: object = {
    backgroundColor: "rgba(0,0,0,0.05)",
    padding: 2,
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: 3,
    marginTop: '15px',
    color: '#000',
    width: 250,
    height: 105
}

const ButtonAdd = ({ setOpenTask, setTaskModal }: any) => {

    const AddTask: any = () => {
        setOpenTask( true )
        setTaskModal({ title: '', description: '' })
    }

    return (
        <IconButton size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                    onClick={ AddTask }
                    sx={ Button }>

            <AddCircleOutlineTwoToneIcon />
            <Typography variant="body2" sx={{ml:1}}>Add Task</Typography>
        </IconButton>
    );
};

export default ButtonAdd;