import { createSlice } from '@reduxjs/toolkit';

const descriptionSlice = createSlice({
  name: 'description',
  initialState: {
    id: null,
    name: null,
    category: null,
    floor: null,
    opening_hours: null,
  },
  reducers: {
    setDescription: (state, action) => {
      state = {
        ...action.payload,
      };
    },
  },
});

export const { setDescription } = descriptionSlice.actions;

export default descriptionSlice;
