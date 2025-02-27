import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {NavigationContainer} from "@react-navigation/native"
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { createStackNavigator } from "@react-navigation/stack";
import { EventDetails } from "../screens/Events/EventDetails";
import { RootStackParamList } from "./navigationModel";
import { useAuthContext } from "../context/AuthContext";
//screens
import MainEvents from "../screens/Events/MainEvents";
import MapScreen from "../screens/Map/MapScreen";
import UserProfile from "../screens/Events/UserProfile";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import LoginPage from "../screens/Auth/LoginPage";
import RegistrationPage from "../screens/Auth/RegistrationPage";
import NotificationService from "../services/NotificationService";
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
            name="Usuario"
            component={UserProfile}
            options={{
                tabBarIcon: ({focused ,color, size}) =>(
                    <MaterialCommunityIcons name="clipboard-account" size={24} color="white"
                    />
                )
            }}/>
            {/* <Tab.Screen 
            name="Notificacion"
            component={NotificationService}
            options={{
                tabBarIcon: ({focused ,color, size}) =>(
                    <AntDesign name="login" size={24} color="black" />
                )
            }}/> */}
        </Tab.Navigator>

    )
}

function AuthStack(){
    return(

      <RootStack.Navigator
      id={undefined}
      screenOptions={{
        headerShown: false,
        }}>
        <RootStack.Screen name="LoginPage" component={LoginPage} />
        <RootStack.Screen name="RegistrationPage" component={RegistrationPage}
        
          //transitions when opening and closing the screen.
        options={{
            transitionSpec: {
                open: AnimationConfig,
                close: AnimationConfig,
            },
        }}
        />
      </RootStack.Navigator>

    )
}

const AnimationConfig = {
    animation: "spring" as const,
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

    const {state} = useAuthContext()

    return(
        
        <NavigationContainer>
        <RootStack.Navigator
        id={undefined}>
            {state === 1 ? (
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
            ) : (
                <>
                <RootStack.Screen
                    name="AuthScreens"
                    component={AuthStack}
                    options={{ headerShown: false }}
                />
                </>
            )}
        </RootStack.Navigator>
        </NavigationContainer>

    )
}
