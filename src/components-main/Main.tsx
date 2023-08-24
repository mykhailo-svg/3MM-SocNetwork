import Sidebar from '../components/Nav/Nav';
import Header from '../components/Header/Header';

import { Outlet } from 'react-router-dom';

import React from 'react';
import NavMobile from '../components/Nav/Mobile/NavMobile';










function AppMain() {


    return (
      

            <div className="content">

                {/* <NavMobile /> */}
                <Sidebar />

                <main className="main">



                    <Header />

                    <Outlet></Outlet>

                </main>

            </div>

        
    );
}



export default AppMain;
