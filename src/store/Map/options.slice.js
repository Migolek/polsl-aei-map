import { createSlice } from '@reduxjs/toolkit';

const optionsSlice = createSlice({
  name: 'options',
  initialState: {
    selectedOptions: ['Pokoje', 'Aule', 'Ludzie', 'Inne'],
  },
  reducers: {
    updateSelectedOptions: (state, action) => {
      state.selectedOptions = action.payload;
    },
  },
});

export const { updateSelectedOptions } = optionsSlice.actions;

export default optionsSlice;
