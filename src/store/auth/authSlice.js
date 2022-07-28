import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status:   'pending', // authenticated, not-authenticated
        uid:      null,
        email:    null,
        name:     null,
        photoUrl: null,
        error:    null
    },
    reducers: {
        login: (state, action) => {

        },
        logout: (state, payload) => {

        },
        verifyCredentials: (state) => {

        },
    }
});

export const { login, logout, verifyCredentials } = authSlice.actions;