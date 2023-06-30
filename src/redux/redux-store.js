import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages_reducer";


let reducers = combineReducers({
    Messages:messagesReducer,
    // Profile:profileReducer,

});

let store = createStore(reducers);

export default store;