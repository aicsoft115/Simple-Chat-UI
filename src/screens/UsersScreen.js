'use strict'

import React, {Component} from 'react'

import {View, FlatList} from 'react-native'
import UserItem from '../components/UserItem'

export default class UsersScreen extends Component {
  static navigationOptions = {
    title: 'Users',
    headerTitleStyle: {alignSelf: 'center'}
  }

  constructor(props) {
    super(props)

    this.state = {
      users: [
        {id:0, name: "Adilai",      timeLabel: "now",     status: true,   icons: ['circle-medium'],                image:"https://bootdey.com/img/Content/avatar/avatar1.png", msg: {missed: false, text: "Kelly sent a sticker"}},
        {id:1, name: "CHARLOTTE",   timeLabel: "15m",     status: true,   icons: ['call', 'circle-medium'],         image:"https://bootdey.com/img/Content/avatar/avatar2.png", msg: {missed: true, text: "Missed Call"}},
        {id:2, name: "Tamas",       timeLabel: "15m",     status: false,  icons: [],                image:"https://bootdey.com/img/Content/avatar/avatar3.png", msg: {missed: false, text: "How are you?"}} ,
        {id:3, name: "SOPHIA Down", timeLabel: "8m 23s",  status: true,   icons: [],                image:"https://bootdey.com/img/Content/avatar/avatar4.png", msg: {missed: false, text: "Lorem lpsum is simply dummy text"}} ,
        {id:4, name: "OLIVIA",      timeLabel: "10m 30s", status: false,  icons: ['call', 'videocam', 'circle-medium'],image:"https://bootdey.com/img/Content/avatar/avatar5.png", msg: {missed: true, text: "Missed Call"}} ,
        {id:5, name: "John Doe",    timeLabel: "20m",     status: false,  icons: [],                image:"https://bootdey.com/img/Content/avatar/avatar6.png", msg: {missed: false, text: "Kelly sent a sticker"}} ,
        {id:6, name: "Ping L",      timeLabel: "1h 40m",  status: true,   icons: [],                image:"https://bootdey.com/img/Content/avatar/avatar2.png", msg: {missed: false, text: "Kelly sent a sticker"}} ,
        {id:7, name: "John Doe",    timeLabel: "2h 0m",   status: false,  icons: [],                image:"https://bootdey.com/img/Content/avatar/avatar1.png", msg: {missed: false, text: "Kelly sent a sticker"}} ,
        {id:8, name: "John Doe",    timeLabel: "3h 30m",  status: true,   icons: [],                image:"https://bootdey.com/img/Content/avatar/avatar4.png", msg: {missed: false, text: "Kelly sent a sticker"}} ,
        {id:9, name: "John Doe",    timeLabel: "5h 10m",  status: true,   icons: [],                image:"https://bootdey.com/img/Content/avatar/avatar7.png", msg: {missed: false, text: "Kelly sent a sticker"}} ,
        {id:10, name: "John Doe",    timeLabel: "5h 10m",  status: true,   icons: [],                image:"https://bootdey.com/img/Content/avatar/avatar7.png", msg: {missed: false, text: "Kelly sent a sticker"}} ,
        {id:11, name: "John Doe",    timeLabel: "5h 10m",  status: true,   icons: [],                image:"https://bootdey.com/img/Content/avatar/avatar7.png", msg: {missed: false, text: "Kelly sent a sticker"}} ,
        {id:12, name: "John Doe",    timeLabel: "5h 10m",  status: true,   icons: [],                image:"https://bootdey.com/img/Content/avatar/avatar7.png", msg: {missed: false, text: "Kelly sent a sticker"}} ,
        {id:13, name: "John Doe",    timeLabel: "5h 10m",  status: true,   icons: [],                image:"https://bootdey.com/img/Content/avatar/avatar7.png", msg: {missed: false, text: "Kelly sent a sticker"}} ,
        {id:14, name: "John Doe",    timeLabel: "5h 10m",  status: true,   icons: [],                image:"https://bootdey.com/img/Content/avatar/avatar7.png", msg: {missed: false, text: "Kelly sent a sticker"}} ,
      ]
    }
  }

  handleUserPressed(user) {
    this.props.navigation.navigate('ChatStack', { user: user})
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.users}
          keyExtractor={user => user.id.toString()}
          renderItem={({ item }) => (
            <UserItem user={item} onPress={this.handleUserPressed.bind(this)} />
          )}
        />
      </View>
    )
  }
}
