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
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247, 247, 247, 1)',
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
    backgroundColor: colors.LF_DARK_GRREEN,
    marginBottom: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.8, 
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: 'absolute',
    right: 10,    
    bottom: 10,
  },
  parallaxHeader: {
    flex: 1,
    paddingTop: 80,    
    paddingHorizontal: 16,
    alignItems: 'flex-start',    
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
  listView: {
    // paddingHorizontal: 16,     
  },
  cell: {
    flex: 1,    
    height: 60, 
    paddingHorizontal: 16, 
    paddingTop: 8,           
  },
  phoneCell: {
    marginTop: 8,
    flexDirection: 'row',
  },
  numberTextContainer: {
    flex: 0.9,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleText: {
    flex: 1,
    marginVertical: 4,    
  },
  dataText: {
    flex: 1,
    height: 40,
    fontSize: 18,
  },
  phoneMessageContainer: {
    flex: 0.1,
    flexDirection: 'row',    
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  phoneAndMessageButtonImage: {
    width: 35,
    height: 35,
    marginHorizontal: 6,  
    paddingHorizontal: 2,                
    resizeMode: 'contain',    
  },
  messageButtonImage: {
    width: 35,
    height: 35,
    marginHorizontal: 4,
    paddingHorizontal: 2,            
    resizeMode: 'contain',
  },
  simpleTextCell: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  logoutButtonContainer: {
    flex: 1,
    paddingTop: 25,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  logoutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 44,
  },
  logoutTitle: {
    color: colors.IOS_RED
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  moreButtonContainer: {
    position: 'absolute',
    zIndex: 50,
    top: 26,
    right: 8,
    transform: [{ rotate: '90deg'}],
  },
  moreButton: {

  },
  moreButtonImage: {
    width: 30,
    height: 25,
    margin: 5,
    resizeMode: 'contain',
    tintColor: 'white',
    shadowRadius: 5,
    shadowOpacity: 0.8,
    shadowColor: 'blue',    
    shadowOffset: { width: 0, height: 0 },    
  }
});

export default style;
