import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getTodos = createAsyncThunk('todo/getTodos', async () => {
  const res = await fetch('/api/todos');
  const data = await res.json();
  return data?.todos;
});

export const addNewTodos = createAsyncThunk(
  'todo/addNewTodos',
  async (data) => {
    const res = await fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const newData = await res.json();
    return newData.todos;
  }
);

export const updateTodos = createAsyncThunk(
  'todos/updateTodos',
  async (update) => {
    const res = await fetch('/api/update', {
      method: 'POST',
      body: JSON.stringify(update),
    });
    const data = await res.json();
    return data.todos;
  }
);

const todoSlice = createSlice({
  name: 'todoList',
  initialState: {
    status: null,
    todos: [],
  },
  reducers: {
    addTodo: (state, actions) => {
      state.todos.push(actions.payload);
    },
    toggleTodo: (state, actions) => {
      const current = state.todos.find((todo) => todo.id === actions.payload);
      current.isDone = !current.isDone;
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(getTodos.fulfilled, (state, actions) => {
        state.todos = actions.payload;
        state.status = null;
      })
      .addCase(getTodos.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(addNewTodos.fulfilled, (state, actions) => {
        state.todos.push(actions.payload);
      })
      .addCase(updateTodos.fulfilled, (state, actions) => {
        let finded = state.todos.find((todo) => todo.id === actions.payload);
        if (finded) {
          finded.isDone = !finded.isDone;
        }
      });
  },
});
export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;

export const addTodos = (todo) => {
  return function addTodoThunk(dispatch, getState) {
    console.log('🚀', getState());
    console.log(todo);
  };
};
