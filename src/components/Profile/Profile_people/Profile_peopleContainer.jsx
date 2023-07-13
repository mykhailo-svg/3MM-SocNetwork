import StoreContext from "../../../store-context";
import Profile_people from "./Profile_people";








const Profile_peopleContainer = (props) => {

    // let activeInfo = props.profileData.Active;
    // let activeItems = activeInfo.map(
    //     active => <Friend name={active.name} friend_state={active.friend_state} time={active.time} />);

    return (

        <StoreContext.Consumer>{
            (store) => {

                let ActivePeopleInfo = store.getState().Profile.Active;

                return (



                    <Profile_people activePeopleData = {ActivePeopleInfo} />
                )
            }

        }

        </StoreContext.Consumer>


    )
}
export default Profile_peopleContainer;