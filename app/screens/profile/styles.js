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
    backgroundColor: colors.Gray_Shades.BORDER_GRAY,
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
    height: PARALLAX_HEADER_HEIGHT,
    backgroundColor: colors.IOS_GREEN,
    // shadowColor: colors.LF_GRAY,
    // shadowOffset: { width: 0, height: 2.5 },
    // shadowOpacity: 0.25,
    // shadowRadius: 2,
  },
  stickySection: {
    justifyContent: 'flex-end',    
    height: STICKY_HEADER_HEIGHT,
    backgroundColor: colors.LF_DARK_GRREEN,
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
  fixedSection: {
    position: 'absolute',
    right: 10,    
    bottom: 10,
  },
  photoContainer: {
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE, 
    borderRadius: (AVATAR_SIZE) / 2,
  },
  imageProfileContainer: {
    // backgroundColor: 'blue',
    height: AVATAR_SIZE + 16,
    width: AVATAR_SIZE + 16,
    // padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 12,    
    borderRadius: (AVATAR_SIZE + 16) / 2,
    borderColor: 'rgba(133, 133, 133, 0.3)',
    overflow: 'hidden',
  },
  placeHolder: {
    marginBottom: 5,
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    borderWidth: 2,    
    borderColor: colors.LIGHT_GRAY,
  },
  sectionSpeakerText: {
    fontSize: 20, 
    letterSpacing: 1,   
    color: 'white',
    paddingVertical: 2
  },
  designationText: {
    fontSize: 12, 
    color: colors.SYSTEM_LIGHT_GRAY,    
  },
  sectionTitleText: {
    fontSize: 18,
    color: 'white', 
    letterSpacing: 1,      
    paddingTop: 8,
  },
  listView: {
    flex: 0.5
    // height: getHeight() - PARALLAX_HEADER_HEIGHT,
  },
  cell: {
    flex: 1,    
    height: 66, 
    paddingHorizontal: 16, 
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
    // paddingTop: 4,
    color: colors.Gray_Shades.LIGHT_TEXT,
    paddingTop: 12,           
  },
  dataText: {
    flex: 1,
    // height: 40,
    // paddingBottom: 4, 
    fontSize: 18,
    marginTop: -13,
    color: colors.Gray_Shades.TEXT    
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
    flex: 1,
    flexDirection: 'row',
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
    color: colors.MILD_RED
  },
  moreButtonContainer: {
    position: 'absolute',
    zIndex: 50,
    top: 26,
    right: 0,
    transform: [{ rotate: '90deg'}],
  },
  moreButton: {
    width: 50,
    height: 44,
    paddingRight: 4,
  },
  moreButtonImage: {
    width: 27,
    height: 23,
    marginTop: 5,
    resizeMode: 'contain',
    tintColor: 'white',
    // shadowRadius: 5,
    // shadowOpacity: 0.8,
    // shadowOffset: { width: 0, height: 0 },    
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: colors.IOS_GREEN
  },
  nameContainer: {
    height: 60,
    justifyContent: 'flex-end'
  },
  imageNumberContainer: {
    flex: 0.75,
    width: getWidth(),
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
    flex: 0.27,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  nameNumberContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  favImage: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    tintColor: 'white',
  },
  simpleTextCellContainer: {
    flex: 0.9,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  iconsContainer: {
    flex: 0.1,
    // paddingTop: 8,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  icons: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: colors.Palette.PURPLE,
  },
  separator: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    height: StyleSheet.hairlineWidth,
    width: getWidth() - 32,
    zIndex: 10,
    backgroundColor: colors.LIGHT_GRAY,
  },
  callMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingBottom: 16,
    backgroundColor: colors.IOS_GREEN
  },
  msgButtonContainer: {
    flex: 1,
    paddingHorizontal: 18,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  callButtonContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  favButtonContainer: {
    position: 'absolute',
    zIndex: 10,
    bottom: 20,
    right: -10,
  },
  googleLoginButton: {
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 44,
    borderWidth: 1,//StyleSheet.hairlineWidth,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
  },
  googleTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "600",
    textAlign: 'center',
    flex: 0.8,
  },
  googleImage: {
    width: 25,
    height: 25,
    tintColor: 'white',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  importButtonContainer: {
    position: 'absolute',
    top: 50,
    right: 0,
    zIndex: 100,
  }
});

export default style;
