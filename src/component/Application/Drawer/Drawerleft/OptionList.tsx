import React from 'react';
import {Box, Grid, List, Skeleton, Typography} from "@mui/material";
import {alignCenter} from "../../../MyApp/MyTasks/List/TaskList";
import ListItemButton from "@mui/material/ListItemButton";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {OptionState, OptionType, Project} from "../../State/OptionState";
import {Link} from "react-router-dom";
import {ChangeBgImage, loaderImage, PexelsImage} from "../../State/BackgroundImage";

const LinkStyle: object = {
    color: 'inherit',
    textDecoration: 'none',
}

const OptionList = () => {
    const option: Array<OptionType> = useRecoilValue<Array<OptionType>>(OptionState)
    const imageBg = useRecoilValue<Array<any>>(PexelsImage)
    const setChangeBgImage = useSetRecoilState(ChangeBgImage)
    const setOption = useSetRecoilState<OptionType>(Project)
    const [loader,setLoader] = useRecoilState(loaderImage)
    const ChangeOption = (item: OptionType, index: number) => () => {

        if( item.image === undefined ){
            setChangeBgImage(imageBg[ index ].src.large2x)
        }else{
            fetch( `http://localhost:5000/category/${item._id}` )
                .then(res=> res.json())
                .then(res => {
                    setLoader(false)
                    setChangeBgImage(res.image)
                })
                .catch(err => {
                    setLoader(true)
                    console.log(err)
                })
        }
        setLoader(true)
        setOption( item )
    }

    return (
        <List>
            {
                option.map((item,index) => (
                    <Link to={ item.path !== undefined && !loader ? item.path : "" }
                          onClick={ ChangeOption( item, index ) }
                          key={ index }
                          style={ LinkStyle }>
                        <ListItemButton sx={{p:1.5}}>
                            <Grid sx={{ ...alignCenter, color: 'rgb(95,95,95)'}}>
                                { item.icon }
                                { item.users_Id === undefined ?
                                    <Skeleton variant="text" height={20} width={150}/> :
                                    <Typography variant="body2">{ item.option }</Typography> }
                            </Grid>
                        </ListItemButton>
                    </Link>
                ))
            }
        </List>
    );
};

export default OptionList;