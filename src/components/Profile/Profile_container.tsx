
import Profile from './Profile';

import { connect } from 'react-redux';
import { addPostActionCreator } from '../../redux/profile-reducer';


let mapStateToProps = (state:any) => {

    return {


    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        newPost: (postText:string) => {
            dispatch(addPostActionCreator(postText))
        },
    }
}






const Profile_container = connect(mapStateToProps, mapDispatchToProps)(Profile);


export default Profile_container;