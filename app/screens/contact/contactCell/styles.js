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
    flex: 0.2,
    height: 60,
    alignSelf: 'center',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
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
    alignSelf: 'center',
    flexDirection: 'row',
    // backgroundColor: 'green'
  },
  callImage: {
    width: 18,
    height: 18,
    resizeMode: 'contain', 
    tintColor: 'white'
  },
  callButton: {
    width: 50,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageImage: {
    width: 18,
    height: 18,
    resizeMode: 'contain', 
    tintColor: 'white',
    padding: 5,
  },
  messageButton: {
    width: 38,
    height: 60,
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
  phoneButtonInsideWrapper: {
    width: 32,
    height: 32,
    backgroundColor: colors.Palette.PURPLE,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  messageButtonInsideWrapper: {
    width: 32,
    height: 32,
    backgroundColor: colors.Palette.PURPLE,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },

});

export default style;
