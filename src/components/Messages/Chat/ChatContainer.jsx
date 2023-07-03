import React from "react";
import Chat from "./Chat";
import { newMessageActionCreator } from "../../../redux/messages_reducer";






const  ChatContainer = (props) => {

   


    let newMessage = (messageText) => {


        props.dispatch(newMessageActionCreator(messageText));
    }

    return (
        
        <Chat newMessage = {newMessage} chatData={props.chatData}/>
    )
}
export default ChatContainer;