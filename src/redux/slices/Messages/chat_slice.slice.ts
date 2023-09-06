import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type newMessagePayload = {
  messages_text: string | undefined;
  type: "NEW-MESSAGE";
};
type newMessage = {
  message: string | undefined;
  time: string;
  state: string;
  isUser: string;
  id: number;
};
const initialState = {
  New_messages: [
    { id: 1, message: "sdsdssd", time: "20:10", state: "Read", isUser: "User" },
  ],
};
export const chatSlice = createSlice({
  name: "chatSlice",
  initialState: initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<newMessagePayload>) => {
      const newMessage: newMessage = {
        message: action.payload.messages_text,
        time: "20:10",
        state: "notRead",
        isUser: "User",
        id: 1,
      };

      const state_copy = { ...state };

      state_copy.New_messages = [...state.New_messages];

      state_copy.New_messages.push(newMessage);
      return state_copy;
    },
  },
});

export const { actions, reducer } = chatSlice;
