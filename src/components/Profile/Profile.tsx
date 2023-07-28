// import Post from './Posts/Post/Post';
import './Profile.scss';



import React, { RefObject } from 'react';
import postAvatar from '../../img/avatar.jpg'

import User_coverContainer from './User_cover/User_coverContainer';
import User_aboutContainer from './User_about/User_aboutContainer';
import Profile_peopleContainer from './Profile_people/Profile_peopleContainer';
import MyPosts_container from './Posts/MyPosts_container';





type TypeProfileProps = {
    newPost:(postText:string)=>void
}



const Profile:React.FC<TypeProfileProps> = ({newPost}) => {

        


    let postsTextArea:RefObject<HTMLTextAreaElement> = React.useRef(null);


    function addPost() {
        // props.dispatch(addPostActionCreator(postsTextArea.current.value));
        newPost(postsTextArea.current?.value ?? '');
        postDialogWindow();




    }







    let new_post_dialog:RefObject<HTMLDivElement> = React.createRef();



    const postDialogWindow = () => {

        new_post_dialog.current?.classList.toggle("new_post_dialog-show");
    }

    return (

        <div className='_container'>




            <section className="cover">

                {/* <New_post newPost={props.newPost} dispatch={props.dispatch} dialog_window={postDialogWindow} reff={new_post_dialog} /> */}

                <div className='newp' ref={new_post_dialog}>
                    <div className="newp__zone" onClick={postDialogWindow}>

                    </div>
                    <div className="newp__container">
                        <div className="newp__title">
                            Add post
                        </div>

                        <div className='newp__content'>
                            <div className="newp__main">
                                <div className="newp__person">
                                    <div className="newp__avatar">
                                        <img src={postAvatar} alt="" />
                                    </div>
                                    <div className="newp__person-info">
                                        <div className="newp__person-name">Charles Deo</div>

                                    </div>
                                </div>

                                <textarea ref={postsTextArea}  placeholder='What is in your mind?' className="newp__input" />
                            </div>
                            <div className="newp__add">
                                <div className="newp__add-title">Add something...</div>
                            </div>

                            <button onClick={addPost} className="newp__publish">Publish</button>
                        </div>




                    </div>
                </div>


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