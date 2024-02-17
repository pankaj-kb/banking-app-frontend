import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: false,
        userData: null,
        role: null,
    },
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
            state.role = action.payload;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            state.role = null;
        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer