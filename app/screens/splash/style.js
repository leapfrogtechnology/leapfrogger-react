import { StyleSheet } from 'react-native';
import colors from './../../config/colors';
import { getWidth } from './../../utils/dimension';

const style = StyleSheet.create({
  
  mainContainer: {
    flex: 1,
    backgroundColor: '#e2e2e2',
  },
  splashImage: {
    flex: 1,
    resizeMode: 'stretch',
    width: getWidth(),
  }

});

export default style;
