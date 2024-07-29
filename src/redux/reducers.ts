import { ActionType, createReducer } from 'typesafe-actions';
import * as actions from './actions';
import { RootState } from '../types';

export type RootAction = ActionType<typeof actions>;

const initialState: RootState = {
  loading: false,
  places: [],
  error: null,
  query: '',
  selectedPlace: null,
  selectedPlaceDetails: null,
};

export const placesReducer = createReducer<RootState, RootAction>(initialState)
  .handleAction(actions.fetchPlaces, (state) => ({
    ...state,
    loading: true,
    error: null,
  }))
  .handleAction(actions.fetchPlacesSuccess, (state, action) => ({
    ...state,
    loading: false,
    places: action.payload.suggestions.map((suggestion) => suggestion.placePrediction),
    error: null,
  }))
  .handleAction(actions.fetchPlacesFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }))
  .handleAction(actions.setQuery, (state, action) => ({
    ...state,
    query: action.payload,
  }))
  .handleAction(actions.setSelectedPlace, (state, action) => {
    return {
      ...state,
      selectedPlace: action.payload,
    };
  })
  .handleAction(actions.fetchPlaceDetails, (state) => ({
    ...state,
    loading: true,
    error: null,
  }))
  .handleAction(actions.fetchPlaceDetailsSuccess, (state, action) => ({
    ...state,
    loading: false,
    selectedPlaceDetails: action.payload,
    error: null,
  }))
  .handleAction(actions.fetchPlaceDetailsFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }));
