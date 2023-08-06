import Sidebar from '../components/Nav/Nav';
import Header from '../components/Header/Header';
import './Authorization.scss';
import { Outlet } from 'react-router-dom';
import background from '../img/auth-bg.svg'
import React from 'react';










function Authorization() {


    return (
        <div className='wrapper'>

            <div className="content">
                <section className="signup">
                    <img className='auth-bg' src={background} alt="" />
                    <Outlet></Outlet>
                </section>

            </div>

        </div>
    );
}



export default Authorization;
