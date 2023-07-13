
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


    const messagesReducer = (state = initialState, action) => {
        debugger;
        if (action.type === 'NEW-MESSAGE') {

            console.log("new-msg");

            let newMessage = {

                message: action.messages_text,
                time: "20:10",
                state: "notRead",
                isUser: "User",
            }
            state.New_messages.push(newMessage);
            
        }

        return state;
    }

    debugger;

    export const newMessageActionCreator = (message) =>{
        return({type:'NEW-MESSAGE',messages_text:message})
    }

export default messagesReducer;