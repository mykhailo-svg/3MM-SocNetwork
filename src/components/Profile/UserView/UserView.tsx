// import Post from './Posts/Post/Post';
import '../Profile.scss';



import React, { RefObject } from 'react';
import postAvatar from '../../img/avatar.jpg'

import User_coverContainer from '../User_cover/User_coverContainer';
import User_aboutContainer from '../User_about/User_aboutContainer';
import Profile_peopleContainer from '../Profile_people/Profile_peopleContainer';
import MyPosts_container from '../Posts/MyPosts_container';





const UserView:React.FC = () => {


    return (

        <div className='_container'>




            <section className="cover">

                <User_coverContainer />

            </section>

            <div className="profile__main-row">



                <User_aboutContainer />



                <section className="posts__container">
                    

                    <MyPosts_container />

                </section>




                <Profile_peopleContainer />


            </div>

        </div>


    )
}




export default UserView;