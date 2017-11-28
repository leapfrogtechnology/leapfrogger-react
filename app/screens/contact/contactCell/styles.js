import { StyleSheet } from 'react-native';

import colors from 'App/config/colors';

const style = StyleSheet.create({
  
  mainContainer: {
    flex: 1,
    paddingVertical: 8,
    flexDirection: 'row',    
  },
  imageContainer: {
    paddingHorizontal: 8,        
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  contactImage: {
    margin: 4,        
    width: 60,
    height: 60,
    borderWidth: 1,    
    borderRadius: 30,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    resizeMode: 'contain',
    // backgroundColor: 'blue',
    borderColor: colors.LIGHT_GRAY,
    shadowOffset: { width: 0, height: 0 },    
  },
  titleContainer: {
    flex: 0.8,
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
  },
  subTitleLabel: {
    flex: 0.5,    
    fontSize: 12,
  },
  buttonContainer: {
    flex: 0.2,
    height: 35,
    alignSelf: 'center',
    alignContent: 'flex-end',
    justifyContent: 'center',
  },
  moreImage: {
    width: 18,        
    marginHorizontal: 8,
    resizeMode: 'contain',
    shadowRadius: 4,
    shadowOpacity: 0.8,
    shadowColor: 'black',    
    shadowOffset: { width: 0, height: 0 },    
  },
  moreButton: {
    alignSelf: 'center',
    justifyContent: 'center',    
    // backgroundColor: 'purple',
  },
  callMessageButtonsContainer: {
    right: 46,
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  callImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain', 
    shadowColor: 'black',
    shadowRadius: 1,
    shadowOpacity: 0.8,  
    shadowOffset: { width: 0, height: 0 },    
  },
  callButton: {
    padding: 6,    
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  messageImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain', 
    shadowColor: 'black',
    shadowRadius: 1,
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 0 },    
  },
  messageButton: {
    padding: 6,    
    alignItems: 'center',
    // backgroundColor: 'blue',
  }

});

export default style;
