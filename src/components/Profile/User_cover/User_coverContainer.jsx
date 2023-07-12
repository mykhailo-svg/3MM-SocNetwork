import StoreContext from "../../../store-context";
import User_cover from "./User_cover";






const User_coverContainer = (props) => {


    // let userInfo = props.profileData.User;

    return (

        <StoreContext.Consumer>{

            (store) => {


                let userCoverInfo = store.getState().Profile.User;


                return (<User_cover userCoverInfo = {userCoverInfo}/>)
            }


        }



        </StoreContext.Consumer>





    )
}
export default User_coverContainer;