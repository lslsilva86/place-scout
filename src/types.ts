import { ActionType } from 'typesafe-actions';
import * as actions from '../src/redux/actions';

export type RootAction = ActionType<typeof actions>;

interface PlacePrediction {
  placePrediction: Place;
}

export interface Place {
  place: string;
  placeId: string;
  text: {
    text: string;
    matches: {
      endOffset: number;
    }[];
  };
  structuredFormat: {
    mainText: {
      text: string;
      matches: {
        endOffset: number;
      }[];
    };
    secondaryText: {
      text: string;
    };
  };
  types: string[];
}

export interface PlaceDetails {
  formattedAddress: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface PlacesResponse {
  suggestions: PlacePrediction[];
  status: string;
}

export interface RootState {
  places: Place[];
  loading: boolean;
  error: Error | null;
  query: string;
  selectedPlace: string | null;
  selectedPlaceDetails: PlaceDetails | null;
}

export interface ExtraManifest {
  extra?: {
    googleApiKey: string;
    googleApiUrl: string;
  };
}
