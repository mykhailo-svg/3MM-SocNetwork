import Sidebar from '../components/Nav/Nav';
import Header from '../components/Header/Header';

import { Outlet } from 'react-router-dom';

import React from 'react';










function AppMain() {


    return (
        <div className='wrapper'>

            <div className="content">


                <Sidebar />

                <main className="main">



                    <Header />

                    <Outlet></Outlet>

                </main>

            </div>

        </div>
    );
}



export default AppMain;
