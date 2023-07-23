import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages_reducer";
import peopleReducer from "./people-reducer";


let reducers = combineReducers({
    Messages:messagesReducer,
    Profile:profileReducer,
    People:peopleReducer

});



let store = createStore(reducers);



  


export default store;