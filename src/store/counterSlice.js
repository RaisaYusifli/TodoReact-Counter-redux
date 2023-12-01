import { createListenerMiddleware, createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:0,
    reducers:{
        increment(state){
            return state+1
        },
        decrement(state){
            return state-1
        },
        incrementByX(state,action){
            return state+action.payload
        }
    }
})

export const {increment,decrement,incrementByX}=counterSlice.actions;

export const incrementMiddleListener=createListenerMiddleware();

incrementMiddleListener.startListening({
    actionCreator:increment,
    effect:(action,listenerApi)=>{
        console.log(action);
    }
})

export default counterSlice.reducer;