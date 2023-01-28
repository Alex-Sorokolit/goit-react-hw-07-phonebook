import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { status: '' },
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});

// Генератори екшенів
export const { setFilter } = filterSlice.actions;
// Редюсер слайсу
export const filterReducer = filterSlice.reducer;
