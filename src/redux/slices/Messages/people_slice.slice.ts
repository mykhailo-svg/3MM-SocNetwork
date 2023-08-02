import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('all-users/fetchAllUsers', async () => {
    const { data } = await axios.get('http://localhost:3001/all-users');
    return data;
});

const initialState = {
    People: [
        { id: 0, name: "People Name", occupation: "some occup", follow: "Follow" },
        { id: 1, name: "People Names", occupation: "some occup", follow: "Unfollow" }
    ],
    status: 'l'
};

export const peopleSlice = createSlice({
    name: 'all-users',
    initialState: initialState,
    reducers: {
        setUsers: (state, action) => {
            state.People = [...state.People, ...action.payload];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                alert("sending...");
                state.People = [];
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                alert(action.payload);
                state.People = action.payload;
            })
            .addCase(fetchUsers.rejected, (state) => {
                alert("rejected!");
            });
    }
});

export const { actions, reducer } = peopleSlice;
