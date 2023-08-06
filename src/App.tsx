import './App.scss';


import Messages from './components/Messages/Messages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Home from './components/Home/Home';
import Purchases from './components/Purchases/Purchases';
import Returns from './components/People/People';
import Gallery from './components/Gallery/Gallery';
import Analytics from './components/Analytics/Analytics';

import React from 'react';
import UserView from './components/Profile/UserView/UserView';

import Profile from './components/Profile/Profile';
import AppMain from './components-main/Main';
import Log from './components-main/Authorization';
import Signup from './components/Authorization/Signup';
import Authorization from './components/Authorization/Login';








function App() {


    return (


        <BrowserRouter>

            <Routes>

                <Route path='/' element={<AppMain />}>
                    <Route path='Home' element={<Home />} />
                    <Route path='' element={<Profile />} />
                    <Route path='User/:id' element={<UserView />} />
                    <Route path='Messages' element={<Messages />} />



                    <Route path='Purchases' element={<Purchases />} />
                    <Route path='People' element={<Returns />} />
                    <Route path='Gallery' element={<Gallery />} />

                    <Route path='Analytics' element={<Analytics />} />

                    <Route path='Settings' element={<Settings />} />

                </Route>


                <Route path='/auth' element={<Log />}>
                    <Route path='Signup' element={<Signup />} />
                    <Route path='Log' element={<Authorization />} />
                </Route>







            </Routes>

        </BrowserRouter>
    );
}



export default App;
