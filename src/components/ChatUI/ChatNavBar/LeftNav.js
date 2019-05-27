'use strict'

import React, {Component} from 'react'
import {View, Image, TouchableHighlight, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AppStyles from '../../../config/styles'

export default class LeftNav extends Component {
  handleBack() {
    console.log(this.props.navigation)
    this.props.navigation.goBack(null)
  }

  render() {
    const user = this.props.user
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableHighlight onPress={this.handleBack.bind(this)}>
          <Icon
            size={24}
            color={AppStyles.colors.inactiveGreyColor}
            style={{paddingLeft: 4, paddingRight: 4}}
            name="arrow-back"
          />
        </TouchableHighlight>
        <View style={styles.avatarView}>
          <Image
            source={{uri: user.image}}
            style={styles.avatar}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  avatarView: {
    width: 36,
    height: 36,
    backgroundColor: AppStyles.colors.separator,
    borderRadius: 18
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    overflow: 'hidden'
  },
})
