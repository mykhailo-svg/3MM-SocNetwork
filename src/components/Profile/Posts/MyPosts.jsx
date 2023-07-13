
import MyPost from './MyPost/MyPost';
import './MyPosts.scss';



import React from 'react';







const MyPosts = (props) => {








    let postsInfo = props.myPostsData;
    let postsComponents = postsInfo.map(
        post => <MyPost time={post.time} id={post.id} post_text={post.post_text} likes={post.likes} comments={post.comments} />);

    // let userInfo = props.profileData.User;

    // let activeInfo = props.profileData.Active;
    // let activeItems = activeInfo.map(
    //     active => <Friend name={active.name} friend_state={active.friend_state} time={active.time} />);




    // let new_post_dialog = React.createRef();



    // const postDialogWindow = () => {

    //     new_post_dialog.current.classList.toggle("new_post_dialog-show");
    // }

    return (



            <div className="posts">


                {postsComponents}

            </div>
       


    )
}
export default MyPosts;