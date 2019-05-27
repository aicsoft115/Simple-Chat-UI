'use strict'

import React, {Component} from 'react'
import {Image, TextInput, Platform, TouchableOpacity, View} from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import AppStyles from '../../../config/styles'
import styles from './styles'

const iosTextHeight = 21
const androidTextHeight = 21
const textHeight = Platform.OS === 'ios' ? iosTextHeight : androidTextHeight

export default class Composer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: null,
      toggleComposerStyle: styles.composerHidden,
      height: textHeight * 2,
      lines: 1
    }
  }

  handleTextChanged(text) {
    this.setState({text: text})
    text.length > 0 ?
      this.setState({toggleComposerStyle: styles.composer}) :
      this.setState({toggleComposerStyle: styles.composerHidden})
  }

  handleComposerPressed() {
    if (this.state.text.length > 0) {
      this.props.onComposerPressed(this.state.text)
      this.setState({text: null, toggleComposerStyle: styles.composerHidden})
    }
  }

  handleTextInputSizeChanged(event) {
    const height = Platform.OS === 'ios'
      ? event.nativeEvent.contentSize.height
      : event.nativeEvent.contentSize.height - androidTextHeight
    const lines = Math.round(height / textHeight)
    const visibleLines = lines < 6 ? lines : 6
    const visibleHeight = textHeight * (visibleLines + 1)
    this.setState({height: visibleHeight, lines: visibleLines})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputBoxView}>
          <TouchableOpacity>
            <FontAwesomeIcon
              size={24}
              color={AppStyles.colors.inactiveGreyColor}
              style={{marginRight: 10, marginBottom: 8}}
              name="smile-o"
            />
          </TouchableOpacity>
          <TextInput
            style={[styles.inputBox, { height: this.state.height }]}
            value={this.state.text}
            returnKeyLabel={"next"}
            onChangeText={this.handleTextChanged.bind(this)}
            editable
            multiline
            onContentSizeChange={(e) => this.handleTextInputSizeChanged.bind(this)(e)}
          />
          <TouchableOpacity>
            <EntypoIcon
              size={24}
              color={AppStyles.colors.inactiveGreyColor}
              style={{transform: [{rotate: '-90deg'}], marginBottom: 8}}
              name="attachment"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={this.handleComposerPressed.bind(this)}>
          <Image source={require('../../../assets/images/send.png')} style={this.state.toggleComposerStyle} />
        </TouchableOpacity>
      </View>
    )
  }
}
