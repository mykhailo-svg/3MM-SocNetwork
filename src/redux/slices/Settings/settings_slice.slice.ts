
import { PayloadAction, createSlice } from "@reduxjs/toolkit";




let initialState = {
    themeIsDark:false,
}
type TypeSettingInitialState = typeof initialState;

export const settingsSlice = createSlice({
    name: 'settingsSlice',
    initialState: initialState,
    reducers: {
        toggleTheme: (state:TypeSettingInitialState) => {
            
            state.themeIsDark = !state.themeIsDark;

            return state
       

        }
    }
})








export const {actions,reducer} = settingsSlice

