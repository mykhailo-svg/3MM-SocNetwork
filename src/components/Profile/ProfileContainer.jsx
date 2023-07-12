import { addPostActionCreator } from "../../redux/profile-reducer";
import StoreContext from "../../store-context";
import Profile from "./Profile";







const ProfileContainer = (props) => {



    function newPost(postText) {
        props.dispatch(addPostActionCreator(postText));
      
       
    }

    return (


        <StoreContext.Consumer>{

            (store) => {
                

                return (<Profile dispatch = {props.dispatch}  profileData = {props.profileData} newPost = {newPost} />)
            }


            }
            
        </StoreContext.Consumer>
        
        
        

    )
}
export default ProfileContainer;