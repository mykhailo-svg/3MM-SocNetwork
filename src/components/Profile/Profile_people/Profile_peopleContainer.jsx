import { connect } from "react-redux";

import Profile_people from "./ProfilePeople";






let mapStateToProps = (state) => {

    return {
        activePeopleData: state.Profile.Active,
    }

}

let mapDispatchToProps = () => {
    return {

    }


}

const Profile_peopleContainer = connect(mapStateToProps, mapDispatchToProps)(Profile_people);

export default Profile_peopleContainer;