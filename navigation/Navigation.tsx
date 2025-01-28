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
        <SafeAreaProvider >
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
        </SafeAreaProvider>
    )
}

export default function Navigation() {
    return(
        <NavigationContainer>
        <SafeAreaView style={styles.container} >
            <LinearGradient
            colors={['#004771', '#CC0000']}
            style={styles.background}
            />

            <GestureHandlerRootView>

            <MyTabs>
                
            </MyTabs>
            <StatusBar style="auto" />
            </GestureHandlerRootView>
        </SafeAreaView>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    containerBarBotton: {
        alignItems: 'center',
        height: 80,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,

    },
    container: {
        flex: 1,
        backgroundColor: '#004771',
      },
    icon:{
        width: 50,
        height: 50,
        backgroundColor:'#CC0000',
        borderRadius: 30 ,
        justifyContent: 'center',
        alignItems: 'center',
    },
        text: {
        color: 'white'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 1000,
      },
})