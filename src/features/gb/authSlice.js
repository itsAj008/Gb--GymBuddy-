
import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";

const initialState = {
    isLoggedIn : false,
    isAdminLoggedIn : false,
    userName : ""
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        setLoggedIn : (state) => {
            state.isLoggedIn = true
        },
        setLoggedOut : (state) => {
            state.isLoggedIn = false
            redirect('/')
        },
        setAdminLoggedIn : (state) => {
            state.isAdminLoggedIn = true
        },
        setAdminLoggedOut : (state) => {
            state.isAdminLoggedIn = false
            redirect('/')
        },
        setUser : (state, action) => {
            state.userName = action.payload
        }
    }
});


export const {setLoggedIn,setLoggedOut,setUser,setAdminLoggedIn,setAdminLoggedOut} = authSlice.actions

export default authSlice.reducer