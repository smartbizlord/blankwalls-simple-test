import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import currentStepsReducer from "./currentStepsSlice";
import currentTestStatusReducer from "./currentTestStatusSlice";
import exampleTestsReducer from "./exampleTestsSlice";
import sideBarReducer from "./sideBarSlice";



export const store = configureStore({
    reducer: {
      auth: authReducer,
      currentSteps: currentStepsReducer,
      currentTestStatus: currentTestStatusReducer,
      exampleTests: exampleTestsReducer,
      sideBar: sideBarReducer,
    },
});

export default store;