import React from "react";
import chat_avatar from '../../../img/chat_profile.jpg';
import './Message.scss';
import { type } from "os";

    type typeMessageProps = {
        message:String
    }


const  Message = (props:typeMessageProps) => {


   


    return (
        
       
                <div className="chat__message">
                    <div className="message__avatar">
                        <img src={chat_avatar} alt="" />
                    </div>
                    <div className="chat__message-content">
                        <div className="chat__message-text">{props.message}</div>
                        <div className="chat__message-info">
                            <div className="chat__message-time">22:10</div>
                            <div className="chat__message-state">Read</div>
                        </div>
                    </div>
                    

                </div>
                

      


  
    )
}
export default Message;