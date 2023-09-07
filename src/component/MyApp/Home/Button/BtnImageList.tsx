import React, {useEffect} from 'react';
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import IconButton from "@mui/material/IconButton";
import {Box, ImageList, ImageListItem, Menu, MenuItem, Skeleton, Typography} from "@mui/material";
import PrintIcon from '@mui/icons-material/Print';
import {alignCenter} from "../../MyTasks/List/TaskList";
import {addDayStyle} from "../../Drawer/AddToMyJourney";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import ImageBgHome from "../../../../services/ImageBgHome";
import ComboBox from "../ModePhotos";
import AddIcon from '@mui/icons-material/Add';
import {ImgBackground, ImgFile} from "../../../../RecoilState/ImgBackground";

const BtnImageList = ({ setIndexBg }: any) => {

    const imagePexels = useRecoilValue(ImageBgHome)
    const [idImgBg, setIdImgBg] = useRecoilState(ImgBackground)
    const setImgBg = useSetRecoilState(ImgFile)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const selectTouche: Array<any> = [
        {
            icon: <AddIcon sx={{mr: 2}}/>,
            text: 'More image'
        }, {
            icon: <PrintIcon sx={{mr: 2}}/>,
            text: 'Import image'
        }
    ]

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const ChangeBgImage = ( item: any, index: number ) => async () => {

        setImgBg( item.src.large2x )

        try{
            const res = await fetch('http://localhost:5000/image/'+idImgBg, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ myDay: item })
            })

            const response = await res.json()

            setIdImgBg( response.insertedId )
        }catch (err) {
            console.log(err)
        }


    }

    return (
        <Box>
            <IconButton edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleClick}>
                <AddPhotoAlternateIcon />
            </IconButton>

            <Menu id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{'aria-labelledby': 'basic-button'}}>

                <Box sx={{p: 1.5}}>

                    <ComboBox />

                    <ImageList cols={4} rowHeight={60}>
                        {
                            imagePexels?.map( (item: any, index) => (
                                <ImageListItem key={ index }
                                               sx={{
                                                   cursor: 'pointer',
                                                   width: 60, height: 60, overflow: 'hidden',
                                                   borderRadius: 1
                                               }}
                                               onClick={ ChangeBgImage( item, index ) }>
                                    { item !== undefined ?
                                        <img alt={item.alt}
                                             style={{ objectFit: 'cover' }}
                                             src={item.src.small}/> :
                                        <Skeleton variant="rectangular" height={60}/>}
                                </ImageListItem>
                            ))
                        }
                    </ImageList>
                </Box>

                <Box>
                    {
                        selectTouche.map((item, index) => (
                            <Box key={index} sx={{ ...addDayStyle }}>
                                { item.icon }
                                <Typography variant="body2">{ item.text }</Typography>
                            </Box>
                        ))
                    }
                </Box>

            </Menu>
        </Box>
    );
};

export default BtnImageList;