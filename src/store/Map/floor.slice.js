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
  },
});

export const { setUpperFloor, setLowerFloor } = floorSlice.actions;

export default floorSlice;
