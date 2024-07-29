import axios from 'axios';
import { combineEpics, Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, switchMap, filter } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import * as actions from './actions';
import { RootAction, RootState, PlacesResponse, PlaceDetails } from '../types';
import { GOOGLE_API_KEY, GOOGLE_API_URL } from '../../config';

const fetchPlacesEpic: Epic<RootAction, RootAction, RootState> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(actions.fetchPlaces)),
    switchMap((action) => {
      const requestBody = {
        input: action.payload,
      };

      return from(
        axios.post<PlacesResponse>(`${GOOGLE_API_URL}/places:autocomplete`, requestBody, {
          headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': GOOGLE_API_KEY,
          },
        })
      ).pipe(
        switchMap((response) => of(actions.fetchPlacesSuccess(response.data))),
        catchError((error) => of(actions.fetchPlacesFailure(error)))
      );
    })
  );

const fetchPlaceDetailsEpic: Epic<RootAction, RootAction, RootState> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(actions.fetchPlaceDetails)),
    switchMap((action) => {
      const placeId = action.payload;
      return from(
        axios.get<PlaceDetails>(`${GOOGLE_API_URL}/places/${placeId}`, {
          headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': GOOGLE_API_KEY,
            'X-Goog-FieldMask': 'id,displayName,formattedAddress,plusCode,location',
          },
        })
      ).pipe(
        switchMap((response) => {
          const { latitude, longitude } = response.data.location;
          const { formattedAddress } = response.data;
          return of(
            actions.fetchPlaceDetailsSuccess({
              formattedAddress,
              location: {
                latitude: latitude,
                longitude: longitude,
              },
            })
          );
        }),
        catchError((error) => {
          console.error('Place Details API Error:', error);
          return of(actions.fetchPlaceDetailsFailure(error));
        })
      );
    })
  );

export const rootEpic = combineEpics(fetchPlacesEpic, fetchPlaceDetailsEpic);
