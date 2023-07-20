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
      state.search = actions.payload;
    },
    statusFilter: (state, actions) => {
      state.status = actions.payload;
    },
    filterPri: (state, actions) => {
      state.priority = actions.payload;
    },
  },
});

export const { filterPri, searchFilter, statusFilter } = filterSlice.actions;
export default filterSlice.reducer;
