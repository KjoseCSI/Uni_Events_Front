import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default class Main extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>Main</Text>
      </SafeAreaView>
    )
  }
}