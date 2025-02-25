import { Fragment, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import MapView, {Marker, Polyline} from 'react-native-maps';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from "@env";
import { useSQLiteContext } from "expo-sqlite";

import { eventsLikeModel } from "../../models/LikeEventsModel"


export default function MapComponentView() {

  const [eventLikeData, setEventLikeData] = useState<eventsLikeModel[]>([]);
  const eventDatabase = useSQLiteContext();
  
  const loadData = async () => {
    const result = await eventDatabase.getAllAsync<eventsLikeModel>("SELECT * FROM eventslike");
    setEventLikeData(result);
  };
  
  useEffect(() => {
    loadData();
  }, []);

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
        {eventLikeData.map((event) => (
        <Fragment key={event.id}>
        <Marker 
          /* key = {event.id} */
          coordinate={{
          latitude: event.latitude,
          longitude: event.longitude,
        }}
        title={event.event_name}
        description={`Lugar: ${event.event_place}\nFecha: ${event.event_date}\nHora:${event.event_time}`}
        />
        <MapViewDirections
        origin={origin}
        destination={{ latitude: event.latitude, longitude: event.longitude }}
        apikey={GOOGLE_MAPS_KEY}
        strokeColor='blue'
        strokeWidth={8}
        />
        </Fragment>
      ))}
        <Marker
        coordinate={{
          latitude: origin.latitude,
          longitude: origin.longitude,
        }}
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