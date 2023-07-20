const initialState = {
  filter: {
    search: '',
    status: 'All',
    priority: [],
  },
  todoList: [{ id: 1, name: 'Learn Redux', isDone: false, priority: 'Medium' }],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todoList/Add':
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case 'filter/ChangeSearch':
      return {
        ...state,
        filter: { ...state.filter, search: action.payload },
      };

    default:
      return state;
  }
};

export default rootReducer;
