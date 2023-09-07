import React from 'react';
import {DeleteOutline} from "@mui/icons-material";
import {Box, IconButton, Tooltip} from "@mui/material";
import AlertDialogSlide from "../../Drawer/Dialogue";
import {useRecoilState, useSetRecoilState} from "recoil";
import {DeleteName, DialogueState} from "../../../../RecoilState/DrawerState";

const DeleteBtn = ({size, ...props}: any) => {
    const handleClick = useSetRecoilState(DialogueState)
    const setName = useSetRecoilState(DeleteName)

    const Validation = () => {
        handleClick(true)
        setName({
            name: props.name,
            data: props.data,
            index: props.index
        })
    }

    return (
        <Tooltip title="Delete">
            <IconButton size={ size }
                        onClick={ Validation }
                        edge="end">
                <DeleteOutline sx={{ fontSize: props.fontSize }}/>
            </IconButton>
        </Tooltip>
    );
};

export default DeleteBtn;