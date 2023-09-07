import React from 'react';
import {Box, IconButton, Menu} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import {MoreList, MoreListType} from "../../../../RecoilState/MoreList";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {FilterProject} from "../../../../RecoilState/TaskProject";

const BtnTaskMore = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const category: Array<MoreListType> = useRecoilValue(MoreList)
    const setCategory: any = useSetRecoilState(FilterProject)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const FilterProCt = (item: MoreListType) => {
        setCategory( item.value )
    }

    return (
        <Box>
            <IconButton type="submit"
                        edge="start"
                        onClick={handleClick}
                        color="inherit">
                <MoreHorizIcon />
            </IconButton>

            <Menu anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>

                {
                    category.map((item,index) =>
                        <MenuItem onClick={() => FilterProCt(item)} key={index}>
                            <ListItemIcon>
                                { item.component }
                            </ListItemIcon>
                            { item.value }
                        </MenuItem>
                    )
                }

            </Menu>
        </Box>
    );
};

export default BtnTaskMore;