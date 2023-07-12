import React from "react";
import Chat from "./Chat";
import { newMessageActionCreator } from "../../../redux/messages_reducer";
import StoreContext from "../../../store-context";






const ChatContainer = (props) => {


    // let chatData = props.chatData;

    // let newMessage = (messageText) => {


    //     props.dispatch(newMessageActionCreator(messageText));
    // }

    return (
        <StoreContext.Consumer>{
            (store) => {
                let newMessage = (messageText) => {


                    store.dispatch(newMessageActionCreator(messageText));
                }
                let chatInfo = store.getState().Messages.New_messages;
                return (<Chat newMessage={newMessage} chatData={chatInfo} />)
                
            }

        }



        </StoreContext.Consumer>
    )
}
export default ChatContainer;