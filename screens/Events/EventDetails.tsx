/* import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from '@react-navigation/elements';

function HomeScreen() {
    const navigation = useNavigation();
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
        <Button onPress={() => navigation.navigate('MyModal')}>Open Modal</Button>
      </View>
    );
  }
  
  function ModalScreen() {
    const navigation = useNavigation();
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button onPress={() => navigation.goBack()}>Dismiss</Button>
      </View>
    );
  }
  
  function DetailsScreen() {
    return (
      <View>
        <Text>Details</Text>
      </View>
    );
  }
  
  const RootStack = createStackNavigator();
  
  function App() {
    return (
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Group>
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="Details" component={DetailsScreen} />
          </RootStack.Group>
          <RootStack.Group screenOptions={{ presentation: 'modal' }}>
            <RootStack.Screen name="MyModal" component={ModalScreen} />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    );
  } */