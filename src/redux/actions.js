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

const statusFilterChange = (payload) => {
  return {
    type: 'filter/statusFilter',
    payload,
  };
};

const priorityFilter = (priorities) => {
  return {
    type: 'filter/prioryti',
    payload: priorities,
  };
};

export { addTodo, startSearch, statusFilterChange, priorityFilter };
