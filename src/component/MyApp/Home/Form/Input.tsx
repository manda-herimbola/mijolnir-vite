import React from 'react';
import {Grid, TextField, Typography} from "@mui/material";
import {InputStyle} from "../../MyTasks/List/CheckDone";
import {useRecoilState} from "recoil";
import {ChangeCategory} from "../../../../RecoilState/TaskCategory";

const Input = () => {
    const [category, setCategory]: any = useRecoilState(ChangeCategory)

    return (
        <Typography variant="body2"
                    component="input"
                    placeholder="Add new task"
                    type="text"
                    name="title"
                    sx={{ ...InputStyle,
                        textDecoration: category === "Done" ? "line-through" : "none",
                        width: `calc(100% - 90px)`, mr: 2, '&::placeholder': {color: "#000"}
                    }}/>
    );
};

export default Input;