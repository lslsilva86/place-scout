import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchResults from '../components/SearchResults';
import { selectPlaces, selectQuery } from '../redux/selectors';
import { fetchPlaces, setSelectedPlace, fetchPlaceDetails } from '../redux/actions';

const mockStore = configureStore([]);

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('../redux/selectors', () => ({
  selectPlaces: jest.fn(),
  selectQuery: jest.fn(),
}));

jest.mock('../redux/actions', () => ({
  fetchPlaces: jest.fn(),
  setSelectedPlace: jest.fn(),
  fetchPlaceDetails: jest.fn(),
}));

describe('SearchResults Component', () => {
  let store;
  let dispatch;

  beforeEach(() => {
    store = mockStore({
      places: [],
      query: '',
    });
    dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
  });

  it('renders correctly with no places', () => {
    selectPlaces.mockReturnValue([]);
    selectQuery.mockReturnValue('');

    const { getByText } = render(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );

    expect(getByText('')).toBeTruthy();
  });

  it('renders places correctly', () => {
    const places = [
      { placeId: '1', text: { text: 'Place 1' } },
      { placeId: '2', text: { text: 'Place 2' } },
    ];

    selectPlaces.mockReturnValue(places);
    selectQuery.mockReturnValue('test');

    const { getByText } = render(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );

    expect(getByText('Place 1')).toBeTruthy();
    expect(getByText('Place 2')).toBeTruthy();
  });

  it('dispatches actions on item click', () => {
    const places = [{ placeId: '1', text: { text: 'Place 1' } }];

    selectPlaces.mockReturnValue(places);
    selectQuery.mockReturnValue('test');

    const { getByText } = render(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );

    fireEvent.press(getByText('Place 1'));

    expect(dispatch).toHaveBeenCalledWith(setSelectedPlace('1'));
    expect(dispatch).toHaveBeenCalledWith(fetchPlaceDetails('1'));
  });
});
