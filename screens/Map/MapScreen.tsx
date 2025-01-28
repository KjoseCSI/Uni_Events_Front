import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MapComponentView from './MapComponentView'
import BottonBar from '../../components/BottonBar'
import { Topbar } from '../../components/Topbar'
import Searchinput from '../../components/Searchinput'



export default function MapScreen() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Topbar/>
      <Searchinput label={'Buscar Evento ...'} />
      <MapComponentView/>
      <BottonBar/>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
  },
})