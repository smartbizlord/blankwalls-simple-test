import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const currentStepsSlice = createSlice({
    name: "currentSteps",
    initialState,
    reducers: {
        stall(state) {
            // 
        }
    },
})

export const { stall } = currentStepsSlice.actions;
export default currentStepsSlice.reducer;