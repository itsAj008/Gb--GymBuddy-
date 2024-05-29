import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginPage: false,
    signupPage: false,
    aboutUsData: "hi",
};

const gbSlice = createSlice({
    name: 'gb',
    initialState,
    reducers: {
        showLoginPage: (state) => {
            state.loginPage = true;
            state.signupPage = false;
        },
        closeLoginPage: (state) => {
            state.loginPage = false;
        },
        showSignupPage: (state) => {
            state.loginPage = false;
            state.signupPage = true;
        },
        closeSignupPage: (state) => {
            state.signupPage = false;
        },
        changeAboutUsData: (state, action) => {
            state.aboutUsData = action.payload;
        },
    },
});

export const {
    showLoginPage,
    closeLoginPage,
    showSignupPage,
    closeSignupPage,
    changeAboutUsData,
} = gbSlice.actions;

export default gbSlice.reducer;
