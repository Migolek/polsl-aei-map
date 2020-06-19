import { createSlice } from '@reduxjs/toolkit';

const descriptionSlice = createSlice({
  name: 'description',
  initialState: {
    isVisible: false,
    info: {
      id: null,
      name: null,
      category: null,
      floor: null,
      openingHours: null,
    },
  },
  reducers: {
    setDescription: (state, action) => {
      state.info = { ...action.payload };
      state.isVisible = true;
    },
    removeDescription: state => {
      state.info = {};
      state.isVisible = false;
    },
  },
});

export const { setDescription, removeDescription } = descriptionSlice.actions;

export default descriptionSlice;
