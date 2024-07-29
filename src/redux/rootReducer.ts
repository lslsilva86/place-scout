import { combineReducers } from 'redux';
import { placesReducer } from './reducers';

const rootReducer = combineReducers({
  places: placesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
