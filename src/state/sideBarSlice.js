import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
    location: "Test Cases"
};

const sideBarSlice = createSlice({
    name: "sideBar",
    initialState,
    reducers: {
        stall(state) {
            // 
        },
        changeLocation(state, action) {
            console.log(state, "state")
            console.log(action, "action")
            state.location = action.payload
        }
    },
})

export const { stall, changeLocation } = sideBarSlice.actions;
export const useCurrentLocation = () => useSelector(state => state.sideBar.location)
export default sideBarSlice.reducer;