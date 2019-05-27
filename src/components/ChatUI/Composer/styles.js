import {StyleSheet} from 'react-native'
import AppStyles from '../../../config/styles'

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    padding: 10,
    backgroundColor:'#eee6de'
  },
  inputBoxView: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    borderRadius: 35,
    backgroundColor: AppStyles.colors.white,
    paddingLeft: 15,
    paddingRight: 15
  },
  inputBox:{
    flex:1,
    marginRight: 10,
    width : '100%',
    fontSize: 18
  },
  composer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 10
  },
  composerHidden: {
    display: 'none',
    height: 40,
    width: 40,
    borderRadius: 20,
  }
})

export default styles
