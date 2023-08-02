//@ts-nocheck
// import Post from './Posts/Post/Post';
import '../Profile.scss';



import React, { RefObject } from 'react';
import postAvatar from '../../img/avatar.jpg'
import User_cover from '../User_cover/User_cover';
import User_about from '../User_about/User_about';
import MyPosts from '../Posts/MyPosts';
import ProfilePeople from '../Profile_people/ProfilePeople';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

// import User_coverContainer from '../User_cover/User_coverContainer';
// import User_aboutContainer from '../User_about/User_aboutContainer';
// import Profile_peopleContainer from '../Profile_people/Profile_peopleContainer';
// import MyPosts_container from '../Posts/MyPosts_container';





const UserView:React.FC = () => {


    let userInfo = {
        Name:"view user",
        Gender:"male",
        Occupation:"view occupation"

    }
    let userPosts = useTypedSelector((state)=> state.profile_reducer.Posts)

    return (

        <div className='_container'>




            <section className="cover">

                <User_cover userCoverInfo = {userInfo}/>

            </section>

            <div className="profile__main-row">



                <User_about userData = {userInfo} />



                <section className="posts__container">
                    

                    <MyPosts  myPostsData={userPosts} />

                </section>




                {/* <ProfilePeople /> */}


            </div>

        </div>


    )
}




export default UserView;