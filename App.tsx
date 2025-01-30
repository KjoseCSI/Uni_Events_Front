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


