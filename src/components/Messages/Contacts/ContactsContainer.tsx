import { connect } from "react-redux";

import Contacts from "./Contacts";


let mapStateToProps = (state:any) => {

    return {
        contactsData: state.Messages.Contacts,
    }

}

let mapDispatchToProps = () => {
    return {

    }


}

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts);


export default ContactsContainer;