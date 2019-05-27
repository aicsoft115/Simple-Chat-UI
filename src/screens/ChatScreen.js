'use strict'

import React, {Component} from 'react'

import {View, Text, FlatList, ScrollView, StyleSheet} from 'react-native'

import LeftNav from '../components/ChatUI/ChatNavBar/LeftNav'
import RightNav from '../components/ChatUI/ChatNavBar/RightNav'
import ChatItem from '../components/ChatUI/ChatItem'
import {currentDateTimeString} from '../config/datetime'
import AppStyles from '../config/styles'
import Composer from '../components/ChatUI/Composer'

export default class ChatScreen extends Component {

  static navigationOptions = ({navigation}) => {
    const user = navigation.getParam('user', {})
    return {
      title: user.name,
      headerLeft: <LeftNav user={user} navigation={navigation} />,
      headerRight: <RightNav />
    }
  }

  constructor(props) {
    super(props)
    const user = this.props.navigation.getParam('user', {})

    this.state = {
      messages: [
        {_id: 0, user: null, text: "hello", createdAt: '2019-05-23 10:20:30'},
        {_id: 1, user: user, text: "Halo John, terima kasih atas pesan Anda. Kami sedang tidak berada di sini sekearang, tapi kami akan kembali kepada Anda secepatnya!", createdAt: '2019-05-23 12:30:45'}
      ]
    }
  }

  sendMessage(text) {
    const currentDateTime = currentDateTimeString()
    var messages = this.state.messages
    messages.push({
      _id: messages.length,
      user: null,
      text: text,
      createAt: currentDateTime
    })
    this.setState({
      messages: messages
    })
    this.scrollView.scrollToEnd({animated: true})
  }

  renderHeader() {
    return (
      <Text style={styles.header}>
        MAY 23 AT 19:04
      </Text>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView ref={(ref) => {this.scrollView = ref}}>
          <FlatList
            data={this.state.messages}
            extraData={this.state}
            showVerticalScrollIndicator={false}
            keyExtractor={message => message._id.toString()}
            ListHeaderComponent={this.renderHeader}
            renderItem={({item}) => (
              <ChatItem key={item._id} message={item} />
            )}
          />
        </ScrollView>

        <Composer onComposerPressed={this.sendMessage.bind(this)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    flexDirection: 'column',
    backgroundColor: AppStyles.colors.white,
  },
  header: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 30,
    marginBottom: 20,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    color: '#aaaaaa',
  },
  separator: {
    height: 1,
    width: '86%',
    backgroundColor: '#ced0ce',
    marginLeft: '14%'
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#ced0ce'
  }
})
