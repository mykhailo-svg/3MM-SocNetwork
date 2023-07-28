//@ts-nocheck
import { connect, useSelector } from "react-redux";
import PersonItems from "./PersonItems";
import { SetUSersAC, UnFollowUSerAC, followUSerAC } from "../../../../redux/people-reducer";
import PersonItemsAPI from "./PersonItemsAPI";
import React from "react";




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




const PersonItems_container = () =>{

    


    return(
        <PersonItemsAPI />
    )
}



export default PersonItems_container;



