import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { List } from '@ant-design/react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlaces, setSelectedPlace, fetchPlaceDetails } from '../redux/actions';
import { selectPlaces, selectError, selectQuery } from '../redux/selectors';
import withLogging from './HOC/withLogging';

const SearchResults = () => {
  const dispatch = useDispatch();
  const places = useSelector(selectPlaces);
  const query = useSelector(selectQuery);

  useEffect(() => {
    if (query) {
      dispatch(fetchPlaces(query));
    }
  }, [dispatch, query]);

  const handleItemClick = (placeId: string) => {
    dispatch(setSelectedPlace(placeId));
    dispatch(fetchPlaceDetails(placeId));
  };

  return (
    <View style={styles.searchResults}>
      <ScrollView>
        <List>
          {Array.isArray(places) &&
            places.map((item) => (
              <List.Item
                key={item.placeId}
                multipleLine
                onPress={() => handleItemClick(item.placeId)}
              >
                <Text style={styles.itemText}>{item.text.text}</Text>
              </List.Item>
            ))}
        </List>
      </ScrollView>
    </View>
  );
};

export default withLogging(SearchResults);

const styles = StyleSheet.create({
  searchResults: {
    flex: 4,
    fontFamily: 'Lato-Bold',
  },
  itemText: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    color: '#666666',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
