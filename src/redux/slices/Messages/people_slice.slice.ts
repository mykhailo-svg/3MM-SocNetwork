//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";




let initialState = {

    People: [
        { id: 0, name: "People Name", occupation: "some occup", follow: "Follow" },
        { id: 1, name: "People Names", occupation: "some occup", follow: "Unfollow" }
    ]

}



export const peopleSlice = createSlice({
    name: 'chatSlice',
    initialState: initialState,
    reducers: {
        setUsers: (state, action) => {
           return (
            {
                ...state,
                People: [...state.People,...action.users]
            }
           )

            
        }
    }
})

    






export const {actions,reducer} = peopleSlice

