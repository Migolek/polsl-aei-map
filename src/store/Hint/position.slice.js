import { createSlice } from '@reduxjs/toolkit';

const positionSlice = createSlice({
  name: 'position',
  initialState: {
    x: null,
    y: null,
  },
  reducers: {
    setPosition: (state, action) => {
      state.x = action.payload.x;
      state.y = action.payload.y;
    },
  },
});

export const { setPosition } = positionSlice.actions;

export default positionSlice;
