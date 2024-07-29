import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Map from '../components/Map';
import { selectSelectedPlaceDetails } from '../redux/selectors';

const mockStore = configureStore([]);
const defaultCoordinates = {
  latitude: 3.1472732,
  longitude: 101.6995352,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('../redux/selectors', () => ({
  selectSelectedPlaceDetails: jest.fn(),
}));

describe('Map Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      selectedPlaceDetails: null,
    });
  });

  it('renders correctly with default coordinates', () => {
    selectSelectedPlaceDetails.mockReturnValue(null);

    const { getByTitle } = render(
      <Provider store={store}>
        <Map />
      </Provider>
    );

    expect(getByTitle('mapMarker').props.coordinate).toEqual(defaultCoordinates);
  });

  it('renders correctly with selected place coordinates', () => {
    const selectedPlaceDetails = {
      location: {
        latitude: 4.210484,
        longitude: 101.975766,
      },
      formattedAddress: 'Some address',
    };

    selectSelectedPlaceDetails.mockReturnValue(selectedPlaceDetails);

    const { getByTitle } = render(
      <Provider store={store}>
        <Map />
      </Provider>
    );

    expect(getByTitle('mapMarker').props.coordinate).toEqual({
      latitude: selectedPlaceDetails.location.latitude,
      longitude: selectedPlaceDetails.location.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  });
});
