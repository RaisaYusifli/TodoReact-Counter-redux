import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import counterReducer,{incrementMiddleListener} from "./counterSlice";
import { myMiddleWare } from "./middleware/mid";

const store=configureStore({
    reducer:{
        todos:todoReducer,
        counter:counterReducer
    },
    middleware:(getDefaultMiddleware)=>{
       return getDefaultMiddleware().concat(myMiddleWare,incrementMiddleListener.middleware)
    }
})

export default store;