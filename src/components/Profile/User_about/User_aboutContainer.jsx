import { connect } from "react-redux";

import User_about from "./User_about";








// const User_aboutContainer = (props) => {


//     return (

//         <StoreContext.Consumer>{
//             (store) => {

//                 let userAboutData = store.getState().Profile.User;

//                 return (<User_about userData = {userAboutData} />)
//             }

//         }
//         </StoreContext.Consumer>






//     )
// }


let mapStateToProps = (state) => {

    return {
        userData: state.Profile.User,
    }

}



const User_aboutContainer = connect(mapStateToProps)(User_about);


export default User_aboutContainer;