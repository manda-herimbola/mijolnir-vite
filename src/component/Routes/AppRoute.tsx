import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sign_in from "../Authentification/Sign_in";
import CreatAccount from "../Authentification/Create_account";
import {PathNameType, RouteState} from "../../RecoilState/RouteState";
import AppMain from "../MyApp/AppMain";
import {useRecoilValue} from "recoil";
import ApplicationMain from "../Application/ApplicationMain";

const AppRoute = () => {

    const RouteList: Array<PathNameType> = useRecoilValue(RouteState)

    return (
        <Router>
            <Routes>

                {
                    RouteList?.map((item,index) => (
                        <Route key={ index }
                               path={ item.path }
                               element={<ApplicationMain component={item.component} path={item.path}/>}/>
                    ))
                }

                <Route path="/sign_in" element={<Sign_in />}/>
                <Route path="/create_account" element={<CreatAccount />}/>
            </Routes>
        </Router>
    );
};

export default AppRoute;