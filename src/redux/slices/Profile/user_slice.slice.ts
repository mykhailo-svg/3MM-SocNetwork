import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserById = createAsyncThunk(
  "user-view/fetchUserById",
  async (id: string | undefined) => {
    const { data } = await axios.get(`http://localhost:3001/get-user/${id}`);

    return data;
  }
);

const initialState = {
  About: {
    Name: "viewsds user",
    Gender: "male",
    Occupation: "view occupation",
    Mail: "12",
    Born: "sd",
    Phone:'+3078078070',
    Place:'some place'
  },
  isLoading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user-view",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.pending, (state) => {
      console.log("is loading");
      state.isLoading = true;
    });

    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      console.log("got data");
      // alert(action.payload)

      state.About.Name = action.payload.name;
      state.About.Occupation = action.payload.occupation;
    });

    builder.addCase(fetchUserById.rejected, (state) => {
      state.error = true;
      state.isLoading = false;
    });
  },
});

export const { actions, reducer } = userSlice;
