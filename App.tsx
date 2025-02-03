import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './RootStackParamList'; // Asegúrate de que la ruta sea correcta
import LoginPage from './screens/LoginPage';
import RegistrationPage from './screens/RegistrationPage';
import MainEvents from './screens/Events/MainEvents';

//stack screens, verify that the correct screen names are used
const Stack = createStackNavigator<RootStackParamList>();

// transition animations between screens.
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Registration" component={RegistrationPage}

          //transitions when opening and closing the screen.
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <Stack.Screen name="Home" component={MainEvents}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />

    </NavigationContainer>
  );
}


