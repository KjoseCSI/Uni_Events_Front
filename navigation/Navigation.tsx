import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {NavigationContainer} from "@react-navigation/native"
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

//screens
import MainEvents from "../screens/Events/MainEvents";
import MapScreen from "../screens/Map/MapScreen";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return(

        <Tab.Navigator
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
            name="Mapas"
            component={MapScreen}
            options={{
                tabBarIcon: ({focused ,color, size}) =>(
                    <MaterialCommunityIcons name="google-maps" size={24} color="white"
                    />
                )
            }}/>
            <Tab.Screen 
            name="Perfil"
            component={MapScreen}
            options={{
                tabBarIcon: ({focused ,color, size}) =>(
                    <AntDesign name="team" size={24} color="white"
                    />
                )
            }}/>
        </Tab.Navigator>

    )
}

export default function Navigation() {
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}
