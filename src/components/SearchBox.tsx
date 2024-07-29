import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchPlaces, setQuery } from '../redux/actions';
import { debounce } from 'lodash';

const SearchBox: React.FC = () => {
  const dispatch = useDispatch();
  const [query, setLocalQuery] = useState('');

  const debouncedSearch = useCallback(
    debounce((query) => {
      if (query.length >= 3) {
        dispatch(setQuery(query));
        dispatch(fetchPlaces(query));
      }
    }, 300),
    []
  );

  const handleChange = (text: string) => {
    setLocalQuery(text);
    debouncedSearch(text);
  };

  return (
    <View style={styles.searchBox}>
      <Text style={styles.title}>Place SCOUT</Text>
      <TextInput
        placeholder="Search places"
        style={styles.input}
        value={query}
        onChangeText={handleChange}
      />
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchBox: {
    height: 175,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffc83d',
  },
  title: {
    marginTop: 50,
    marginBottom: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 22,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    padding: 6,
    borderBottomColor: '#666666',
    borderBottomWidth: 1,
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    textAlign: 'center',
  },
});
