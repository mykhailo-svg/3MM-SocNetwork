import React from 'react';
import Contact from './Contact/Contact';
import { useSelector } from 'react-redux';


const Contacts: React.FC= () => {

    
    let contactsData = useSelector((state:any)  =>  state.contacts_reducer.Contacts);
   
    




    let ContactElements = contactsData.map((contact: any) =>
        <Contact online={contact.online} name={contact.name} />
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