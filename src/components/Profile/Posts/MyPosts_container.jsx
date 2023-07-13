import React from "react";
import StoreContext from "../../../store-context";
import MyPosts from "./MyPosts";






const MyPosts_container = (props) => {








    // let postsInfo = props.profileData.Posts;
    // let postsComponents = postsInfo.map(
    //     post => <Post time={post.time} id={post.id} post_text={post.post_text} likes={post.likes} comments={post.comments} />);

   

    let new_post_dialog = React.createRef();



    const postDialogWindow = () => {

        new_post_dialog.current.classList.toggle("new_post_dialog-show");
    }

    return (

        <StoreContext.Consumer>{

            (store) => {
                let postsInfo = store.getState().Profile.Posts;
                // let postsComponents = postsInfo.map(
                //     post => <Post time={post.time} id={post.id} post_text={post.post_text} likes={post.likes} comments={post.comments} />);
                return (


                    <MyPosts myPostsData = {postsInfo} />
                )
            }

        }

        </StoreContext.Consumer>


    )
}
export default MyPosts_container;