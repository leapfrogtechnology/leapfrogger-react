import { StyleSheet } from 'react-native';

import colors from 'App/config/colors';
import { getWidth, getHeight } from 'App/utils/dimension';

export const DOT_MARGIN = -28;
export const AVATAR_SIZE = 100;
export const STICKY_HEADER_HEIGHT = 60;
export const PARALLAX_HEADER_HEIGHT = 250;

const style = StyleSheet.create({
  
  mainContainer: {
    flex: 1,
    backgroundColor: colors.SYSTEM_LIGHT_GRAY,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.Gray_Shades.BORDER_GRAY,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  emptyView: {
    flex: 1,
    alignItems: 'center',
  },
  reloadButton: {
    height: 40,
    width: 150,
  },
  activityContainer: {
    position: 'absolute',
    zIndex: 100,
    width: getWidth(),
    height: getHeight() - 118,
    backgroundColor: 'white',
  },
  messageLabel: {
    color: colors.Gray_Shades.TEXT,
  },
});

export default style;
