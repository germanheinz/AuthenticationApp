import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status:   'Not-Authenticated', // authenticated, not-authenticated
        uid:      null,
        email:    null,
        name:     null,
        photoUrl: null,
        error:    null
    },
    reducers: {
        login: (state, { payload }) => {
            console.log(payload);
            state.status   = 'Authenticated'; // authenticated, not-authenticated
            state.uid      = payload.uid;
            state.email    = payload.email;
            state.name     = payload.displayName;
            state.photoUrl = payload.photoUrl;
            state.error    = null;
        },
        logout: (state, { payload }) => {
            console.log(payload);
            state.status   = 'Not-Authenticated'; // authenticated, not-authenticated
            state.uid      = null;
            state.email    = null;
            state.name     = null;
            state.photoUrl = null;
            state.error    = payload;
        },
        verifyCredentials: (state) => {
            console.log("lalalom");
            state.status = 'Verifying...';
        },
    }
});

export const { login, logout, verifyCredentials } = authSlice.actions;