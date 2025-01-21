import { View, Image, Text, StyleSheet } from 'react-native'
import React from 'react'
w
export function SwipeableImage({ user }) {
  console.log(user.picture.large)
  return (
    <View>
        <Image source={{ uri: user.picture.large}} style={styles.photo} />
        
        <View style={styles.textContainer}>
        
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    photo:{
      height: '90%',
      resizeMode: 'cover',
      borderRadius: 20,
    },
    textContainer:{
      position: 'absolute',
      bottom: 20,
      left: 20,
    }
})