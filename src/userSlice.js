import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        login: (state,action) => {
            state.user = action.payload;
        },
        forgotPassword: (state) => {
            state.user = null;
        },
    },
});

export const {login} = userSlice.actions;

export const {forgotPassword} = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
