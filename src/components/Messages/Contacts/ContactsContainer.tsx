//@ts-nocheck

import {useDispatch, useSelector } from "react-redux";

import Contacts from "./Contacts";
import React from "react";


let mapStateToProps = (state:any) => {

    return {
        // contactsData: state.Messages.Contacts,
    }

}

let mapDispatchToProps = () => {
    return {

    }


}

const ContactsContainer = () =>{

    const contactsData = useSelector((state)=>  state.contacts_reducer.Contacts)

    debugger
    return (
    <Contacts contactsData={contactsData}/>
)
} ;





export default ContactsContainer;