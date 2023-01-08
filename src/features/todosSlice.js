import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todosSlice",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { title, description } = action.payload;

      const todo = {
        id: Date.now(),
        title,
        description,
        completed: false,
      };

      return [...state, todo];
    },
    todoDelete: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload);
      state.splice(index, 1);
    },
    todoCompleted: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload);
      let changeTodo = state[index];
      changeTodo.completed = !changeTodo.completed;
      state[index] = { ...state[index], ...changeTodo };
    },
    todoUpdate: (state, action) => {
        let index = state.findIndex(({ id }) => id === action.payload.id);       
        state[index] = { ...state[index], ...action.payload };
      },
  },
});

export const { addTodo, todoDelete, todoCompleted,todoUpdate } = todosSlice.actions;

export default todosSlice.reducer;
