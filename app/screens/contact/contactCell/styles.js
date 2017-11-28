import { StyleSheet } from 'react-native';

import colors from 'App/config/colors';

const style = StyleSheet.create({
  
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  contactImage: {
    width: 60,
    height: 60,
    // borderColor: 'black',
    borderRadius: 30,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 0 },
    resizeMode: 'contain',
    // backgroundColor: 'blue',
    margin: 4,    
  },
  titleContainer: {
    flex: 0.8,
    justifyContent: 'center',
  },
  titleSubContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center', 
    alignContent: 'center',   
  },
  titleLabel: {
    // backgroundColor: 'pink',
    flex: 0.5,
    alignContent: 'flex-end',
    paddingTop: 16,
    paddingBottom: -16,
    fontSize: 16,
  },
  subTitleLabel: {
    flex: 0.5,    
    fontSize: 12,
  },
  buttonContainer: {
    flex: 0.2,
    alignContent: 'flex-end',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 35,
  },
  moreImage: {
    width: 18,        
    marginHorizontal: 8,
    resizeMode: 'contain',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
    shadowOpacity: 0.8,
  },
  moreButton: {
    alignSelf: 'center',
    justifyContent: 'center',    
    // backgroundColor: 'purple',
  },
  callMessageButtonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    right: 46,

  },
  callImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain', 
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 1,
    shadowOpacity: 0.8,   
  },
  callButton: {
    alignItems: 'center',
    // backgroundColor: 'red',
    padding: 6,    
  },
  messageImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain', 
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 1,
    shadowOpacity: 0.8,   
  },
  messageButton: {
    alignItems: 'center',
    // backgroundColor: 'blue',
    padding: 6,    
  }

});

export default style;
