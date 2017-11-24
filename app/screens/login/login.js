import React, { Component } from 'react';
import { 
  View, 
  Text,
  Image,  
  TextInput,
 } from 'react-native';

import {Keyboard} from 'react-native' 
import { BlurView } from 'react-native-blur';
import { setInterval } from 'core-js/library/web/timers';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

import style from './styles';
import Button from './../../components/Button';
import { validateEmail } from './../../utils/validator';
import { startTabScreen } from './../../navigator/tabNavigator';
import { IOS_GOOGLE_CLIENT_ID, loginCredentials } from './../../constants/credentials';

import logo from '../../../assets/images/logo-with-name.png';
import splash from '../../../assets/images/splash-screen.png';

 class LoginScreen extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      email: '',
      password: '',
      isEmailValid: false,
      errorMessage: '',
    }
  }

  componentDidMount() {
    this._setupGoogleSignin();
  }

  _login = () => {
    Keyboard.dismiss();
    this._setErrorMessage();    
    if (this.state.email === loginCredentials.email && this.state.password === loginCredentials.password) {
      startTabScreen();      
    } else {
      // incorrect email / password
      this._setErrorMessage('Incorrect Credentials!');      
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
      console.log(user);
      this.setState({user});
      this.props.onLogin(user);      
    }
    catch(err) {
      console.log("Play services error", err.code, err.message);
    }
  }

  _googleSignIn() {
    GoogleSignin.signIn()
    .then((user) => {
      this.setState({user: user});
      this.props.onLogin(user);
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }

  _validateEmail = (email) => {
    isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      this._setErrorMessage('Invalid Email!');
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
              />
            </View>
          </View>
          <View style={style.loginButtonWrapper}>
            <Button 
              style={style.loginButton}
              title={'Login'}
              onPress={this._login.bind(this)}
            />
          </View>
        </View>
        <View style={style.buttonContainer}>
          <GoogleSigninButton
            style={{width: 212, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this._googleSignIn}/>
        </View>
      </View>
    );
  }

 }

 export default LoginScreen
