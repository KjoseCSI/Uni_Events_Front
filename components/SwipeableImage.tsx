import { View, Image, Text, StyleSheet } from 'react-native'
import React from 'react'

export function SwipeableImage({ data: events }) {

  return (
    <View>
        <Image source={{ uri: `${events.event_photo.url}` } } style={styles.photo} />
        
        <View style={styles.textContainer}>
          <Text style={[styles.textPrimary, styles.textShadow]}>{events.event_name}
          </Text>
          <Text style={[styles.textSecondary, styles.textShadow]} > fecha: {events.event_date} </Text>
          <View style={styles.textRow} >
            <Text style={[styles.textSecondary, styles.textShadow]} > {events.event_description || "Texto no disponible"} </Text>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    photo:{
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 20,
    },
    textContainer:{
      position: 'absolute',
      bottom: 50,
      left: 20,
    },
      textRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
    textPrimary:{
      color: 'white',
      fontSize: 35,
      fontWeight: 'bold',
    },
    textSecondary:{
      color: 'white',
      marginLeft: 10,
      /* fontSize: 25, */
    },
    textShadow: {
      textShadowColor: 'rgba(0, 0, 0, 0.80)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
})