import Sidebar from '../components/Nav/Nav';
import Header from '../components/Header/Header';

import { Outlet } from 'react-router-dom';

import React from 'react';










function Authorization() {


    return (
        <div className='wrapper'>

            <div className="content">

                <Outlet></Outlet>

            </div>

        </div>
    );
}



export default Authorization;
