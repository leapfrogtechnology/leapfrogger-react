import { StyleSheet } from 'react-native';

import colors from 'App/config/colors';
import { getWidth, getHeight } from 'App/utils/dimension';

export const DOT_MARGIN = -28//getHeight() - 158//-28;
export const AVATAR_SIZE = 100;
export const STICKY_HEADER_HEIGHT = 60;
export const PARALLAX_HEADER_HEIGHT = 250;

const style = StyleSheet.create({
  
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  statusBar: {
    backgroundColor: colors.IOS_GREEN,
  },
  searchContainer: {
    height: 50,
    // top: 20,
    width: getWidth(),
    // zIndex: 10,        
    // position: 'absolute',
    justifyContent: 'center',
    marginBottom: -3,
    backgroundColor: colors.IOS_GREEN,
    // shadowColor: colors.LF_GRAY,
    // shadowOffset: { width: 0, height: 2.5 },
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
  },
  tableContainer: {
    flex: 1,
  },
  tableiOS: {
    flex: 1,
  },
  tableAndroid: {
    height: getHeight() - 70 - 72,
  },
  sectionHeader: {
    // paddingTop: 2,
    height: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    // fontSize: 14,
    // fontWeight: 'bold',
    backgroundColor: colors.Gray_Shades.BORDER_GRAY,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  tableHeaderBackgroundImage: {
    width: getWidth(),
    height: PARALLAX_HEADER_HEIGHT
  },
  tableHeaderBackgroundOverlay: {
    position: 'absolute',
    top: 0,
    width: getWidth(),
    backgroundColor: 'rgba(0,0,0,.4)',
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    justifyContent: 'flex-end',    
    height: STICKY_HEADER_HEIGHT,
    backgroundColor: colors.IOS_GREEN,
    marginBottom: 5,
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 0 },
    // shadowRadius: 10,
    // shadowOpacity: 0.8, 
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  parallaxHeader: {
    flex: 1,
    paddingTop: 80,    
    alignItems: 'center',    
    flexDirection: 'column',
  },
  avatar: {
    marginBottom: 5,
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    fontSize: 20,    
    color: 'white',
    paddingVertical: 5
  },
  sectionTitleText: {
    fontSize: 14,
    color: 'white',    
    paddingVertical: 5
  },
  searchViewContainer: {
    position: 'absolute',
    zIndex: 90,
    width: getWidth(),
    height: getHeight() - 115,
    backgroundColor: 'white'
  },
  stickyDepartmentSection: {
    position: 'absolute',
    top: 2,
    left: 50,
    height: 10,
    zIndex: 100,
    width: getWidth() - 60,
    backgroundColor: 'transparent',
    // backgroundColor: 'red',
  },
  departmentNameText: {
    textAlign: 'right',
    color: colors.MID_GRAY,    
  }
});

export default style;
