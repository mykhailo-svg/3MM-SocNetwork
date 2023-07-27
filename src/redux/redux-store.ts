import {combineReducers, legacy_createStore as createStore} from "redux";

import {configureStore} from '@reduxjs/toolkit';

import profileReducer from "./profile-reducer";
import messagesReducer from "./messages_reducer";
import peopleReducer from "./people-reducer";


let reducers = combineReducers({
    Messages:messagesReducer,
    Profile:profileReducer,
    People:peopleReducer

});




let store = configureStore({
    reducer:reducers
});



  


export default store;