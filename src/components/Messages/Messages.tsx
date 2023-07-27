//@ts-nocheck


import React from "react";
import ChatContainer from './Chat/ChatContainer';

import ContactsContainer from './Contacts/ContactsContainer';

import './Messages.scss';



const Messages = () => {

    return (
        <section className='messages'>

            <div className="messages__container _container">
                <ContactsContainer />
                <div className="messages__main">
                    <ChatContainer />
                </div>
            </div>
        </section>


    )

}
export default Messages;