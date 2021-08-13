import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("todo/getTodo", async () => {
  return axios.get("http://localhost:7777/task");
});

export const addTodos = createAsyncThunk("todo/addTodo", async (todo) => {
  const result = await axios.post("http://localhost:7777/task", todo);
  return result.data;
});

const todoSlice = createSlice({
  name: "todos",
  // initialState: [],
  initialState: {
    items: [],
    status: null,
  },
  reducers: {
    addTodo: (state, action) => [...state, action.payload],
    deleteTodo: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
  },
  extraReducers: {
    [getTodos.pending]: (state, action) => {
      state.status = "loading";
    },
    [getTodos.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [getTodos.rejected]: (state, action) => {
      state.status = "error";
    },
    [addTodos.pending]: (state, action) => {
      state.status = "loading";
    },
    [addTodos.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = [...state.items.data, action.payload];
    },
    [addTodos.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
