import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react'


export default function ButtonBar() {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.icon}>
            <AntDesign name="home" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <MaterialIcons name="event" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <MaterialCommunityIcons name="google-maps" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <AntDesign name="team" size={24} color="white" />
          </TouchableOpacity>
        </SafeAreaView>
      )
    }
    
    const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        height: 80,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,

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
    })