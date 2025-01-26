import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper'

export default function Searchinput({label}) {

    const [searchQuery, setSearchQuery] = React.useState('');
  return (
      <Searchbar
      style={styles.container}
      placeholder={label}
      onChangeText={setSearchQuery}
      value={searchQuery}
      rippleColor='#CC0000'
      inputStyle={styles.inputText}
      selectionColor="#0089da"
      />
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white' ,
    },  
    inputText: {
        color: 'black',
      },
  
  })