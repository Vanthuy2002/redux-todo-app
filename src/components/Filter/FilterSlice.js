const initialState = {
  search: '',
  status: 'All',
  priority: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filter/ChangeSearch':
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};

export { filterReducer };
