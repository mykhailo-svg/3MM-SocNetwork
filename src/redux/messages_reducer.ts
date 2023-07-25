




type ContactType = {
    id: number
    name: string
    online:"" | "contact_online"

}

type messageType = {
    id: number;
    message: string;
    time: string;
    state: string;
    isUser: string;
}


let initialState = {



    Contacts: [

        { id: 1, name: "Emily Johnson", online: "" },
        { id: 2, name: "Daniel Williams", online: "contact_online" },
        { id: 2, name: "Daniel Williams", online: "contact_online" },
        { id: 2, name: "Daniel Williams", online: "contact_online" },
        { id: 2, name: "Daniel Williams", online: "contact_online" },
        { id: 2, name: "Daniel Williams", online: "contact_online" },
        { id: 3, name: "Olivia Brown", online: "" },
        { id: 4, name: "James Taylor", online: "" }
    ] as Array<ContactType>,

    New_messages: [
        { id: 1, message: "sdsdssd", time: "20:10", state: "Read", isUser: "User" },
    ] as Array<messageType>,




}


type ActionType = {

    type: "NEW-MESSAGE"
    messages_text: string



}

export type MessagesInitialStateType = typeof initialState;



const messagesReducer = (state: MessagesInitialStateType = initialState, action: ActionType): MessagesInitialStateType => {
  
    if (action.type === 'NEW-MESSAGE') {

        console.log("new-msg");

        let newMessage = {

            message: action.messages_text,
            time: "20:10",
            state: "notRead",
            isUser: "User",
            id: 1,

        }

        let state_copy = { ...state };

        state_copy.New_messages = [...state.New_messages];

  
        state_copy.New_messages.push(newMessage);
        return state_copy;

    }
    else {
        return state;
    }

}






type TypeNewMessageActionCreator = {
    type:'NEW-MESSAGE'
    messages_text:string
    
}

export const newMessageActionCreator = (message: string):TypeNewMessageActionCreator => {
    return ({ type: 'NEW-MESSAGE', messages_text: message })
}

export default messagesReducer;