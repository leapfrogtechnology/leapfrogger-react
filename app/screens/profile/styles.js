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
    backgroundColor: colors.LIGHT_GRAY,
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
  listView: {
    // paddingHorizontal: 16,     
  },
  phoneCell: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 16, 
    paddingVertical: 8,    
  },
  nameTextContainer: {
    flex: 0.9,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
  phoneMessageContainer: {
    flex: 0.1,
    flexDirection: 'row',    
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },

  phoneAndMessageButtonImage: {
    width: 35,
    height: 35,
    marginHorizontal: 4,  
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
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 16,     
  },
  logoutButtonContainer: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  logoutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 44,
    backgroundColor: 'gray',
  }

});

export default style;
