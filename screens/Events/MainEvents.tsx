import { Text, View, StyleSheet, Alert } from 'react-native'
import React, { Component, useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Topbar } from '../../components/Topbar'
import Searchinput from '../../components/Searchinput'
import BottonBar from '../../components/BottonBar'
import { SwipeableImage } from "../../components/SwipeableImage";
import  {useFetchUsers}  from "../../services/RandomUserAPI"
import { Swipes } from '../../components/Swipes'


export default function MainEvents() {
  const { users, error, fetchUser } = useFetchUsers(); 
  const [currentIndex, setCurrentIndex] = useState(0)


  return (
    <SafeAreaView style={styles.container} >
      <Topbar/>
      <Searchinput label={'Buscar Evento ...'} />
      <View style={styles.swipes}>
        {
        users.length > 1 && 
        <Swipes users={users} currentIndex={currentIndex} />
        }
      </View>
      
      <BottonBar/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
swipes: {
  flex: 1,
  padding: 10,
  paddingTop: 8,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,
  elevation: 7,
},
})