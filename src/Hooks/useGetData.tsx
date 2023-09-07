import {useEffect, useState} from "react";
import {useRecoilState, useSetRecoilState} from "recoil";
import {TaskData, MyDayTask} from "../RecoilState/TaskData";
import {TaskValue} from "../component/MyApp/MyTasks/List/TaskList";
import {AddProject} from "../RecoilState/TaskProject";
import {dateString} from "../component/MyApp/Home/Form/HomeFormData";
import {ProjectFavorite, TaskFavorite} from "../RecoilState/TaskFavorite";
import {ImgBackground, ImgFile} from "../RecoilState/ImgBackground";
import ImageBgHome from "../services/ImageBgHome";
import {createClient} from "pexels";
import {urlProject, urlUsers} from "../component/MyApp/AppMain";
import {UsersState} from "../RecoilState/UsersState";
import {ProjectState} from "../RecoilState/ProjectState";

const useGetData = ( url: string ) => {
    const [ req, setReq ]: any = useState({})
    const [ response, setResponse ]: any = useState({})

    const setDataTask: any = useSetRecoilState(TaskData)
    const setMyDayTask: any = useSetRecoilState(MyDayTask)
    const setPhotosPexel = useSetRecoilState(ImageBgHome)

    const setFavPro: any = useSetRecoilState(ProjectFavorite)
    const setFavTask: any = useSetRecoilState(TaskFavorite)
    const setIdImgBg = useSetRecoilState(ImgBackground)
    const setImgBg = useSetRecoilState(ImgFile)
    const setUsers = useSetRecoilState(UsersState)
    const setProject = useSetRecoilState(ProjectState)

    const GetUsers = async () => {
        const res = await fetch( urlUsers )
        const response = await res.json()

        setUsers(response.at(1))
    }

    const GetProject = async () => {
        const res = await fetch( urlProject )
        const response = await res.json()

        setProject( response )
    }

    const GetData = async () => {
        const res: any = await fetch( url, req )
        const resJson: Array<TaskValue> = await res.json()

        /*const dataFilter: Array<TaskValue> = resJson.filter(( item) => item.project !== "My journey" )
        const favFilter: Array<TaskValue> = resJson.filter((item) => item.favorite === true )

        const pro: Array<any> = []
        const fav: Array<any> = []

        dataFilter.map((item) => pro.push( item.project + '#' + item.image ))
        favFilter.map((item) => fav.push( item.project + '#' + item.image ))

        const newPro: Array<any> = [ ...new Set( pro ) ]
        const newFav: Array<any> = [ ...new Set( fav ) ]*/

        if( url === 'http://localhost:5000/tasks/' ){
            setDataTask( resJson )

            setMyDayTask( resJson.filter((item) => dateString === item.date && item.project === "My Day" ))

            /*setProject( newPro )

            setFavPro( newFav )

            setFavTask( favFilter )

            setImgBg( ImageBgHome[ +img ].photo )*/

            console.log(resJson)
        }else{
            setResponse( resJson )
        }

    }

    useEffect(() => {
        const client = createClient('0ZHed9hkzeVlC5rbPyRJKmi7nZuoVXTyRBzJ0uthxgYRBiSb1ydk3eTx');
        const query = 'Night';

        client.photos.search({ query, per_page: 100 }).then((photos: any) => {
            const photosFilter = photos.photos.filter((item: any) => item.height < item.width )
            setPhotosPexel( photosFilter.splice(-20) )
        });

        GetUsers()
        GetProject()
        GetData()
    },[])

    return [ response, setReq ]
};

export default useGetData;