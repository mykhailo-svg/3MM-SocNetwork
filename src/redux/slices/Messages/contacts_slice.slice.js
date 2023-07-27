import { createSlice } from "@reduxjs/toolkit";




let initialState = {



    Contacts: [
        { id: 1, name: "Emily Johnson", online: "" },
        { id: 1, name: "Emily Johnson", online: "" },
        { id: 2, name: "Daniel Williams", online: "contact_online" },
        { id: 2, name: "Daniel Williams", online: "contact_online" },
        { id: 2, name: "Daniel Williams", online: "contact_online" },
        { id: 2, name: "Daniel Williams", online: "contact_online" },
        { id: 2, name: "Daniel Williams", online: "contact_online" },
        { id: 3, name: "Olivia Brown", online: "" },
        { id: 4, name: "James Taylor", online: "" }
    ],

}



export const contactsSlice = createSlice({
    name: 'ContactsSlice',
    initialState: initialState,
 
})


    






export const {actions,reducer} = contactsSlice

