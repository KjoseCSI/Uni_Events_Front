import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import  MainEvents from './screens/Events/MainEvents'
import { LinearGradient } from 'expo-linear-gradient';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MapComponentView from './screens/Map/MapComponentView';
import MapScreen from './screens/Map/MapScreen';
import Navigation from "./navigation/Navigation";

export default function App() {
  return (

      <Navigation/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* backgroundColor: '#004771' */
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
});
