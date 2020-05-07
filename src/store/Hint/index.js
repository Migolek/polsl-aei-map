import { combineReducers } from '@reduxjs/toolkit';

import positionSlice from './position.slice';

const rootReducer = combineReducers({
  [positionSlice.name]: positionSlice.reducer,
});

export default rootReducer;
