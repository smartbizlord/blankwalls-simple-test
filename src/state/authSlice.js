import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        stall(state) {
            // 
        }
    },
})

export const { stall } = authSlice.actions;
export default authSlice.reducer;