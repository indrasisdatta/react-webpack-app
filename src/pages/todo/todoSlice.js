import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  error: null,
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  try {
    const resp = await fetch("https://dummyjson.com/todos");
    const data = await resp.json();
    return data;
  } catch (e) {
    return e;
  }
});

/* createSlice auto-generates action types and action creators, based on the names of reducer functions eg. addTodo */
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todoData = current(state.data);
      console.log("Action Payload", todoData, action.payload);
      state.data.todos.unshift(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.payload;
      });
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
