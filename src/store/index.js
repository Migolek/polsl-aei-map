import { combineReducers, configureStore } from '@reduxjs/toolkit';

import hintReducer from './Hint';
import mapReducer from './Map';

const rootReducer = combineReducers({
  hint: hintReducer,
  map: mapReducer,
});

export default configureStore({
  reducer: rootReducer,
});
