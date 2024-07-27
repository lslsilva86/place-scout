import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
  // const selectedPlace = places.length > 0 ? places[0] : null;
  const selectedPlace = { description: 'Toronto, ON, Canada' };

  const coordinates = {
    // latitude: selectedPlace.geometry.location.lat,
    // longitude: selectedPlace.geometry.location.lng,
    latitude: 3.073838,
    longitude: 101.518349,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  if (!selectedPlace) {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={coordinates}
      >
        <Marker
          coordinate={coordinates}
          title={selectedPlace.description}
        />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 5,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
