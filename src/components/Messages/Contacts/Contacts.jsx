



import Contact from './Contact/Contact';
import './Contacts.scss';



const  Contacts = (props) => {
    
        
    let contactsData = props.contactsData;

    

    // let b = props.New_messages;

    // debugger;
    
    let ContactElements = contactsData.map(contact => 
        <Contact id={contact.id} online={contact.online} name={contact.name} />
    );

    return (
           
                

                        <div className="messages__sidebar">
                            <div className="messages__sidebar-title">Messages</div>
                            <div className="messages__contacts">
                                <div className='messages__list'>
                                    {ContactElements}
                                   
                                </div>
                                
                            </div>
                        </div>
                  
              
          
        
        
        )
        
}
export default Contacts;