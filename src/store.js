import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './components/Filter/FilterSlice';
import { todoReducer } from './components/TodoList/TodoSlice';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    todoList: todoReducer,
  },
});

export default store;
