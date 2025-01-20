import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Topbar } from '../../components/Topbar'
import Searchinput from '../../components/Searchinput'
import ButtonBar from '../../components/ButtonBar'




export default function MainEvents() {

  return (
    <SafeAreaView >
      <Topbar/>
      <Searchinput label={'Buscar Evento ...'} />
      <Text>Main</Text>
      <ButtonBar/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})