import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import MapView, {Marker, Polyline} from 'react-native-maps';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from "@env";


export default function MapComponentView() {

  const [ origin , setOrigin ] = useState({
    latitude: -0.1979804,
    longitude: -78.50475,
  })


  const [ destination, setDestination ] = useState({
    latitude: -0.201431,
    longitude: -78.504049
  })

  return (
    <SafeAreaProvider style={styles.container}>
      <MapView style={styles.map} 
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      >
        <Marker
        coordinate={{
          latitude: origin.latitude,
          longitude: origin.longitude,
        }}
        />
        <Marker
        coordinate={{
          latitude: destination.latitude,
          longitude: destination.longitude,
        }}
        draggable
        onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
        />

        <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_KEY}
        strokeColor='blue'
        strokeWidth={8}
        />

      </MapView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
    marginTop: 15,
    padding: 10,

  },
  map: {
    width: '100%',
    height: '100%',
  },
});