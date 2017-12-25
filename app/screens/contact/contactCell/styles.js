import { StyleSheet } from 'react-native';

import colors from 'App/config/colors';
import { getWidth, getHeight } from 'App/utils/dimension';

const AVATAR_SIZE = 60;
const style = StyleSheet.create({
  
  mainContainer: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 8,
    flexDirection: 'row',  
    // backgroundColor: 'red',  
  },
  imageContainer: {
    margin: 4,        
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,    
    borderRadius: AVATAR_SIZE / 2,
    overflow: 'hidden',
    borderColor: colors.LIGHT_GRAY,
    // shadowRadius: 5,
    // shadowColor: 'black',
    // shadowOpacity: 0.6,
    // shadowOffset: { width: 0, height: 0 }, 
  },
  contactImage: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,   
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: 4,    
    justifyContent: 'center',
  },
  titleSubContainer: {
    flex: 1,
    alignContent: 'center',       
    flexDirection: 'column',
    justifyContent: 'center', 
  },
  titleLabel: {
    // backgroundColor: 'pink',
    flex: 0.5,
    fontSize: 16,    
    paddingTop: 16,
    paddingBottom: -16,
    alignContent: 'flex-end',
    color: colors.Gray_Shades.TEXT    
  },
  subTitleLabel: {
    flex: 0.5,    
    fontSize: 12,
    color: colors.Gray_Shades.LIGHT_TEXT
  },
  buttonContainer: {
    width: 40,
    height: 50,
    alignSelf: 'center',
    alignContent: 'flex-end',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  moreImage: {
    width: 18,        
    paddingHorizontal: 8,
    resizeMode: 'contain',
    // shadowRadius: 4,
    // shadowOpacity: 0.8,
    // shadowColor: 'black',    
    // shadowOffset: { width: 0, height: 0 },    
  },
  moreButton: {
    width: 40,
    paddingRight:8,
    alignSelf: 'center',
    alignItems: 'flex-end',
    justifyContent: 'center',    
    // backgroundColor: 'purple',
  },
  callMessageButtonsContainer: {
    right: 34,
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 50,
    // backgroundColor: 'green'
  },
  callImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain', 
    tintColor: colors.Gray_Shades.TEXT
  },
  callButton: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain', 
    tintColor: colors.Gray_Shades.TEXT
  },
  messageButton: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: StyleSheet.hairlineWidth,
    width: getWidth(),
    zIndex: 10,
    backgroundColor: colors.LIGHT_GRAY,
  },

});

export default style;
