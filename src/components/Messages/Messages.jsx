


import Chat from './Chat/Chat';
import Contact from './Contact/Contact';
import './Messages.css';


const NewMessage  = (props) =>{

    return(
        <div className="messages__chat-item">
                {props.message}
        </div>
    )
}

const  Messages = (props) => {
    

    let a = props.contactsData;

    


    
    let ContactElements = a.map(contact => 
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
                            <Chat />
                        </div>
                 </div>
            </section>
        
        
        )
}
export default Messages;