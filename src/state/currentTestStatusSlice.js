import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const currentTestStatusSlice = createSlice({
    name: "currentTestStatus",
    initialState,
    reducers: {
        stall(state) {
            // 
        }
    },
})

export const { stall } = currentTestStatusSlice.actions;
export default currentTestStatusSlice.reducer;