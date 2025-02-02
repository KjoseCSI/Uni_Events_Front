import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, Alert, Share } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from 'react-native-paper';

export function ModalScreen() {
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
      <Image source={{ uri: `http://192.168.100.2:1337/${data.ImageEvent.url}` } } style={styles.photo} />
      <Button 
      icon="share-variant-outline" 
      mode="contained-tonal" 
      buttonColor="#9C9B9B"
      textColor="white"
      onPress={onShare}>
        Press me
      </Button>
    </SafeAreaView>

    /* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()}>Dismiss</Button>
    </View> */
  );
}