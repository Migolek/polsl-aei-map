import { combineReducers } from '@reduxjs/toolkit';

import floorSlice from './floor.slice';
import optionsSlice from './options.slice';

const rootReducer = combineReducers({
  [floorSlice.name]: floorSlice.reducer,
  [optionsSlice.name]: optionsSlice.reducer,
});

export default rootReducer;
