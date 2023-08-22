import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const checkEmailDublicate = createAsyncThunk('all-users/fetchAllUsers', async (step:number) => {
    const { data } = await axios.get(`http://localhost:3001/all-users?step=${step}`);
    
    return data;
});

const initialState = {
    Dublicate: false,
    isLoading:false,
    error:false,
    
};

export const signupSlice = createSlice({
    name: 'signup',
    initialState: initialState,
    reducers: {
        // setUsers: (state, action) => {
        //     state.People = [...state.People, ...action.payload];
        // }
    },
    extraReducers: builder =>{

        builder.addCase(checkEmailDublicate.pending, (state)=>{
            console.log("is loading")
            state.isLoading = true;
        })
        
        

        builder.addCase(checkEmailDublicate.fulfilled, (state,action)=>{
            console.log("got data")
            // alert(action.payload)
            
            return(
                {
                    ...state,
                    Dublicate:action.payload
                }
            )
        })

        builder.addCase(checkEmailDublicate.rejected, state=>{
            state.error = true;
            state.isLoading = false;
        })
    }
});

export const { actions, reducer } = signupSlice;
