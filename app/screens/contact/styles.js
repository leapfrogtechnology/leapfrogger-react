import { StyleSheet } from 'react-native';

import colors from 'App/config/colors';

export const AVATAR_SIZE = 100;
export const STICKY_HEADER_HEIGHT = 60;

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

});

export default style;
