import React from 'react';
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import BtnSubmit from "../Home/Button/BtnSubmit";
import Box from "@mui/material/Box";
import useStyle from "../../../Style/Style";
import {useRecoilState, useSetRecoilState} from "recoil";
import {AddProject} from "../../../RecoilState/TaskProject";
import ImageBgHome from "../../../services/ImageBgHome";
import {IconButton} from "@mui/material";

const FormInputProject = () => {

    const classes: any = useStyle()
    const [ project, setProject ]: any = useRecoilState(AddProject)

    const AddProjectForm = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()

        const form = ev.target as HTMLFormElement
        const formData = new FormData( form )
        const newData: any = Object.fromEntries( formData.entries() )

        setProject([ ...project, newData.project + '#' + ImageBgHome[ project.length ].photo ])

        localStorage.setItem('img', ImageBgHome[ project.length ].photo)

        form.reset()
    }

    return (
        <Box component="form"
             onSubmit={ AddProjectForm }
             className={ classes.InputFormProject }
             sx={{ width: 240, bgcolor: "inherit" }}>

            <IconButton size="small">
                <AddCircleOutlineTwoToneIcon />
            </IconButton>

            {/*<input type="text"
                   name="project"
                   className={ classes.InputProject }/>

            <BtnSubmit/>*/}
        </Box>
    );
};

export default FormInputProject;