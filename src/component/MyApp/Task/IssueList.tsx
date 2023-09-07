import React, {useEffect} from 'react';
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {AddIssue} from "../../../RecoilState/TaskProject";
import {IconButton} from "@mui/material";
import {DeleteOutline} from "@mui/icons-material";
import {TaskValue} from "../MyTasks/List/TaskList";
import {TaskOne} from "../../../RecoilState/TaskData";

const IssueList = ({ url }: any) => {
    const [ list, setList ]: [ Array<string>, any ] = useRecoilState(AddIssue)
    const taskOne: TaskValue = useRecoilValue( TaskOne )

    const DeleteIssue = async (item: string) => {
        const listEdit = list.filter(( value) => value !== item)

        setList( listEdit )

        const res = await fetch( `${ url }${ taskOne._id }`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ issue: listEdit })
        })

        console.log(await res.json() , "response")
    }

    return (
        <React.Fragment>
            {
                list?.map((item,index) => (
                    <ListItemButton key={index}>
                        <ListItemText primary={item} />

                        <IconButton size="small"
                                    onClick={() => DeleteIssue(item)}
                                    edge="end">
                            <DeleteOutline/>
                        </IconButton>
                    </ListItemButton>
                ))
            }
        </React.Fragment>
    );
};

export default IssueList;