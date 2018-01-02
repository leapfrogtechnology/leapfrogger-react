import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../config/colors';

import { getWidth, getHeight } from 'App/utils/dimension';

const style = StyleSheet.create({
  
  container: {
    flex: 1,
  },
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
  formContainer: {
    flex: 0.5,
    width: 300,    
    height: getHeight() * 0.5,
    borderRadius: 12,      
    paddingHorizontal: 25,
    flexDirection: 'column',
    backgroundColor: '#eff7f3',        
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.4,
    // shadowRadius: 5,
  },
  formSubContainer: {
    flex: 1,
    justifyContent: 'center',  
  },
  emailFieldWrapper: {
    marginVertical: 4,
    paddingHorizontal: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#6e6f72',        
  },
  emailField: {
    height: 44,
  },
  passwordFieldWrapper: {
    marginVertical: 4,
    paddingHorizontal: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#6e6f72',
  },
  passwordField: {
    height: 44, 
  },
  loginButtonWrapper: {
    justifyContent: 'flex-end',
    marginBottom: 35,
    height: 44,
    borderBottomColor: '#6e6f72',    
  },
  loginButton: {
    height: 44,
  },
  separator: {

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
    borderWidth: 0,
    // shadowColor: colors.LF_GRAY,
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
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
