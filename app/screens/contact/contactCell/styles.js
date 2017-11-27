import { StyleSheet } from 'react-native';

import colors from '../../../config/colors';

const style = StyleSheet.create({
  
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
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
    backgroundColor: 'blue',
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
    backgroundColor: 'pink',
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
    alignContent: 'center',
    justifyContent: 'center'
  },
  moreButton: {
    alignSelf: 'center',
    justifyContent: 'center',    
    backgroundColor: 'purple',        
  },
  callMessageButtonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    
  },
  callButton: {
    width: 44,
    height: 44,
  },
  messageButton: {
    width: 44,
    height: 44,
  }

});

export default style;
