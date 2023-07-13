// import Post from './Posts/Post/Post';
import './Profile.scss';


import Friend from './Profile_people/Friends/Friend';
import React from 'react';

import New_post from './New_post/New_post';
import User_coverContainer from './User_cover/User_coverContainer';
import User_aboutContainer from './User_about/User_aboutContainer';
import Profile_peopleContainer from './Profile_people/Profile_peopleContainer';
import MyPosts_container from './Posts/MyPosts_container';






const Profile = (props) => {








   



    let new_post_dialog = React.createRef();



    const postDialogWindow = () => {

        new_post_dialog.current.classList.toggle("new_post_dialog-show");
    }

    return (

        <div>




            <section className="cover">

                <New_post newPost={props.newPost} dispatch={props.dispatch} dialog_window={postDialogWindow} reff={new_post_dialog} />

                <User_coverContainer />


                <div className="cover__actions">
                    <button className="cover__edit-cover _button">Edit Cover Photo</button>
                    <button className="cover__edit-profile" >Edit Profile</button>
                </div>
            </section>

            <div className="profile__main-row">



                <User_aboutContainer />


          
                <section className="posts__container">
                    <nav className="posts__nav">
                        <ul className="posts__nav-list">
                            <li className="posts__nav-item">Followers</li>
                            <li className="posts__nav-item">Following</li>
                            <li className="posts__nav-item">Posts</li>
                        </ul>


                        <svg onClick={() => { postDialogWindow() }} className='posts__nav-new-post' width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 15c0-8.27368-6.7263-15-15-15C6.72632 0 0 6.72632 0 15c0 8.2737 6.72632 15 15 15 8.2737 0 15-6.7263 15-15Zm-6.9474.4421c0 .9158-.7579 1.6737-1.6736 1.6737h-4.2632v4.2632c0 .9157-.7579 1.6736-1.6737 1.6736h-.8842c-.9158 0-1.6737-.7579-1.6737-1.6736v-4.2632H8.62105c-.91579 0-1.67368-.7579-1.67368-1.6737v-.8842c0-.9158.75789-1.6737 1.67368-1.6737h4.26315V8.62105c0-.91579.7579-1.67368 1.6737-1.67368h.8842c.9158 0 1.6737.75789 1.6737 1.67368v4.26315h4.2632c.9157 0 1.6736.7579 1.6736 1.6737v.8842Z" fill="#A303A0" /></svg>

                    </nav>
                    
                    <MyPosts_container />

                </section>

                


                <Profile_peopleContainer />


            </div>

        </div>


    )
}
export default Profile;