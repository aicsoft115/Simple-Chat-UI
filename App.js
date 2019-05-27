/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict' // enables Strict Mode

import React, {Component} from 'react'
import {Platform} from 'react-native'
import {createDrawerNavigator, createStackNavigator, createAppContainer} from 'react-navigation'
import { View, TouchableOpacity } from 'react-native'

import UsersScreen from './src/screens/UsersScreen'
import SettingsScreen from './src/screens/SettingsScreen'
import ChatScreen from './src/screens/ChatScreen'
import AppStyles from './src/config/styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

class NavigationDrawerStructure extends Component {
  // Structure for the navigation Drawer
  toggleDrawer = () => {
    // Props to open/close the drawer
    this.props.navigationProps.toggleDrawer()
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Icon
            size={24}
            color={AppStyles.colors.inactiveGreyColor}
            style={{marginRight: 5}}
            name="menu"
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const UsersStackNavigator = createStackNavigator({
  Users: {
    screen: UsersScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Chats',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle: {backgroundColor: '#fff'},
      headerTintColor: '#000'
    })
  }
})
const SettingsStackNavigator = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Settings',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle: {backgroundColor: '#fff'},
      headerTintColor: '#000'
    })
  }
})

const DrawerNavigator = createDrawerNavigator({
  UsersScreen: {
    screen: UsersStackNavigator,
    navigationOptions: {drawerLabel: 'Users'}
  },
  SettingsScreen: {
    screen: SettingsStackNavigator,
    navigationOptions: {drawerLabel: 'Settings'}
  }
});

const ChatStackNavigator = createStackNavigator({
  Chat: {screen: ChatScreen}
})

export default createAppContainer(createStackNavigator({
  UsersStack: {screen: DrawerNavigator},
  ChatStack: {screen: ChatStackNavigator}
  },{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
}))
