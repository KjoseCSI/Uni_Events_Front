import { Text, View, StyleSheet, Alert } from 'react-native'
import React, { Component, useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Topbar } from '../../components/Topbar'
import Searchinput from '../../components/Searchinput'
import BottonBar from '../../components/BottonBar'
import { SwipeableImage } from "../../components/SwipeableImage";
import  {useFetchUsers}  from "../../services/RandomUserAPI"
import { Swipes } from '../../components/Swipes'
import { GyroscopeSensor } from "../../components/GyroscopeSensor";
import { AccelerometerSensor } from '../../components/AccelerometerSensor'

export default function MainEvents() {
  const { users, error, fetchUser } = useFetchUsers(); 
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleLike() {
    console.log('like')
    nextUser()
  }

  function handlePass() {
    console.log('pass')
    nextUser()
  }

  function nextUser() {
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }

  return (
    <SafeAreaView style={styles.container} >
      <Topbar/>
      <Searchinput label={'Buscar Evento ...'} />
      <View style={styles.swipes}>
        {
        users.length > 1 && 
        users.map((u,i) => currentIndex === i && (
        <Swipes key={i} users={users} currentIndex={currentIndex} handleLike={handleLike} handlePass={handlePass} />
        ) ) 
        }
      </View>
      <AccelerometerSensor handleLike={handleLike} handlePass={handlePass} />
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