import { createSlice } from "@reduxjs/toolkit";




let initialState = {



    New_messages:[
        {id:1, message:"sdsdssd", time:"20:10",state:"Read", isUser:"User" },
    ],

}



export const chatSlice = createSlice({
    name: 'chatSlice',
    initialState: initialState,
    reducers: {
        addMessage: (state, action) => {

            let newMessage = {

                message: action.payload.messages_text,
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








export const {actions,reducer} = chatSlice

