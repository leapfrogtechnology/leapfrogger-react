import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../config/colors';

const screen = Dimensions.get('window');

const style = StyleSheet.create({
  
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',    
    justifyContent: 'center', 
    width: 0.5 * screen.width,    
  },
  logoContainer: {
    flex: 0.27,
    justifyContent: 'center',    
  },
  logoImage: {
    resizeMode: 'contain',
    flex: 0.3
  },
  formContainer: {
    flex: 0.5,
    width: 300,    
    borderRadius: 12,      
    shadowColor: '#c4dfd0',
    paddingHorizontal: 25,
    flexDirection: 'column',
    backgroundColor: '#eff7f3',        
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  formSubContainer: {
    flex: 1,
    justifyContent: 'center',  
  },
  emailFieldWrapper: {
    marginVertical: 4,
    paddingHorizontal: 8,
    borderBottomWidth: 1        
  },
  emailField: {
    height: 44,
  },
  passwordFieldWrapper: {
    marginVertical: 4,
    paddingHorizontal: 8,
    borderBottomWidth: 1        
  },
  passwordField: {
    height: 44, 
  },
  loginButtonWrapper: {
    justifyContent: 'flex-end',
    marginBottom: 35,
    height: 44,
  },
  loginButton: {
    height: 44,
  },
  separator: {

  },
  buttonContainer: {
    flex: 0.23,
  },
  googleLoginButton: {
    height: 44,    
  }

});

export default style;
