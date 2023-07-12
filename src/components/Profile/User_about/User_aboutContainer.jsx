import StoreContext from "../../../store-context";
import User_about from "./User_about";








const User_aboutContainer = (props) => {


    return (

        <StoreContext.Consumer>{
            (store) => {

                let userAboutData = store.getState().Profile.User;

                return (<User_about userData = {userAboutData} />)
            }

        }
        </StoreContext.Consumer>






    )
}
export default User_aboutContainer;