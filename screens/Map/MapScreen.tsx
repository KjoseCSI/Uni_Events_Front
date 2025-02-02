import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MapComponentView from './MapComponentView'
import { Topbar } from '../../components/Topbar'
import Searchinput from '../../components/Searchinput'
import { LinearGradient } from 'expo-linear-gradient';
import { useEventsContext } from "../../hooks/useEventsContext";

export default function MapScreen() {
  return (
    <SafeAreaProvider style={styles.container}>
      <LinearGradient
          colors={['#004771', '#CC0000']}
          style={styles.background}
          />
      <Topbar/>
      <Searchinput label={'Buscar Evento ...'} />
      <MapComponentView/>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#CC0000',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
})