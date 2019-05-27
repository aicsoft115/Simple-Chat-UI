'use strict'

import React, { Component } from 'react'
import { View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Images from '../../config/images'
import styles from './styles'
import PropTypes from 'prop-types'
import AppStyles from '../../config/styles'

export default class Avatar extends Component {
  render() {
    const { uri, large, isGroup, enableDot, availableStatus } = this.props;
    const dotBackColorStyle = availableStatus ?
      {backgroundColor: AppStyles.colors.onlineGreen} :
      {backgroundColor: AppStyles.colors.separator}

    return (
      <View style={large ? styles.avatarLargeView : styles.avatarView}>
        {isGroup ? (
          <Icon name="face" size={64} color="grey" />
        ) : (
          <Image
            source={uri ? { uri: uri } : Images.profile.avatar}
            style={large ? styles.avatarLarge : styles.avatar}
          />
        )}
        {enableDot ? (
          <View
            style={large ? [styles.statusDotLarge, dotBackColorStyle] : [styles.statusDot, dotBackColorStyle]}
          />
        ) : (
          <View style={{}} />
        )}
      </View>
    )
  }
}

Avatar.defultProps = {
  enableDot: true,
  large: false,
  isGroup: false,
  liveEnabled: true
}

Avatar.propTypes = {
  large: PropTypes.bool,
  isGroup: PropTypes.bool,
  enableDot: PropTypes.bool,
  uri: PropTypes.string
};
