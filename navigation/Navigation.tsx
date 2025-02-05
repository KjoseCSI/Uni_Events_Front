import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {NavigationContainer} from "@react-navigation/native"
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { createStackNavigator } from "@react-navigation/stack";
import { EventDetails } from "../screens/Events/EventDetails";
import { RootStackParamList } from "./navigationModel";
//screens
import MainEvents from "../screens/Events/MainEvents";
import MapScreen from "../screens/Map/MapScreen";
import React, { useState } from "react";
import LoginPage from '../screens/Auth/LoginPage'
import RegistrationPage from "../screens/Auth/RegistrationPage"


const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator<RootStackParamList>();


function TabsApp() {
    return(

        <Tab.Navigator
        id={undefined}
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
            tabBarInactiveBackgroundColor: '#CC0000',
            tabBarActiveBackgroundColor: "#7a0000" ,
            tabBarActiveTintColor: "#9C9B9B"
        }}
        >
            <Tab.Screen 
            name="Home" 
            component={MainEvents}
            options={{
                
                tabBarIcon: ({focused ,color, size}) =>(
                    <AntDesign name="home" size={24} color="white"
                    />
                )
            }}/>
            <Tab.Screen 
            name="Eventos" 
            component={MapScreen}
            options={{
                tabBarIcon: ({focused ,color, size}) =>(
                    <MaterialIcons name="event" size={24} color="white"
                    /> 
                )
            }}/>
            <Tab.Screen 
            name="Nuevo Usuario"
            component={LoginPage}
            options={{
                tabBarIcon: ({focused ,color, size}) =>(
                    <AntDesign name="adduser" size={24} color="black" />
                    /* <MaterialCommunityIcons name="google-maps" size={24} color="white"
                    /> */
                )
            }}/>
            <Tab.Screen 
            name="Perfil"
            component={RegistrationPage}
            options={{
                tabBarIcon: ({focused ,color, size}) =>(
                    <AntDesign name="login" size={24} color="black" />
                    /* <AntDesign name="team" size={24} color="white"
                    /> */
                )
            }}/>
        </Tab.Navigator>

    )
}

function AuthStack(){
    return(
<NavigationContainer>
      <RootStack.Navigator
      id={undefined}>
        <RootStack.Screen name="LoginPage" component={LoginPage} />
        <RootStack.Screen name="RegistrationPage" component={RegistrationPage}

          //transitions when opening and closing the screen.
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
    )
}

const config = {
    animation: "spring",
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

export default function Navigation() {
    const [isSignedIn,setIsSignedIn] = useState(null);
    return(
        
        <NavigationContainer>
        <RootStack.Navigator
        id={undefined}>
            {isSignedIn == null ? (
                <>
                    <RootStack.Screen
                        name="AuthScreens"
                        component={AuthStack}
                        options={{ headerShown: false }}
                    />
                </>
            ) : (
                <>
                    <RootStack.Screen
                        name="MainScreens"
                        component={TabsApp}
                        options={{ headerShown: false }}
                    />
                    <RootStack.Group screenOptions={{ presentation: "modal" }}>
                    <RootStack.Screen
                        name="EventDetails"
                        component={EventDetails}
                        options={{ title: "Detalles del Evento" }}
                    />
                    </RootStack.Group>
                </>
            )}
        </RootStack.Navigator>
        </NavigationContainer>

    )
}
