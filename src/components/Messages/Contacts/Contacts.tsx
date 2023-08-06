import React from 'react';
import Contact from './Contact/Contact';
import { RootState } from '../../../redux/redux-store';
import { useTypedSelector } from '../../../hooks/useTypedSelector';


const Contacts: React.FC= () => {

    
    let contactsData = useTypedSelector((state)  =>  state.contacts_reducer.Contacts);
   
    

    


    let ContactElements = contactsData.map((contact: any) =>
        <Contact  online={contact.online} name={contact.name} />
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