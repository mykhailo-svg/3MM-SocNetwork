import Post from './Posts/Post';
import './Profile.css';

import prsonIcon from '../../img/person-ic.svg';

import birthIcon from '../../img/birth-ic.svg';
import placeIcon from '../../img/place-ic.svg';
import mailIcon from '../../img/Mail-ic.svg';
import phoneIcon from '../../img/phone-ic.svg';
import Friend from './Friends/Friend';
import React from 'react';






const Profile = (props) => {








    let postsInfo = props.profileData.Posts;
    let postsComponents = postsInfo.map(
        post => <Post time={post.time} id={post.id} post_text={post.post_text} likes={post.likes} comments={post.comments} />);

    let userInfo = props.profileData.User;

    let activeInfo = props.profileData.Active;
    let activeItems = activeInfo.map(
        active => <Friend name={active.name} friend_state={active.friend_state} time={active.time} />);



    let postsTextArea = React.createRef();


    function addPsot (){
        debugger;
        props.addPost(postsTextArea.current.value);
    }

    

    
    return (

        <div>




            <section className="cover">
                <div className="cover__main">
                    <div className="cover__avatar">
                        <img src="" alt="" />
                    </div>
                    <div className="cover__info">
                        <div className="cover__name">
                            {userInfo.Name}

                        </div>
                        <div className="cover__occupation">
                            {userInfo.Occupation}
                        </div>
                    </div>
                </div>
                <div className="cover__actions">
                    <button className="cover__edit-cover _button">Edit Cover Photo</button>
                    <button className="cover__edit-profile">Edit Profile</button>
                </div>
            </section>
            <div className="profile__main-row">
                <section className="about">
                    <div className="about__title"></div>
                    <ul className="about__list">
                        <li className="about__item"> <img src={prsonIcon} alt="" />{userInfo.Gender}</li>
                        <li className="about__item"> <img src={birthIcon} alt="" />{userInfo.Born}</li>
                        <li className="about__item"> <img src={placeIcon} alt="" />{userInfo.Place}</li>
                        <li className="about__item"> <img src={mailIcon} alt="" />{userInfo.Mail}</li>
                        <li className="about__item"> <img src={phoneIcon} alt="" />{userInfo.Phone}</li>
                    </ul>
                </section>
                <section className="posts__container">
                    <nav className="posts__nav">
                        <ul className="posts__nav-list">
                            <li className="posts__nav-item">Followers</li>
                            <li className="posts__nav-item">Following</li>
                            <li className="posts__nav-item">Posts</li>
                        </ul>


                        <svg onClick={() => {  addPsot() }} className='posts__nav-new-post' width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 15c0-8.27368-6.7263-15-15-15C6.72632 0 0 6.72632 0 15c0 8.2737 6.72632 15 15 15 8.2737 0 15-6.7263 15-15Zm-6.9474.4421c0 .9158-.7579 1.6737-1.6736 1.6737h-4.2632v4.2632c0 .9157-.7579 1.6736-1.6737 1.6736h-.8842c-.9158 0-1.6737-.7579-1.6737-1.6736v-4.2632H8.62105c-.91579 0-1.67368-.7579-1.67368-1.6737v-.8842c0-.9158.75789-1.6737 1.67368-1.6737h4.26315V8.62105c0-.91579.7579-1.67368 1.6737-1.67368h.8842c.9158 0 1.6737.75789 1.6737 1.67368v4.26315h4.2632c.9157 0 1.6736.7579 1.6736 1.6737v.8842Z" fill="#A303A0" /></svg>

                    </nav>
                    <div className="posts__textarea">
                        <textarea ref={postsTextArea} name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="posts">


                        {postsComponents}

                    </div>
                </section>
                <section className="people">
                    <div className="people__might-know">

                    </div>
                    <div className="peope__active">
                        <div className="people__active-list">
                            {activeItems}
                        </div>
                    </div>
                </section>
            </div>

        </div>


    )
}
export default Profile;