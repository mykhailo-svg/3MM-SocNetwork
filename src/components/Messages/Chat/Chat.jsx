
import React from 'react';
import chat_avatar from '../../../img/chat_profile.jpg';
import Message from '../Message/Message';
import './Chat.css';



const  Chat = (props) => {

    const messageInput = React.createRef();    

    let chatData = props.chatData;

    let chatElems = chatData.map(chatElement => <Message message = {chatElement.message} /> )
    debugger;

    let newMessage = () => {

        props.newMessage(messageInput.current.value);
    }

    return (
        
        <div className="chat__container">
            <div className="chat__current">
                <div className="chat__current-avatar">
                    <img src={chat_avatar} alt="" />
                </div>
                <div className="chat__current-name">Charles Deo</div>
            </div>
            <div className="chat__messages">
                
                {chatElems}
                

            </div>


            <div className="chat__actions">
                <svg className='chat__pin-file' width="27" height="27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.72358 14.7534c-.09324.0836-.20393.15-.32575.1953-.12182.0452-.25239.0685-.38424.0685-.13186 0-.26243-.0233-.38425-.0685-.12182-.0453-.23251-.1117-.32575-.1953-.09324-.0837-.1672-.183-.21766-.2923-.05046-.1093-.07643-.2264-.07643-.3447 0-.1183.02597-.2355.07643-.3447.05046-.1093.12442-.2087.21766-.2923L14.2257 1.88799C15.6551.655996 17.5674-.0219845 19.5493.000544c1.9819.0225285 3.8744.743757 5.2686 2.007846C26.212 3.27249 26.9958 4.97794 27 6.75626c.0041 1.77832-.7717 3.48674-2.1599 4.75604L9.33303 25.4295l-.08094.066c-1.16983.9263-2.39117 1.45-3.67872 1.5006-1.28756.0506-2.60454-.3895-3.897-1.395l-.01717-.0132-.03679-.033C1.05366 25.0566.607543 24.457.312788 23.7946c-.2767976-.6402-.3720257-1.332-.2771306-2.0133.1089566-.829.4460776-1.6207.9809926-2.3038.46732-.5827.99535-1.1242 1.57695-1.6172L16.9848 4.94427c.5961-.53342 1.4025-.83461 2.2444-.83832.8419-.0037 1.6515.29037 2.2534.81852l.0221.0198c.5884.52728.9239 1.23998.9349 1.98607.011.74608-.3034 1.46649-.876 2.00755l-.0589.05941L9.10985 20.1134c-.09324.0837-.20393.15-.32575.1953-.12182.0453-.25239.0686-.38425.0686-.13185 0-.26242-.0233-.38424-.0686-.12182-.0453-.23251-.1116-.32575-.1953-.09324-.0836-.1672-.1829-.21766-.2922-.05046-.1093-.07643-.2265-.07643-.3448 0-.1183.02597-.2354.07643-.3447.05046-.1093.12442-.2086.21766-.2923L20.1117 7.6903c.2028-.2028.3122-.46707.3063-.73945-.0059-.27239-.1268-.53263-.3382-.72818-.2224-.19873-.5236-.3103-.8375-.3103-.3139 0-.6151.11157-.8375.3103L4.00623 19.1321c-.48986.4158-.93719.8701-1.3366 1.3576-.34914.4457-.56989.962-.64256 1.5028-.05397.3908-.00007.7875.15696 1.1552.19294.4188.47824.7982.83875 1.1156.87309.6733 1.69467.9681 2.47456.9373.77989-.0308 1.59657-.3982 2.42305-1.0539L23.4201 10.2405c1.011-.93258 1.5743-2.18362 1.5688-3.48458-.0055-1.30096-.5793-2.54814-1.5982-3.4738-1.0189-.92567-2.4017-1.45604-3.8516-1.47726-1.4498-.02123-2.8512.46838-3.9032 1.36373L2.72358 14.7534Z" fill="#490057"/></svg>
                <div className="chat__type">
                    <input ref={messageInput} type="text" placeholder="Write a message..." className="chat__input" />
                </div>
                
                <svg width="27" height="27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 0C6.0561 0 0 6.0561 0 13.5S6.0561 27 13.5 27 27 20.9439 27 13.5 20.9439 0 13.5 0Zm0 24.5455c-6.09055 0-11.04545-4.955-11.04545-11.0455 0-6.09046 4.9549-11.04545 11.04545-11.04545 6.0905 0 11.0455 4.95499 11.0455 11.04545 0 6.0905-4.955 11.0455-11.0455 11.0455Z" fill="#490057"/><path d="M17.6654 16.4383H9.33444c-.49639 0-.94394.2989-1.13384.7576-.1899.4586-.08493.9865.26607 1.3375 1.34444 1.3443 3.13203 2.0848 5.03333 2.0848 1.9013 0 3.6888-.7405 5.0333-2.0848.351-.351.4559-.8788.266-1.3375-.19-.4587-.6375-.7576-1.1339-.7576ZM9.42047 12.0387c.30436-.3043.47945-.7265.47945-1.1569 0-.4303-.17509-.8525-.47945-1.15697-.30436-.30429-.72655-.47938-1.15691-.47938-.43118 0-.85254.17509-1.15691.47938-.30518.30447-.47945.72667-.47945 1.15697 0 .4304.17427.8526.47945 1.1569.30437.3044.72655.4795 1.15691.4795.43036 0 .85255-.1752 1.15691-.4795ZM18.7365 9.24545c-.4304 0-.8526.17509-1.1569.47938-.3044.30447-.4795.72577-.4795 1.15697 0 .4304.1751.8526.4795 1.1569.3043.3044.7265.4795 1.1569.4795.4303 0 .8525-.1752 1.1569-.4795.3052-.3043.4794-.7265.4794-1.1569 0-.4303-.1742-.8525-.4794-1.15697-.3044-.30429-.7258-.47938-1.1569-.47938Z" fill="#490057"/></svg>
                <button className='chat__send' onClick={() => {newMessage()}}>
                    <svg  width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27 14.2642L0 0L3 12.2264L14.5 13.2453L16 14.2642H3L0 27L27 14.2642Z" fill="#490057"/>
                    </svg>
                </button>

            </div>
        </div>    
    )
}
export default Chat;