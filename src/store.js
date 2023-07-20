import { configureStore } from '@reduxjs/toolkit';
import FilterSlice from './components/Filter/FilterSlice';
import TodoSlice from './components/TodoList/TodoSlice';

const store = configureStore({
  reducer: {
    filter: FilterSlice,
    todoList: TodoSlice,
  },
});

export default store;
