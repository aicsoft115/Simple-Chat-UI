'use strict'

import React, {Component} from 'react'
import {View, TouchableHighlight, StyleSheet, Image} from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import AppStyles from '../../../config/styles'

export default class RightNav extends Component {

  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
        <TouchableHighlight>
          <Image
            source={require('../../../assets/images/dropdown.png')}
            style={{width: 36, height:24, marginRight: 8}}
          />
        </TouchableHighlight>
        <TouchableHighlight>
          <FontAwesomeIcon
            size={24}
            color={AppStyles.colors.accentColor}
            style={{marginLeft: 4, marginRight: 4}}
            name="exclamation-circle"
          />
        </TouchableHighlight>
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
