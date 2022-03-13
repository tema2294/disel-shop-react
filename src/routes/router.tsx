import React, {useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from 'pages/mainPage/mainPage';
import {ItemListPage} from "../pages/itemListPage/itemListPage";
import {tnvd_data} from "../data/tnvd";



const AppRouter = () => {
    useEffect(()=>{
        window.scroll(0,0)
    },[])
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/tnvd-item-list" element={<ItemListPage data={tnvd_data}/>}/>
        </Routes>
    )
}

export default AppRouter

