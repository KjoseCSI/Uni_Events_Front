import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import LoginPage from './screens/LoginPage'; // Asegúrate de que la ruta sea correcta
import RegistrationPage from './screens/RegistrationPage';

export default function App() {
  return (
      <View style={styles.container}>
         {/* <LoginPage /> */  } 
          <RegistrationPage/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#003366',
      alignItems: 'center',
      justifyContent: 'center',
  },
});
