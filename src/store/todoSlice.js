import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { response } from "express";

const todoSLice = createSlice({
  name: "todoList",
  initialState: {
    list: [],
    status: "IDLE",
    error: null,
  },
  reducers: {
    addTodoItem(state, action) {
      return [...state, action.payload];
    },
    deleteTodoItem(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    editTodoItem(state, action) {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(todoPost.fulfilled, (state, action) => {
        return {
          list: [...state.list, action.payload],
          status: "SUCCESS",
          error: null,
        };
      })
      .addCase(todoPost.pending, (state, _) => {
        return {
          list: state.list,
          status: "PENDING",
          error: null,
        };
      })
      .addCase(todoPost.rejected, (state, action) => {
        return {
          list: state.list,
          status: "ERROR",
          error: action.payload,
        };
      });

    builder
      .addCase(todoDelete.fulfilled, (state, action) => {
        console.log(action.payload);
        return {
          list: state.list.filter((item) => item.id !== Number(action.payload)),
          status: "SUCCESS",
          error: null,
        };
      })
      .addCase(todoDelete.pending, (state, action) => {
        return {
          list: state.list,
          status: "PENDING",
          error: null,
        };
      })
      .addCase(todoDelete.rejected, (state, action) => {
        return {
          list: state.list,
          status: "ERROR",
          error: action.payload,
        };
      });

    builder
      .addCase(todoApi.fulfilled, (_, action) => {
        return {
          list: action.payload,
          status: "SUCCESS",
          error: null,
        };
      })
      .addCase(todoApi.pending, (state, action) => {
        return {
          list: state.list,
          status: "PENDING",
          error: null,
        };
      })
      .addCase(todoApi.rejected, (state, action) => {
        return {
          list: state.list,
          status: "ERROR",
          error: action.payload,
        };
      });
  },
});

//second way
// export const addTodoItem = createAction("todoList/addTodoItem", (payload) => ({
//   payload,
// }));
// export const deleteTodoItem = createAction(
//   "todoList/deleteTodoItem",
//   (payload) => ({ payload })
// );
// export const editTodoItem = createAction(
//   "todoList/editTodoItem",
//   (payload) => ({ payload })
// );

// const reducer = createReducer([], (builder) => {
//   builder
//     .addCase(addTodoItem, (state, action) => {
//       state.push(action.payload);
//     })
//     .addCase(deleteTodoItem, (state, action) => {
//       return state.filter((item) => item.id !== action.payload.id);
//     })
//     .addCase(editTodoItem, (state, action) => {
//       return state.map((item) => {
//         if (item.id === action.payload.id) {
//           return action.payload;
//         }
//         return item;
//       });
//     });
// });
// export default reducer;

export const todoApi = createAsyncThunk(
  "todos",
  async ({ rejectWithValue }) => {
    const res = await fetch("http://localhost:3001/todos");
    const data = await res.json();

    if (!res.ok) {
      rejectWithValue(res);
    }
    return data;
  }
);

export const todoPost = createAsyncThunk(
  "todoPost",
  async (payload, thunkAPI) => {
    const res = await fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = res.json();
    if (!res.ok) {
      thunkAPI.rejectWithValue(data);
    }
    return data;
  }
);
export const todoDelete = createAsyncThunk(
  "todoDelete",
  async (id, thunkAPI) => {
    try {
      console.log(id);
      const res = await fetch("http://localhost:3001/todos/" + id, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      });

      const data = res.json();
      if (!res.ok) {
        thunkAPI.rejectWithValue(data);
      }
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(null);
    }
  }
);

export const { addTodoItem, deleteTodoItem, editTodoItem } = todoSLice.actions;

export default todoSLice.reducer;
