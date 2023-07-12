import StoreContext from "../../../store-context";
import Contacts from "./Contacts";







const ContactsContainer = (props) => {


    // let contactsData = props.messagesData.Contacts;



    // let b = props.New_messages;

    debugger;

    // let ContactElements = contactsData.map(contact =>
    //     <Contact id={contact.id} online={contact.online} name={contact.name} />
    // );

    return (
        <StoreContext.Consumer>{

            (store) => {

                let contactsData = store.getState().Messages.Contacts;

                return (<Contacts contactsData = {contactsData}/>
                )
            }


        }
        </StoreContext.Consumer>


    )

}
export default ContactsContainer;