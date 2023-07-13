






import './App.scss';

import Sidebar from './components/Nav/Nav';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Home from './components/Home/Home';
import Purchases from './components/Purchases/Purchases';
import Returns from './components/Returns/Returns';
import Gallery from './components/Gallery/Gallery';
import Analytics from './components/Analytics/Analytics';
import ProfileContainer from './components/Profile/ProfileContainer';







function App(props) {
   
  return (
        

        <BrowserRouter>
            <div className='wrapper'>

                <div className="content">
    
                    
                        <Sidebar />
                        {/* {props.contactsData[1].name} */}
                        {/* {props.state.contactsData[1].name} */}
                        
                    <main className="main">
    
    
    
                        <Header />
                        
                        
                         {/* {props.state.Profile.Posts[0].id}    */}
                        
                        <Routes>
                            <Route path='/Home' element={<Home />}/> 
                            <Route exact path='/' element={<ProfileContainer dispatch = {props.dispatch} />}/> 
                            <Route path='/Messages' element={<Messages/>}/> 

                            
                            
                            <Route path='/Purchases' element={<Purchases />}/> 
                            <Route path='/Returns' element={<Returns />}/>
                            <Route path='/Gallery' element={<Gallery />}/>  

                            <Route path='/Analytics' element={<Analytics />}/> 

                            <Route path='/Settings' element={<Settings />}/> 

                            
                            
                        </Routes>
                        
                        
    
                        {/* <Profile />
    
                        <Messages /> */}
    
    
    
    
                    </main>
    
                </div>
                
            </div>
        </BrowserRouter>
  );
}



export default App;
