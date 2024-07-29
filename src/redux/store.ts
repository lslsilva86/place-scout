import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';
import { placesReducer } from './reducers';
import { RootAction, RootState } from '../types';

const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>();

export const store = createStore(placesReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);
