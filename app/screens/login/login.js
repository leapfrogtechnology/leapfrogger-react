import React, { Component } from 'react';
import { 
  View, 
  Text,
  Image,  
  TextInput,
 } from 'react-native';

import { Keyboard } from 'react-native'; 
import { BlurView } from 'react-native-blur';
import { setInterval } from 'core-js/library/web/timers';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { GoogleSignin } from 'react-native-google-signin';

import style from './styles';
import Button from 'App/components/Button';
import { validateEmail } from 'App/utils/validator';
import { startTabScreen } from 'App/navigator/tabNavigator';
import { IOS_GOOGLE_CLIENT_ID, loginCredentials } from 'App/constants/credentials';
import { INCORRECT_CREDENTIALS, INVALID_Email, WRONG_SIGNIN, GOOGLE_PLAY_SERVICE_ERROR } from 'App/constants/errorConstants';

import googleLogo from '../../../assets/images/google.png';
import logo from '../../../assets/images/logo-with-name.png';
import splash from '../../../assets/images/splash-screen.png';

const GuestUser = {
  guest: true
}
 class LoginScreen extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      email: '',
      password: '',
      errorMessage: '',
    }    
  }

  _presetLoginData = () => {
    this.setState({
      email: loginCredentials.email,
      password: loginCredentials.password,
    });
  }

  componentDidMount() {  
    this._presetLoginData();
    this._setupGoogleSignin();
  }

  _login = () => {
    Keyboard.dismiss();
    this._setErrorMessage();    
    if ((this.state.email === loginCredentials.email && this.state.password === loginCredentials.password) || (this.props.isLoggedIn)) {
      this.props.onLogin(GuestUser);
      startTabScreen();      
    } else {
      // incorrect email / password
      this._setErrorMessage(INCORRECT_CREDENTIALS.message);      
    }
  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        iosClientId: IOS_GOOGLE_CLIENT_ID,
        offlineAccess: false
      });

      const user = await GoogleSignin.currentUserAsync();
      if (user) {
        this.props.validateEmail(user.accessToken);
        this.props.onLogin(user);
        // this._login();
      }      
    }
    catch(err) {
      console.log(GOOGLE_PLAY_SERVICE_ERROR.message, err.code, err.message);
    }
  }

  _googleSignIn = () => {
    GoogleSignin.signIn()
    .then((user) => {
      this.props.validateEmail(user.accessToken);
      console.log('isLoggedIn---', this.props.isEmailValid);            
      this.props.onLogin(user);
      this._login();      
    })
    .catch((err) => {
      console.log(WRONG_SIGNIN.message, err);
    })
    .done();
  }

  _validateEmail = (email) => {
    isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      this._setErrorMessage(INVALID_Email.message);
    }
  }

  _setErrorMessage = (message) => {
    this.setState({ errorMessage: message })
  }

  render() {
    return (
      <View style={style.mainContainer}>
        <View style={style.logoContainer}>
          <Image source={logo} style={style.logoImage}/>
        </View>
        <View style={style.formContainer}>
          <View style={style.errorLabelContainer}>
            <Text style={style.errorLabel}>{ this.state.errorMessage }</Text>
          </View>
          <View style={style.formSubContainer}>
            <View style={style.emailFieldWrapper}>
              <TextInput
                ref={(component) => this.emailField = component }
                placeholder='Email'
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={ false }
                style={ style.emailField }
                keyboardType='email-address'
                onFocus={() => this._setErrorMessage()}
                onChangeText={
                  (text) => {
                    this.setState({ email: text });
                  }
                }
                underlineColorAndroid='#bbb'
                placeholderTextColor='#bbb'
                onSubmitEditing={ () => {
                  this._validateEmail(this.state.email);                  
                  this.passwordField.focus()
                }}
                value={this.state.email}
              />
            </View>
            <View style={style.passwordFieldWrapper}>
              <TextInput
                ref={(component) => this.passwordField = component }
                returnKeyType='default'
                placeholder='Password'
                secureTextEntry={ true }
                style={ style.passwordField }
                placeholderTextColor='#bbb'
                onFocus={() => this._validateEmail(this.state.email)}                
                underlineColorAndroid='transparent'
                onChangeText={ (text) => this.setState({ password: text, isValidPassword: true }) }
                onSubmitEditing={ () => { this._login() } }
                value={this.state.password}                
              />
            </View>
          </View>
          <View style={style.loginButtonWrapper}>
            <Button 
              style={style.loginButton}
              title={'Login'}
              onPress={() => this._login()}
            />
          </View>
        </View>
        <View style={style.buttonContainer}>
          <Button
            style={style.googleLoginButton}
            title={'Sign in with Google'}
            titleStyle={style.googleTitle}
            source={googleLogo}
            imageStyle={style.googleImage}
            onPress={() => this._googleSignIn()}
          />
        </View>
      </View>
    );

  }

 }

 export default LoginScreen
