import { createAction } from 'typesafe-actions';
import { PlacesResponse, PlaceDetails } from '../types';

export const fetchPlaces = createAction('FETCH_PLACES')<string>();
export const fetchPlacesSuccess = createAction('FETCH_PLACES_SUCCESS')<PlacesResponse>();
export const fetchPlacesFailure = createAction('FETCH_PLACES_FAILURE')<Error>();
export const setQuery = createAction('SET_QUERY')<string>();

export const fetchPlaceDetails = createAction('FETCH_PLACE_DETAILS')<string>();
export const fetchPlaceDetailsSuccess = createAction('FETCH_PLACE_DETAILS_SUCCESS')<PlaceDetails>();
export const fetchPlaceDetailsFailure = createAction('FETCH_PLACE_DETAILS_FAILURE')<Error>();
export const setSelectedPlace = createAction('SET_SELECTED_PLACE')<string>();
