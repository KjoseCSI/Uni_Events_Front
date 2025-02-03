import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Alert, Share,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from 'react-native-paper';
import { useEventsContext } from "../../hooks/useEventsContext";
import { GOOGLE_MAPS_KEY, API_BASE_URL } from ".env";

export function ModalScreen(currentIndex) {
  const {events, error} = useEventsContext();
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
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
    <SafeAreaView>
      <Image source={{ uri: `${API_BASE_URL}${events[currentIndex].ImageEvent.url}` } } style={styles.photo} />
      <Button 
      icon="share-variant-outline" 
      mode="contained-tonal" 
      buttonColor="#9C9B9B"
      textColor="white"
      onPress={onShare}>
        Comparte este Evento con tus amigos!!!
      </Button>
      <Button onPress={() => navigation.goBack()}>Atras</Button>
    </SafeAreaView>

    /* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()}>Dismiss</Button>
    </View> */
  );
};

const styles = StyleSheet.create({
    photo:{
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 20,
    },
});