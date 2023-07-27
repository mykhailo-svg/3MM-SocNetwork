import {combineReducers, legacy_createStore as createStore} from "redux";

import {configureStore} from '@reduxjs/toolkit';

import profileReducer from "./profile-reducer";
import messagesReducer from "./messages_reducer";
import peopleReducer from "./people-reducer";
import { reducer as contactsReducer } from "./slices/Messages/contacts_slice.slice";
import { reducer  as chatReducer} from "./slices/Messages/chat_slice.slice";


// let reducers = combineReducers({
//     Messages:messagesReducer,
//     Profile:profileReducer,
//     People:peopleReducer

// });


let reducers = combineReducers({
    contacts_reducer:contactsReducer,
    chat_reducer:chatReducer
});



// let store = createStore(reducers);

export const store = configureStore({
    reducer:reducers,
    
})
debugger;





  


export default store;