import { RootState } from '../types';

export const selectPlaces = (state: RootState) => state.places;
export const selectLoading = (state: RootState) => state.loading;
export const selectError = (state: RootState) => state.error;
export const selectQuery = (state: RootState) => state.query;
export const selectSelectedPlace = (state: RootState) => state.selectedPlace;
export const selectSelectedPlaceDetails = (state: RootState) => state.selectedPlaceDetails;
