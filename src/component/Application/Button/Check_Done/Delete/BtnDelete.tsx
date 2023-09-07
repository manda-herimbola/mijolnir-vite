import React from 'react';
import {IconButton, Tooltip} from "@mui/material";
import {DeleteOutline} from "@mui/icons-material";

const BtnDelete = () => {
    return (
        <Tooltip title="Delete">
            <IconButton size="small"
                        edge="end">
                <DeleteOutline/>
            </IconButton>
        </Tooltip>
    );
};

export default BtnDelete;