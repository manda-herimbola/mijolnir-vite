import React from 'react';
import {Button, Stack} from "@mui/material";

const ProfileButton = () => {
    return (
        <Stack spacing={1} direction="row" >
            <Button variant="outlined" size="small" sx={{ width: 80 }}>cancel</Button>
            <Button variant="contained" size="small" sx={{ width: 80 }}>Save</Button>
        </Stack>
    );
};

export default ProfileButton;