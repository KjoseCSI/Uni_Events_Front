import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import  MainEvents from './screens/Events/MainEvents';
import { LinearGradient } from 'expo-linear-gradient';
import FormPage from './screens/Events/FormPage';
import styles from './components/style';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <FormPage /> 
      <LinearGradient
        // Background Linear Gradient
        colors={['#004771', '#CC0000']}
        style={styles.background}
      />
      {/* <MainEvents/> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

