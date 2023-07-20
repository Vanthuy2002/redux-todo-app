const initialState = [
  { id: 1, name: 'Learn Redux', isDone: true, priority: 'Medium' },
  { id: 2, name: 'learn reactjs', isDone: false, priority: 'High' },
  { id: 3, name: 'learn math', isDone: false, priority: 'Low' },
];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todoList/Add':
      return [...state, action.payload];

    case 'todo/Donetask':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );

    default:
      return state;
  }
};

export { todoReducer };
