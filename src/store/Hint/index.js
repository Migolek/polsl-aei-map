import { combineReducers } from '@reduxjs/toolkit';

import descriptionSlice from './description.slice';
import positionSlice from './position.slice';

const rootReducer = combineReducers({
  [positionSlice.name]: positionSlice.reducer,
  [descriptionSlice.name]: descriptionSlice.reducer,
});

export default rootReducer;
