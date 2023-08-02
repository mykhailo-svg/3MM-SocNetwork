import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk('all-users/fetchAllUsers', async () => {
    const { data } = await axios.get('http://localhost:3001/all-users');
    return data;
});

const initialState = {
    People: [
        { id: 0, name: "People Name", occupation: "some occup", follow: "Follow" },
        { id: 1, name: "People Names", occupation: "some occup", follow: "Unfollow" },
        { id: 3, name: "People Name", occupation: "some occup", follow: "Follow" }
    ],
    
};

export const peopleSlice = createSlice({
    name: 'all-users',
    initialState: initialState,
    reducers: {
        // setUsers: (state, action) => {
        //     state.People = [...state.People, ...action.payload];
        // }
    },
    extraReducers: builder =>{

        builder.addCase(fetchUsers.pending, state=>{
            console.log("is loading")
        })
        
        

        builder.addCase(fetchUsers.fulfilled, (state,action)=>{
            console.log("got data")
            alert(action.payload)
            return(
                {
                    ...state,
                     People: [...state.People,...action.payload]
                }
            )
        })

        builder.addCase(fetchUsers.rejected, state=>{
            console.log("rejected")
        })
    }
});

export const { actions, reducer } = peopleSlice;
