import { StyleSheet } from 'react-native';
import colors from './../../config/colors';
import { getWidth } from './../../utils/dimension';

const style = StyleSheet.create({
  
  mainContainer: {
    flex: 1,
    backgroundColor: colors.LF_DARK_GRREEN,
  },
  splashImage: {
    flex: 1,
    resizeMode: 'contain',
    width: getWidth(),
  }

});

export default style;
