
import { connect } from "react-redux";
import PersonItems from "./PersonItems";
import { SetUSersAC, UnFollowUSerAC, followUSerAC } from "../../../../redux/people-reducer";




let mapStateToProps = (state: any) => {

    return {
        PeopleData: state.People.People
    }

}

let mapDispatchToProps = (dispatch: any) => {
    return {
        Follow: (id: number) => {
            dispatch(followUSerAC(id))
        },
        UnFollow: (id: number) => {
            dispatch(UnFollowUSerAC(id))
        },
        SetUsers: (users: any) => {
            dispatch(SetUSersAC(users))
        }
    }


}




const PersonItems_container = connect(mapStateToProps, mapDispatchToProps)(PersonItems)



export default PersonItems_container;



