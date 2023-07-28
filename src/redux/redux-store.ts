//@ts-nocheck
import {combineReducers, legacy_createStore as createStore} from "redux";

import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import profileReducer from "./profile-reducer";
import messagesReducer from "./messages_reducer";
import peopleReducer from "./people-reducer";
import { reducer as contactsReducer } from "./slices/Messages/contacts_slice.slice";
import { reducer  as chatReducer} from "./slices/Messages/chat_slice.slice";
import { api } from "./api/api";


// let reducers = combineReducers({
//     Messages:messagesReducer,
//     Profile:profileReducer,
//     People:peopleReducer

// });


let reducers = combineReducers({
    contacts_reducer:contactsReducer,
    chat_reducer:chatReducer,
    people_reducer: peopleReducer,
    [api.reducerPath]:api.reducer,
});



// let store = createStore(reducers);

export const store = configureStore({
    reducer:reducers,
    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware)
    
})

console.log(store.getState());






  


export default store;