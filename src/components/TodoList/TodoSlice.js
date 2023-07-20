const initialState = [
  { id: 1, name: 'Learn Redux', isDone: false, priority: 'Medium' },
];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todoList/Add':
      return [...state, action.payload];

    default:
      return state;
  }
};

export { todoReducer };
