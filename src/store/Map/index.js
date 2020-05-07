import { combineReducers } from '@reduxjs/toolkit';

import floorSlice from './floor.slice';

const rootReducer = combineReducers({
  [floorSlice.name]: floorSlice.reducer,
});

export default rootReducer;
