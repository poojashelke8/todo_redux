import {configureStore} from "@reduxjs/toolkit";
import taskReducer from "./Slices/TaskSlice"

const store = configureStore({
    reducer:{
        tasks:taskReducer
    }
})

export default store;