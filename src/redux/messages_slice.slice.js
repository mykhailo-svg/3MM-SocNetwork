import { createSlice } from "@reduxjs/toolkit";




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
    ],

    New_messages: [
        { id: 1, message: "sdsdssd", time: "20:10", state: "Read", isUser: "User" },
    ],
}



export const messagesSlice = createSlice({
    name: 'messages',
    initialState: initialState,
    reducers: {
        addMessage: (state, action) => {
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
    }
})

const messagesReducer = (state = initialState, action) => {

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





export const {actions,reducer} = messagesSlice

