import React, { Component } from 'react';
import { 
  View, 
  Text,
  Image,  
  Alert,
  TextInput,
  ActivityIndicator
 } from 'react-native';

import { Keyboard } from 'react-native'; 
import { setInterval } from 'core-js/library/web/timers';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { GoogleSignin } from 'react-native-google-signin';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import style from './styles';
import colors from 'App/config/colors';
import Button from 'App/components/Button';
import { validateEmail } from 'App/utils/validator';
import { startTabScreen } from 'App/navigator/tabNavigator';
import { IOS_GOOGLE_CLIENT_ID, loginCredentials } from 'App/constants/credentials';
import { INCORRECT_CREDENTIALS, INVALID_Email, WRONG_SIGNIN, GOOGLE_PLAY_SERVICE_ERROR } from 'App/constants/errorConstants';

import googleLogo from '../../../assets/images/google.png';
import logo from '../../../assets/images/logo-with-name.png';
import splash from '../../../assets/images/splash-screen.png';

const GuestUser = {
  email: loginCredentials.email,
  password: loginCredentials.password,
}
 class LoginScreen extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      email: '',
      password: '',
      errorMessage: '',
      revokingAccess: false,
      disableBtn: false,
      isValidating: false,
    }    
  }

  _presetLoginData = () => {
    this.setState(GuestUser);
  }

  componentDidMount() {  
    // this._presetLoginData();
    this._setupGoogleSignin();
  }

  _guestLogin = () => {
    if (this.state.email === loginCredentials.email && this.state.password === loginCredentials.password) {
      this.props.onLogin(GuestUser);    
      startTabScreen();
    } else {
      // incorrect email / password
      this._setErrorMessage(INCORRECT_CREDENTIALS.message);      
    }
  }

  _login = () => {
    Keyboard.dismiss();
    this._setErrorMessage();
    if (this.props.isLoggedIn) {
      startTabScreen();      
    }
  }

  _revokeGoogleSigninAccess = () => {
    this.setState({revokingAccess: true})
    GoogleSignin.revokeAccess()
    .done(() => { this.setState({revokingAccess: false}) })
  }

  _showAlertWithMessage = (msg) => {
    Alert.alert(
      'Unauthorized\n',
      msg,
      [
        {text: 'OK', onPress: () => this._revokeGoogleSigninAccess()},
      ],
      { cancelable: false }
    )
  }

  _afterValidation = (user) => {
    if (this.props.validationResponse) {
      if (this.props.validationResponse.hasOwnProperty('success')) {
        this.props.onLogin(user);
        this._login();        
      } else {        
        this._showAlertWithMessage(this.props.validationResponse.error)
      }
    } else {
      throw 'err'
    }
  }

  async _setupGoogleSignin() {
    try {
      console.log('cccccccc')
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        webClientId: '663889381642-scqtb2kgspmer6fit0hqdtr1pevcpadc.apps.googleusercontent.com',
        scopes: ['email', 'openid', 'profile'],
        offlineAccess: false
      });

      const user = await GoogleSignin.currentUserAsync();
      if (user) {
        // this.props.validateEmail(user.accessToken);
        // this.props.onLogin(user);
        // this._login();
      }      
    }
    catch(err) {
      console.log(GOOGLE_PLAY_SERVICE_ERROR.message, err.code, err.message);
    }
  }

  _googleSignIn = () => {
    this.setState({ disableBtn: true });
    GoogleSignin.signIn()
    .then((user) => {
      this.setState({ isValidating: true })
      this.props.validateEmail(user.accessToken)
      .then(() => {
        this._afterValidation(user);        
      })
      .catch((err) => {
        this._showAlertWithMessage('Error Occured')
      })
      .done(() => this.setState({ isValidating: false }))
    })
    .catch((err) => {
      this._revokeGoogleSigninAccess()
      // console.log(WRONG_SIGNIN.message, err);
    })
    .done(() => this.setState({ disableBtn: false }))
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
    <KeyboardAwareScrollView style={style.container} keyboardShouldPersistTaps={'always'}>
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
                underlineColorAndroid='transparent'
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
              onPress={() => this._guestLogin()}
            />
          </View>
        </View>
        <View style={style.buttonContainer}>
          {
            this.state.isValidating &&
            <ActivityIndicator size="large" color={colors.LF_DARK_GRREEN} style={[style.activityIndicator]} />                          
          }
          <Button
            ref={component => this.googleSigninButton = component}
            style={style.googleLoginButton}
            title={'Sign in with Google'}
            titleStyle={style.googleTitle}
            source={googleLogo}
            disabled={this.state.revokingAccess || this.state.disableBtn || this.state.isValidating}
            imageStyle={style.googleImage}
            onPress={() => this._googleSignIn()}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
    );

  }

 }

 export default LoginScreen
