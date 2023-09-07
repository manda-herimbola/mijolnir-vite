import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Box} from "@mui/material";
import {Search, SearchIconWrapper, StyledInputBase} from "../../../Style/MuiStyle";

const SearchAppBar = () => {
    return (
        <Box sx={{pt:0.5}}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon sx={{fontSize:20}}/>
                </SearchIconWrapper>
                <StyledInputBase
                    sx={{ml:1}}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}/>
            </Search>
        </Box>
    );
}

export default SearchAppBar;