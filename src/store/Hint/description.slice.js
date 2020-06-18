import { createSlice } from '@reduxjs/toolkit';

const descriptionSlice = createSlice({
  name: 'description',
  initialState: {
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
    },
  },
});

export const { setDescription } = descriptionSlice.actions;

export default descriptionSlice;
