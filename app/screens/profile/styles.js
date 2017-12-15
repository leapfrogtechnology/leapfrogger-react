import { StyleSheet } from 'react-native';

import colors from 'App/config/colors';
import { getWidth, getHeight } from 'App/utils/dimension';

export const DOT_MARGIN = -28;
export const AVATAR_SIZE = 100;
export const STICKY_HEADER_HEIGHT = 60;
export const PARALLAX_HEADER_HEIGHT = 260;

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
    backgroundColor: 'red',//'rgba(0,0,0,.4)',
    height: PARALLAX_HEADER_HEIGHT,
    backgroundColor: colors.LF_DARK_GRREEN,
    shadowColor: colors.LF_GRAY,
    shadowOffset: { width: 0, height: 2.5 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
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
  photoContainer: {
    flex: 0.25,
    paddingTop: 66,  
    paddingHorizontal: 25,
    alignItems: 'center',    
    flexDirection: 'column',
  },
  avatar: {
    marginBottom: 5,
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    borderWidth: 2,    
    borderRadius: AVATAR_SIZE / 3,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    borderColor: colors.LIGHT_GRAY,
    shadowOffset: { width: 0, height: 0 }  
  },
  sectionSpeakerText: {
    fontSize: 20,    
    color: 'white',
    paddingVertical: 4
  },
  designationText: {
    fontSize: 12, 
    color: colors.SYSTEM_LIGHT_GRAY,    
  },
  sectionTitleText: {
    fontSize: 15,
    fontWeight: '800',
    color: 'white',    
    paddingVertical: 5
  },
  listView: {

  },
  cell: {
    flex: 1,    
    height: 66, 
    paddingHorizontal: 16, 
    paddingTop: 10,           
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
    fontWeight: '500',
    paddingTop: 8,
    color: colors.LF_DARK_GRREEN,
  },
  dataText: {
    flex: 1,
    height: 40,
    marginTop: -4,    
    fontSize: 18,
  },
  phoneMessageContainer: {
    flex: 0.1,
    flexDirection: 'row',    
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  phoneAndMessageButtonImage: {
    width: 50,
    height: 50,
    tintColor: 'white',    
    marginHorizontal: 6,  
    paddingHorizontal: 2,                
    resizeMode: 'contain',    
  },
  messageButtonImage: {
    width: 50,
    height: 50,
    tintColor: 'white',
    marginHorizontal: 4,
    paddingHorizontal: 6,            
    resizeMode: 'contain',
  },
  simpleTextCell: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
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
    right: 4,
    transform: [{ rotate: '90deg'}],
  },
  moreButton: {

  },
  moreButtonImage: {
    width: 27,
    height: 23,
    marginTop: 5,
    resizeMode: 'contain',
    tintColor: 'white',
    shadowRadius: 5,
    shadowOpacity: 0.8,
    shadowColor: 'blue',    
    shadowOffset: { width: 0, height: 0 },    
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  imageNumberContainer: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 0.33,
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingHorizontal: 8,
  },
  phoneContainer: {
    alignItems: 'flex-start',
  },
  messageContainer: {
    alignItems: 'flex-end',
  },
  nameNumberFavContainer: {
    flex: 0.45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameNumberContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -48,
  },
  favButton: {
    width: 44,
    height: 44,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  favImage: {
    width: 27,
    height: 27,
    resizeMode: 'contain',
  }
});

export default style;
