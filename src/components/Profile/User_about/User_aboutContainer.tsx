import { connect } from "react-redux";

import User_about from "./User_about";




let mapStateToProps = (state:any) => {

    return {
        userData: state.Profile.User,
    }

}



const User_aboutContainer = connect(mapStateToProps)(User_about);


export default User_aboutContainer;