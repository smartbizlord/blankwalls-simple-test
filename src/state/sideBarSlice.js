import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const sideBarSlice = createSlice({
    name: "sideBar",
    initialState,
    reducers: {
        stall(state) {
            // 
        }
    },
})

export const { stall } = sideBarSlice.actions;
export default sideBarSlice.reducer;