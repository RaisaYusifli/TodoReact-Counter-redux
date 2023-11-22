import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import counterReducer from "./counterSlice";

const store=configureStore({
    reducer:{
        todos:todoReducer,
        counter:counterReducer
    }
})

export default store;