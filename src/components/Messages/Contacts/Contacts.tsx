import React from 'react';
import Contact from './Contact/Contact';


type TypeContactsProps = {

    contactsData: {
        online: string
        name: string;

    }[]
}

const Contacts: React.FC<TypeContactsProps> = (props) => {


    let contactsData = props.contactsData;





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