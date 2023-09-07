import React from 'react';
import NotesIcon from "@mui/icons-material/Notes";
import IconButton from "@mui/material/IconButton";

const BtnOfReduction = ({ setReduction, reduction }: any) => {

    const changeStyle: any = () => {
        if( reduction.display === "block" ){
            setReduction({ display: "none" })
        }else{
            setReduction({ display: "block" })
        }
    }

    return (
        <IconButton size="small"
                    edge="start"
                    color="inherit"
                    onClick={ changeStyle }
                    aria-label="open drawer">

            <NotesIcon />
        </IconButton>
    );
};

export default BtnOfReduction;