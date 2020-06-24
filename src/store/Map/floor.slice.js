import { createSlice } from '@reduxjs/toolkit';

const floorSlice = createSlice({
  name: 'floor',
  initialState: {
    currentFloor: 0,
  },
  reducers: {
    setUpperFloor: state => {
      if (state.currentFloor + 1 > 9) {
        state.currentFloor = 9;
      } else {
        state.currentFloor = state.currentFloor + 1;
      }
    },
    setLowerFloor: state => {
      if (state.currentFloor - 1 < 0) {
        state.currentFloor = 0;
      } else {
        state.currentFloor = state.currentFloor - 1;
      }
    },
    setFloor: (state, action) => {
      state.currentFloor = action.payload;
    },
  },
});

export const { setUpperFloor, setLowerFloor, setFloor } = floorSlice.actions;

export default floorSlice;
