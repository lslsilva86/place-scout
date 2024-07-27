import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBox from './src/components/SearchBox';
import SearchResults from './src/components/SearchResults';
import Map from './src/components/Map';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SearchBox />
      <SearchResults />
      <Map />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
