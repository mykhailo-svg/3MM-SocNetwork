//@ts-nocheck


import React from "react";



import './Messages.scss';
import Chat from "./Chat/Chat";
import Contacts from "./Contacts/Contacts";



const Messages = () => {

    return (
        <section className='messages'>

            <div className="messages__container _container">
                <Contacts />
                <div className="messages__main">
                    <Chat />
                </div>
            </div>
        </section>


    )

}
export default Messages;