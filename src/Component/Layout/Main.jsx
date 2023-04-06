import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Home from '../Home/Home';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Main;