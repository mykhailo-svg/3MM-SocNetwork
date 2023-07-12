import { addPostActionCreator } from "../../redux/profile-reducer";
import Profile from "./Profile";







const ProfileContainer = (props) => {



    function newPost(postText) {
        props.dispatch(addPostActionCreator(postText));
      
       
    }

    return (

        
        <Profile dispatch = {props.dispatch}  profileData = {props.profileData} newPost = {newPost} />

    )
}
export default ProfileContainer;