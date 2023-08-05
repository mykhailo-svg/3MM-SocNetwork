
import './App.scss';

import Sidebar from './components/Nav/Nav';
import Header from './components/Header/Header';

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








function App() {

    
    return (


        <BrowserRouter>
            <div className='wrapper'>

                <div className="content">


                    <Sidebar />

                    <main className="main">



                        <Header />

                        <Routes>
                         
                            <Route path='/Home' element={<Home />} />
                            <Route path='/' element={<Profile />} />
                            <Route path='/User/:id' element={<UserView />} />
                            <Route path='/Messages' element={<Messages />} />



                            <Route path='/Purchases' element={<Purchases />} />
                            <Route path='/People' element={<Returns />} />
                            <Route path='/Gallery' element={<Gallery />} />

                            <Route path='/Analytics' element={<Analytics />} />

                            <Route path='/Settings' element={<Settings />} />



                        </Routes>

                    </main>

                </div>

            </div>
        </BrowserRouter>
    );
}



export default App;
