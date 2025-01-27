import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';

export function Topbar() {
  return (
    <SafeAreaView style={styles.container}>
      <View/>
      <Text style={styles.text } >UNI EVENTS</Text>
      <TouchableOpacity style={styles.icon}>
        <AntDesign name="user" size={24} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 80,
    marginTop: 20 ,
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