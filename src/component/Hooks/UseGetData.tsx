import React, {useEffect, useState} from 'react';
import {createClient} from "pexels";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {ChangeBgImage, loaderImage, PexelsImage} from "../Application/State/BackgroundImage";
import {UsersLoader, UsersState, UsersType} from "../Application/State/UsersState";
import {OptionLoader, OptionState, OptionType, Project} from "../Application/State/OptionState";
import {TaskLoader, TaskState} from "../Application/State/TaskState";

const useGetData = ( url: string ) => {
    const [response, ] = useState('')

    const [imageBg, setImage] = useRecoilState<Array<any>>(PexelsImage)
    const setChangeBgImage = useSetRecoilState(ChangeBgImage)
    const setUsers = useSetRecoilState<UsersType>(UsersState)
    const [option, setOption] = useRecoilState<Array<OptionType>>(OptionState)
    const setLoader = useSetRecoilState(loaderImage)
    const setProject = useSetRecoilState(Project)
    const setOptionLoader = useSetRecoilState(OptionLoader)
    const setUsersLoader = useSetRecoilState(UsersLoader)
    const setTasksData = useSetRecoilState(TaskState)
    const setTasksLoader = useSetRecoilState(TaskLoader)
    const GetPhotos = () => {
        const client = createClient('0ZHed9hkzeVlC5rbPyRJKmi7nZuoVXTyRBzJ0uthxgYRBiSb1ydk3eTx');
        const query = 'Night';

        client.photos.search({ query, per_page: 100 }).then((photos: any) => {
            const photosFilter = photos.photos.filter((item: any) => item.height < item.width )
            const photosI = photosFilter.splice(-20)

            setImage( photosI )
        })
    }
    const GetUsers = async () => {
        try {
            const res = await fetch( url + 'users/' )
            const response = await res.json()

            setUsers(response.at(1))
            setUsersLoader(false)
        }catch (err){
            setUsersLoader(true)
            console.log(err)
        }
    }
    const GetOption = async () => {
        try {
            const res = await fetch( url + 'category/' )
            const response = await res.json()
            const newOption = option.map((item,index) => ({ ...item, ...response[index] }))

            setOption( newOption )
            setProject( newOption[0] )
            setLoader(false)
            setOptionLoader(false)

            setChangeBgImage(
                newOption[0].image === undefined ?
                    imageBg[0].src.large2x :
                    newOption[0].image
            )
        }catch (err){
            setOptionLoader(true)
            console.log(err)
        }
    }

    const GetData = async () => {
        try {
            const res: any = await fetch( url + 'tasks/' )
            const response = await res.json()

            setTasksData(response)
            setTasksLoader(false)
        }catch (err){
            console.log(err)
        }
    }

    useEffect(() => {
        GetPhotos()
        GetUsers().then()
        GetOption().then()
        GetData().then()
    },[])

    return response;
};

export default useGetData;