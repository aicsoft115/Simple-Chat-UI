'use strict'

import React, {Component} from 'react'

import {View, Text} from 'react-native'

export default class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings',
    headerTitleStyle: {alignSelf: 'center'}
  }

  render() {
    return (
      <View>
        <Text>Settings Screen</Text>
      </View>
    )
  }
}
