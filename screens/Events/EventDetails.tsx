import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Alert, Share,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from 'react-native-paper';
import { useEventsContext } from "../../hooks/useEventsContext";
import { RouteProp } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import NotificationService from "../../services/NotificationService";

type RootStackParamList = {
  EventDetail: { currentIndex: number }; 
};

type EventDetailRouteProp = RouteProp<RootStackParamList, 'EventDetail'>;



export function EventDetails({ route }: { route: EventDetailRouteProp }) {
  const { currentIndex } = route.params;
  const {events, error} = useEventsContext();
  const navigation = useNavigation();


  const sendBodyNotification = () => {
    const title = `Esta a punto de ocurrir: ${events[currentIndex].event_name}` ;
    const body = `a las ${events[currentIndex].event_time} de ${events[currentIndex].event_date} 
                se abriran las puertas del evento`;
    const data = `{ someData: ${events[currentIndex].event_type}}`;
    NotificationService(title,body,data)
  }  


  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `Hola te invito al Evento ${events[currentIndex].event_name} que sera el ${events[currentIndex].event_date} a la hora
          ${events[currentIndex].event_time}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
          colors={['#004771', '#CC0000']}
          style={styles.background}
          />
      <Image source={{ uri: `${events[currentIndex].event_photo.url}` } } style={styles.photo} />
      <View style={styles.footerContainer}>
        <View style={styles.infoContainer}>
          <MaterialIcons name="date-range" size={24} color="white" />
          <Text style={styles.footerText}>
            {events[currentIndex]?.event_date
              ? events[currentIndex].event_date.toLocaleString()
              : 'Fecha no disponible'}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <MaterialIcons name="access-time" size={24} color="white" />
          <Text style={styles.footerText}>
            {events[currentIndex]?.event_time
              ? events[currentIndex].event_time.toLocaleString()
              : 'Hora no disponible'}
          </Text>
        </View>
      </View>
      <Button 
      icon="share-variant-outline" 
      mode="contained-tonal" 
      buttonColor="#9C9B9B"
      textColor="white"
      onPress={onShare}>
        Comparte este Evento con tus amigos!!!
      </Button>
      <View>
        <Text style={styles.title}>
          {events[currentIndex].event_name}
        </Text>
        <Text style={styles.typeEvent}>
          Tipe de Evento: {events[currentIndex].event_type}
        </Text>
        <Text style={styles.footerText}>
          {events[currentIndex].event_description}
        </Text>
      </View>
      <Button 
      icon="share-variant-outline" 
      mode="contained-tonal" 
      buttonColor="#9C9B9B"
      textColor="white"
      onPress={async () =>{
        await sendBodyNotification
        }}>
        Prueba de Notificacion de este evento
      </Button>
      <Button 
      icon="arrow-left"
      buttonColor="#004771"
      textColor="white"
      onPress={() => navigation.goBack()}>Atras</Button>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CC0000',
    padding: 15
  },  
  photo:{
      height: '50%',
      /* resizeMode: 'cover', */
      borderRadius: 20,
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '100%',
    },
    footerContainer:{
      flexDirection: "row",  
      justifyContent: "space-between", 
      alignItems: "center", 
      paddingHorizontal: 10, 
      marginTop: 10,
    },
    infoContainer: {
      flexDirection: "row",  
    alignItems: "center",
    },
    footerText:{
      color:"white",
      marginLeft: 5,
      fontSize: 16,
    },
    title:{
      color:"white",
      textAlign: "center",
      fontWeight: "bold" ,
      fontSize: 30,
      width: "100%",
      margin: 10,
      transform: [{ rotate: "-5deg" }],
    },
    typeEvent: {
      color: "white",
      textDecorationLine: "underline",
      fontStyle: "italic",
      fontSize: 22,
      margin: 5
    }
});