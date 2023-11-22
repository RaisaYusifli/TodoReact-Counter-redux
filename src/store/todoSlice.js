import { createSlice } from "@reduxjs/toolkit";

const todoSLice=createSlice({
    name:"todoList",
    initialState:[],
    reducers:{
        addTodoItem(state,action){
            return [...state,action.payload]
        },
        deleteTodoItem(state,action){
            return state.filter((item) => item.id !== action.payload.id)
        },
        editTodoItem(state,action){
            return (
                state.map((item) => {
                    if (item.id === action.payload.id) {
                      return action.payload;
                    }
                    return item;
                  })
            )
        }
    }
})

export const {addTodoItem,deleteTodoItem,editTodoItem}=todoSLice.actions;

export default todoSLice.reducer;

