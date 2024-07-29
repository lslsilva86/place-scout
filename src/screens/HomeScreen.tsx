import React from 'react';
import { StyleSheet, View } from 'react-native';
import SearchBox from '../components/SearchBox';
import SearchResults from '../components/SearchResults';
import Map from '../components/Map';
import { StatusBar } from 'expo-status-bar';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SearchBox />
      <View style={styles.SearchResultsWrapper}>
        <SearchResults />
      </View>
      <Map />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  SearchResultsWrapper: {
    flex: 4,
  },
});

export default HomeScreen;
