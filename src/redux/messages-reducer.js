const messagesReducer = (state, action) => {
    if (action.type === 'NEW-MESSAGE') {

        console.log("new-msg");

        let newMessage = {

            message: action.messages_text,
            time: "20:10",
            state: "notRead",
            isUser: "User",
        }
        state.New_messages.push(newMessage);
        return state;
    }
}

export default messagesReducer;