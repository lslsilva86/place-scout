import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Provider, useDispatch } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchBox from '../components/SearchBox';
import { fetchPlaces, setQuery } from '../redux/actions';

const mockStore = configureStore([]);

describe('SearchBox Component', () => {
  let store;
  let dispatch;

  beforeEach(() => {
    store = mockStore({});
    dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
  });

  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <SearchBox />
      </Provider>
    );

    expect(getByText('Place SCOUT')).toBeTruthy();
    expect(getByPlaceholderText('Search places')).toBeTruthy();
  });

  it('dispatches actions on input change', async () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchBox />
      </Provider>
    );

    fireEvent.changeText(getByPlaceholderText('Search places'), 'test place');
    await new Promise((resolve) => setTimeout(resolve, 300)); // Wait for debounce

    expect(dispatch).toHaveBeenCalledWith(setQuery('test place'));
    expect(dispatch).toHaveBeenCalledWith(fetchPlaces('test place'));
  });
});
