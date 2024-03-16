// reducer import
import TodoReducers from "./slices/todoSlice.js";
import {configureStore} from "@reduxjs/toolkit"
// creating stores
const Store = configureStore({
    reducer:{
        todo:TodoReducers
    },
    devTools: true,
});

export default Store;
