import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './screens/LoginPage'; 
import RegistrationPage from './screens/RegistrationPage';

const Stack = createStackNavigator(); 
export default function App() {
  return (
    <LoginPage/>
  
  );  
}

//Style Login
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#003366',
      alignItems: 'center',
      justifyContent: 'center',
  },
});
