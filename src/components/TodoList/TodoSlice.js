import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todoList',
  initialState: [
    { id: 1, name: 'Learn Redux', isDone: true, priority: 'Medium' },
    { id: 2, name: 'learn reactjs', isDone: false, priority: 'High' },
    { id: 3, name: 'learn math', isDone: false, priority: 'Low' },
  ],
  reducers: {
    addTodo: (state, actions) => {
      state.push(actions.payload);
    },
    toggleTodo: (state, actions) => {
      const current = state.find((todo) => todo.id === actions.payload);
      current.isDone = !current.isDone;
    },
  },
});
export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
