import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import LoginPage from './screens/Events/LoginPage';
import styles from './components/style';

function App() {
  return (
    <SafeAreaView style={styles.container}>
     <LoginPage /> 
      <StatusBar style="auto" /> 
    </SafeAreaView>
  );
}
export default App;