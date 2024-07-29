import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectSelectedPlaceDetails } from '../redux/selectors';

const Map = () => {
  const defaultCoordinates = {
    // maybank headquarters coordinates
    latitude: 3.1472732,
    longitude: 101.6995352,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [coordinates, setCoordinates] = useState(defaultCoordinates);
  const selectedPlaceDetails = useSelector(selectSelectedPlaceDetails);

  useEffect(() => {
    const coordinates = selectedPlaceDetails
      ? {
          latitude: selectedPlaceDetails.location.latitude,
          longitude: selectedPlaceDetails.location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
      : defaultCoordinates;
    setCoordinates(coordinates);
  }, [selectedPlaceDetails]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={coordinates}
      >
        <Marker
          key="mapMarker"
          coordinate={coordinates}
          title={selectedPlaceDetails?.formattedAddress}
        />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 6,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
