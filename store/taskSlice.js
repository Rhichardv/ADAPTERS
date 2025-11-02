import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), ...action.payload });
    },
    deleteTask: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
    updateTask: (state, action) => {
      const index = state.findIndex((t) => t.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;