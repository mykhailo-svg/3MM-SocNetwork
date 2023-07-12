


import Chat from './Chat/Chat';
import ChatContainer from './Chat/ChatContainer';
import Contact from './Contact/Contact';
import './Messages.scss';



const  Messages = (props) => {
    
        
    let contactsData = props.messagesData.Contacts;

    

    let b = props.New_messages;

    debugger;
    
    let ContactElements = contactsData.map(contact => 
        <Contact id={contact.id} online={contact.online} name={contact.name} />
    );

    return (
            <section className='messages'>
                
                 <div className="messages__container _container">
                        <div className="messages__sidebar">
                            <div className="messages__sidebar-title">Messages</div>
                            <div className="messages__contacts">
                                <div className='messages__list'>
                                    {ContactElements}
                                   
                                </div>
                                
                            </div>
                        </div>
                        <div className="messages__main">
                            <ChatContainer chatData={props.messagesData.New_messages} dispatch = {props.dispatch} />
                        </div>
                 </div>
            </section>
        
        
        )
        
}
export default Messages;