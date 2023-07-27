//@ts-nocheck

import React from "react";
import Chat from "./Chat";
import { useSelector } from "react-redux";

import { useActions } from "../../../hooks/useActions";




const ChatContainer = () => {
    const chatData = useSelector((state) => state.chat_reducer.New_messages)
    const { addMessage } = useActions()
    const newMessage = () => {
        addMessage({ type: "NEW-MESSAGE", messages_text: "1212" })
    }
    debugger
    return (
        <Chat newMessage={newMessage} chatData={chatData} />
    )
};

export default ChatContainer;