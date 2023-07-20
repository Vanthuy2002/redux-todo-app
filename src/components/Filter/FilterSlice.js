import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    search: '',
    status: 'All',
    priority: [],
  },
  reducers: {
    searchFilter: (state, actions) => {
      return { ...state, search: actions.payload };
    },
  },
});
