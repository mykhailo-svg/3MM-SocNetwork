import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Contacts: [
    { id: 1, name: "Emily Johnson", online: "" },
    { id: 1, name: "Emily Johnson", online: "" },
    { id: 2, name: "Daniel Williams", online: "contact_online" },
    { id: 2, name: "Daniel Williams", online: "contact_online" },
    { id: 2, name: "Daniel Williams", online: "contact_online" },
    { id: 2, name: "Daniel Williams", online: "contact_online" },
    { id: 2, name: "Daniel Williams", online: "contact_online" },
    { id: 3, name: "Olivia Brown", online: "" },
    { id: 4, name: "James Taylor", online: "" },
  ],
};

export const contactsSlice = createSlice({
  name: "ContactsSlice",
  initialState: initialState,
  reducers: {},
});

export const { actions, reducer } = contactsSlice;
