import {configureStore} from '@reduxjs/toolkit';
import gbReducer from '../features/gb/gbSlice'
import authReducer from '../features/gb/authSlice'
import memberListReducer from '../features/gb/membersListSlice'

const store = configureStore({
    reducer: {
        app: gbReducer,
        auth: authReducer,
        member: memberListReducer
    }
})

export default store;