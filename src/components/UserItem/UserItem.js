'use strict'

import React, {Component} from 'react'
import {View, TouchableHighlight, TouchableOpacity, Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CircleIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Avatar from '../Avatar'
import AppStyles from '../../config/styles'
import styles from './styles'

export default class UserItem extends Component {
  constructor(props) {
    super(props)
  }

  handlePressUser() {
    this.props.onPress(this.props.user)
  }

  renderIcons() {
    const user = this.props.user
    return user.icons.map((icon, index) => {
      if (icon === 'circle-medium') {
        return (
          <CircleIcon
            key={index.toString()}
            size={28}
            color={AppStyles.colors.accentColor}
            name={icon}
          />
        )
      } else {
        return (
          <TouchableOpacity key={index.toString()}>
            <Icon
              size={24}
              color={AppStyles.colors.inactiveGreyColor}
              style={{marginRight: 10}}
              name={icon}
            />
          </TouchableOpacity>
        )
      }
    })
  }

  render() {
    const user = this.props.user
    const textStyle = user.msg.missed ? styles.subRed : styles.subGrey

    return (
      <TouchableHighlight onPress={this.handlePressUser.bind(this)}>
        <View style={styles.item}>
          <Avatar uri={user.image} enableDot availableStatus={user.status} />

          <View style={styles.nameView}>
            <View style={styles.topNameView}>
              <Text style={styles.head}>
                {user.name}
              </Text>
              <Text
                style={{color: AppStyles.colors.lightGreyCOlor, marginLeft: 10}}>
                {user.timeLabel}
              </Text>
            </View>
            <Text style={textStyle}>{user.msg.text}</Text>
          </View>

          {this.renderIcons()}
        </View>
      </TouchableHighlight>
    )
  }
}
