import React from 'react';
import ColorLensIcon from "@mui/icons-material/ColorLens";
import IconButton from "@mui/material/IconButton";
import {Box, Grid, Menu} from "@mui/material";
import ColorList from "../../../../services/ColorList";

const BtnChangeColor = ({ setChangeColor }: any) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <IconButton size="small"
                        edge="start"
                        color="inherit"
                        onClick={ handleClick }
                        aria-label="open drawer">
                <ColorLensIcon />
            </IconButton>

            <Menu id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={ handleClose }
                  MenuListProps={{'aria-labelledby': 'basic-button'}}>

                <Grid container sx={{ p: '0 5px' }}>
                    {
                        ColorList?.map((item, index) => (
                            <Grid key={ index }
                                  onClick={ () => setChangeColor( item ) }
                                  sx={{ ...item, width: 30, height: 30, cursor: "pointer" }}>
                            </Grid>
                        ))
                    }
                </Grid>

            </Menu>
        </Box>
    );
};

export default BtnChangeColor;