import { Text, View, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Topbar } from '../../components/Topbar'
import Searchinput from '../../components/Searchinput'
import { Swipes } from '../../components/Swipes'
import { AccelerometerSensor } from '../../components/AccelerometerSensor'
import { LinearGradient } from 'expo-linear-gradient';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEventsContext } from "../../hooks/useEventsContext";
import { Button } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { useSQLiteContext } from "expo-sqlite";


export default function MainEvents() {

  

  const { events, error } = useEventsContext(); 
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigation = useNavigation();

  //database Functions

  const database = useSQLiteContext();

  const handleSave = async () => {
    try {
      const response = await database.runAsync(
        `INSERT INTO eventslike (id, event_name, latitude, longitude, event_time, event_date, event_place)
        VALUES (10, 'Festival de Jazz', -0.2295, -78.5243, '18:30', '2025-04-10', 'Teatro Nacional');`,
          [
            events[currentIndex].id, 
            events[currentIndex].event_name, 
            events[currentIndex].latitude,
            events[currentIndex].longitude,
            events[currentIndex].event_time,
            events[currentIndex].event_date.toLocaleString(),
            events[currentIndex].event_place
          ]
      );
      console.log("Evento guardado Correctamente:", response?.changes!);
    } catch (error) {
      console.error("Error al guaradar el Evento:", error);
    }
  };

  function handleLike() {
    console.log('like')
    handleSave()
    nextUser()
  }

  function handlePass() {
    console.log('pass')
    nextUser()
  }

  function nextUser() {
    const nextIndex = currentIndex === events.length - 2 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  return (
    <SafeAreaView style={styles.container} >
    <LinearGradient
    colors={['#004771', '#CC0000']}
    style={styles.background}
    />
    <GestureHandlerRootView>
    <SafeAreaView style={styles.subContainer} >
      <Topbar/>
      <Searchinput label={'Buscar Evento ...'} />
      <View style={styles.swipes}>
        {
        events.length > 1 && 
        events.map((u,i) => currentIndex === i && (
        <Swipes key={i} data={events} currentIndex={currentIndex} handleLike={handleLike} handlePass={handlePass} />
        ) ) 
        }
      </View>
      <Button 
      buttonColor="#004771"
      mode='contained' 
      onPress={() => navigation.navigate('EventDetails',{currentIndex})}>Detalles</Button>
      <AccelerometerSensor handleLike={handleLike} handlePass={handlePass} />
    </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CC0000',
  },
  subContainer: {
    flex: 1,
    /* backgroundColor: '#004771', */
  },
swipes: {
  flex: 1,
  padding: 10,
  paddingTop: 8,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,
  elevation: 7,
},
background: {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  height: '100%',
},

})