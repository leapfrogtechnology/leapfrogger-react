import { StyleSheet } from 'react-native';
import colors from './../../config/colors';
import { getWidth } from './../../utils/dimension';

const style = StyleSheet.create({
  
  mainContainer: {
    flex: 1,
    backgroundColor: colors.LF_LIGHT_GREEN
  },
  splashImage: {
    flex: 1,
    resizeMode: 'contain',
    width: getWidth(),
  }

});

export default style;
