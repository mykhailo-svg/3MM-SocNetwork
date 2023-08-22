import React from 'react';
import Contact from './Contact/Contact';
import { RootState } from '../../../redux/redux-store';
import { useTypedSelector } from '../../../hooks/useTypedSelector';


interface InterfaceContact {
    id: number
    name: string
    online: string
}

const Contacts: React.FC= () => {

    
    let contactsData = useTypedSelector((state)  =>  state.contacts_reducer.Contacts);
   
    

    


    let ContactElements = contactsData.map((contact: InterfaceContact) =>
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