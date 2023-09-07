import React from 'react';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from "@mui/material/IconButton";
import {useRecoilState} from "recoil";
import {IconFav} from "../../../../RecoilState/TaskFavorite";

const BtnFavorite = () => {

    const [ iconFav, setIconFav ] = useRecoilState(IconFav)

    const changeIcon = () => iconFav ?
        setIconFav(false) : setIconFav(true)

    return (
        <IconButton size="small"
                    edge="end"
                    onClick={ changeIcon }
                    color="inherit">
            { iconFav ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
        </IconButton>
    );
};

export default BtnFavorite;