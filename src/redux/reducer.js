import { filterReducer } from '../components/Filter/FilterSlice';
import { todoReducer } from '../components/TodoList/TodoSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  filter: filterReducer,
  todoList: todoReducer,
});

export default rootReducer;
