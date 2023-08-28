import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import AuthService from "../../../services/authService";
import { IUser } from "../../../@types/Auth/IUser";
import { ILogin, IRegistration } from "../../../@types/Auth/AuthPayload";

export const login = createAsyncThunk('auth/login', async ({email,password}:ILogin) => {
    
    const { data } = await AuthService.login(email, password);



    return data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
    alert('hi')
    const response = await AuthService.logout();
    
    



    
});


export const registration = createAsyncThunk('all-users/fetchAllUsers', async ({email,password}:IRegistration) => {
    alert('hi')
    const { data } = await AuthService.registration(email, password);



    return data;
});


const initialState = {
    Auth: false,
    User:{

    },
    isLoading: false,
    error: false,

};

export const signupSlice = createSlice({
    name: 'signup',
    initialState: initialState,
    reducers: {
        // setUsers: (state, action) => {
        //     state.People = [...state.People, ...action.payload];
        // }
    },
    extraReducers: builder => {




        builder.addCase(registration.pending, (state) => {

        })
        builder.addCase(registration.fulfilled, (state, action) => {
           

           
            localStorage.setItem('token' , action.payload.accesToken)


        })

        builder.addCase(registration.rejected, (state,action) => {
            console.log(action.error);
            
            
        })





        builder.addCase(logout.pending, (state) => {

        })
        builder.addCase(logout.fulfilled, (state, action) => {
           

            state.Auth = false;
            localStorage.removeItem('token');
            state.User = {} as IUser;


        })

        builder.addCase(logout.rejected, (state,action) => {
            console.log(action.error);
            
            
        })


        builder.addCase(login.pending, (state) => {
            alert('pending')
        })



        builder.addCase(login.fulfilled, (state, action) => {
            localStorage.setItem('token', action.payload.accesToken);

            state.Auth = true;


        })

        builder.addCase(login.rejected, (state,action) => {
            console.log(action.error);
            
            
        })
    }

});

export const { actions, reducer } = signupSlice;
