import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk('all-users/fetchAllUsers', async (step:number) => {
    const { data } = await axios.get(`http://localhost:3001/all-users?step=${step}`);
    
    return data;
});

const initialState = {
    People: [
        { _id: 0, name: "People Name", occupation: "some occup", follow: "Follow" },
        { _id: 1, name: "People Names", occupation: "some occup", follow: "Unfollow" },
        { _id: 3, name: "People Name", occupation: "some occup", follow: "Follow" }
    ],
    isLoading:false,
    error:false,
    
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

        builder.addCase(fetchUsers.pending, (state)=>{
            console.log("is loading")
            state.isLoading = true;
        })
        
        

        builder.addCase(fetchUsers.fulfilled, (state,action)=>{
            console.log("got data")
            // alert(action.payload)
            
            return(
                {
                    ...state,
                    isLoading:false,
                    error:false,
                     People: [...state.People,...action.payload]
                }
            )
        })

        builder.addCase(fetchUsers.rejected, state=>{
            state.error = true;
            state.isLoading = false;
        })
    }
});

export const { actions, reducer } = peopleSlice;
