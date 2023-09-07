import React from 'react';
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import {Tooltip} from "@mui/material";

const BtnSubmit = () => {
    return (
        <Tooltip title="Save" arrow>
            <IconButton type="submit"
                        size="small"
                        edge="end"
                        color="inherit">
                <SendIcon />
            </IconButton>
        </Tooltip>
    );
};

export default BtnSubmit;