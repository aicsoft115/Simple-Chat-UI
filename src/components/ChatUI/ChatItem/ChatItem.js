'use strict'

import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import Avatar from '../../Avatar'
import styles from './styles'

export default class ChatItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const message = this.props.message
    var content = null
    if (!message.user) {
      content = <View style={{width: '100%', alignItems: 'flex-end'}}>
        <Text style={styles.rightBubble}>
          {message.text}
        </Text>
      </View>
    } else {
      content = <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
        <Avatar uri={message.user.image}/>
        <Text style={styles.leftBubble}>
          {message.text}
        </Text>
      </View>
    }

    return (
      <View style={styles.rowContainer}>
        {content}
      </View>
    )
  }
}
