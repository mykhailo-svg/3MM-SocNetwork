

import { connect } from "react-redux";

import User_cover from "./User_cover";


let mapStateToProps = (state:any) => {

    return {
        userCoverInfo: state.Profile.User,
    }

}



const User_coverContainer = connect(mapStateToProps)(User_cover);
export default User_coverContainer;