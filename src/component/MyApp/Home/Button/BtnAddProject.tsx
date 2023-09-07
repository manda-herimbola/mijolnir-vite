/*import React from 'react';
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import IconButton from "@mui/material/IconButton";
import {Box, Menu, TextField} from "@mui/material";
import {useRecoilState} from "recoil";
import {AddProject} from "../../../../RecoilState/TaskProject";
import BtnSubmit from "./BtnSubmit";

const BtnAddProject = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [ project, setProject ]: any = useRecoilState(AddProject)
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const AddProjectForm = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        const form = ev.target as HTMLFormElement
        const formData = new FormData( form )
        const newData: any = Object.fromEntries( formData.entries() )

        setProject([ ...project, newData.project ])
        setAnchorEl(null);

    }

    return (
        <Box>
            <IconButton
                size="small"
                edge="start"
                color="inherit"
                onClick={ handleClick }
                aria-label="open drawer">
                <NoteAddIcon />
            </IconButton>

            <Menu id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={ handleClose }
                  MenuListProps={{'aria-labelledby': 'basic-button'}}>

                <Box sx={{ ml: 1, mr: 1 }}
                     onSubmit={ AddProjectForm }
                     component="form">

                    <TextField variant="standard"
                               name="project"
                               defaultValue={ project.at(-1) }
                               placeholder="write your project"/>

                    <BtnSubmit/>
                </Box>

            </Menu>
        </Box>
    );
};

export default BtnAddProject;*/
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import {useRecoilState, useRecoilValue} from "recoil";
import {AddProject, ProjectValidate} from "../../../../RecoilState/TaskProject";

const ITEM_HEIGHT = 48;

export default function LongMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [pro, setPro]: [string, any] = useRecoilState(ProjectValidate)

    const project: Array<string> = useRecoilValue(AddProject)
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const ChangeProject = (option: string) => {
        setPro(option)
    }

    return (
        <div>
            <IconButton aria-label="more" id="long-button" size="small" color="inherit"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}>
                <NoteAddIcon />
            </IconButton>

            <Menu id="long-menu"
                  MenuListProps={{ 'aria-labelledby': 'long-button', }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{ style: { maxHeight: ITEM_HEIGHT * 4.5, width: '20ch',}, }}>

                {project.map(( option, index ) => (
                    <MenuItem key={ index }
                              selected={ option.split('#')[0] === pro }
                              onClick={ () => ChangeProject( option.split('#')[0] ) }>
                        { option.split('#')[0] }
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}