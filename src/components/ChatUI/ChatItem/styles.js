import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 5,
    paddingBottom:5,
    paddingLeft : 20,
    paddingRight: 20,
    flexDirection: 'row',
  },
  leftBubble:{
    padding: 8,
    marginLeft: 10,
    marginRight: 100,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    color: '#000000',
    fontSize: 20
  },
  rightBubble:{
    padding: 8,
    marginLeft: 100,
    borderRadius: 10,
    backgroundColor: '#0084ff',
    color: '#FFFFFF',
    fontSize: 20
  },
});

export default styles
