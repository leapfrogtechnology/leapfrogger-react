import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../config/colors';

import { getWidth, getHeight } from 'App/utils/dimension';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'column',    
    justifyContent: 'center', 
    width: 0.5 * getWidth().width, 
    backgroundColor: '#e2e2e2',   
  },
  logoContainer: {
    flex: 0.3,
    height: getHeight() * 0.25,
    justifyContent: 'center',
  },
  logoImage: {
    resizeMode: 'contain',
    height: 60,
  },
  buttonContainer: {
    flex: 0.275,
    height: getHeight() * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleLoginButton: {
    height: 44,
    backgroundColor: colors.GOOGLE_BLUE,
    borderWidth: 0
  },
  googleTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "600",
    flex: 0.8,
  },
  googleImage: {
    width: 27,
    height: 27,
    flex: 0.2,
    resizeMode: 'contain',
    marginLeft: 5,
    marginRight: 10,
  },
  errorLabelContainer: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 20,
  },
  errorLabel: {
    color: 'red',
  },
  activityIndicator: {
    position: 'absolute',
    alignItems: 'center',
    top: 0,
    paddingTop: 8,
  }

});

export default style;
