const addTodo = (payload) => {
  return {
    type: 'todoList/Add',
    payload,
  };
};

const startSearch = (payload) => {
  return {
    type: 'filter/ChangeSearch',
    payload,
  };
};

export { addTodo, startSearch };
