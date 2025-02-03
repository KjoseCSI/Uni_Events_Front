import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {NavigationContainer} from "@react-navigation/native"
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

//screens
import MainEvents from "../screens/Events/MainEvents";
import MapScreen from "../screens/Map/MapScreen";
import React from "react";
import LoginPage from '../screens/LoginPage'
import RegistrationPage from "../screens/RegistrationPage"
import { createStackNavigator } from "@react-navigation/stack";
import { EventDetails } from "../screens/Events/EventDetails";
import { RootStackParamList } from "./navigationModel";

const Tab = createBottomTabNavigator();
const RootStack = createStackNavigator<RootStackParamList>();


function MyTabs() {
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

export default function Navigation() {
    return(

        <NavigationContainer>
        <RootStack.Navigator
        id={undefined}>
            <RootStack.Group screenOptions={{ presentation: "modal" }}>
            <RootStack.Screen
                name="EventDetails"
                component={EventDetails}
                options={{ title: "Detalles del Evento" }}
            />
            </RootStack.Group>

            <RootStack.Screen
            name="Main"
            component={MyTabs}
            options={{ headerShown: false }}
            />
        </RootStack.Navigator>
        </NavigationContainer>

    )
}
