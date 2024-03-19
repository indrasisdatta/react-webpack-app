import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
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

export default todoSlice.reducer;
