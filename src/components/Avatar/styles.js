import { StyleSheet } from 'react-native'
import AppStyles from '../../config/styles'

const styles = StyleSheet.create({
  avatarView: {
    width: 48,
    height: 48,
    backgroundColor: AppStyles.colors.separator,
    borderRadius: 24
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden'
  },
  statusDot: {
    position: 'absolute',
    bottom: 36,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: AppStyles.colors.white
  },
  avatarLargeView: {
    width: 64,
    height: 64,
    backgroundColor: AppStyles.colors.separator,
    borderRadius: 32
  },
  avatarLarge: {
    width: 64,
    height: 64,
    borderRadius: 32,
    overflow: 'hidden'
  },
  statusDotLarge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: AppStyles.colors.white,
  }
})

export default styles
