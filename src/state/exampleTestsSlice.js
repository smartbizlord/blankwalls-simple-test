import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const exampleTestsSlice = createSlice({
    name: "exampleTests",
    initialState,
    reducers: {
        stall(state) {
            // 
        }
    },
})

export const { stall } = exampleTestsSlice.actions;
export default exampleTestsSlice.reducer;