import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 28,
    paddingHorizontal: 32
  },
  nameView: {
    flex: 1,
    paddingHorizontal: 8,
    justifyContent: 'center',
    marginLeft: 16
  },
  topNameView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  head: {
    fontSize: 16,
    color: AppStyles.colors.black,
    textAlign: 'left'
  },
  subRed: {
    color: AppStyles.colors.red,
    paddingTop: 4
  },
  subGrey: {
    color: AppStyles.colors.inactiveGreyColor,
    paddingTop: 4
  },
  icon: {
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hView: {
    backgroundColor: AppStyles.colors.lightWhite
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    color: AppStyles.colors.grey,
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  groupView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12
  },
  grpIcn: {
    paddingHorizontal: 16
  },
  grpText: {
    fontSize: 15
  }
});

export default styles;
