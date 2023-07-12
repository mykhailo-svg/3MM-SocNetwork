



import ChatContainer from './Chat/ChatContainer';

import ContactsContainer from './Contacts/ContactsContainer';

import './Messages.scss';



const  Messages = (props) => {
    
        
    // let contactsData = props.messagesData.Contacts;

    

    // let b = props.New_messages;

    debugger;
    
    // let ContactElements = contactsData.map(contact => 
    //     <Contact id={contact.id} online={contact.online} name={contact.name} />
    // );

    return (
            <section className='messages'>
                
                 <div className="messages__container _container">
                        <ContactsContainer/>
                        <div className="messages__main">
                            <ChatContainer/>
                        </div>
                 </div>
            </section>
        
        
        )
        
}
export default Messages;