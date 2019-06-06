import React, { Component } from 'react';
import {
  View,
  Image,
  Alert,
  Platform,
  ActivityIndicator
 } from 'react-native';

import { Keyboard } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';

import style from './styles';
import colors from 'App/config/colors';
import Button from 'App/components/Button';
import { startTabScreen } from 'App/navigator/tabNavigator';
import { IOS_GOOGLE_CLIENT_ID, ANDROID_GOOGLE_CLIENT_ID } from 'App/constants/credentials';
import { GOOGLE_PLAY_SERVICE_ERROR } from 'App/constants/errorConstants';

import googleLogo from '../../../assets/images/google.png';
import logo from '../../../assets/images/logo-with-name.png';

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

  componentDidMount() {
    this.setState({ isValidating: true });
    this._setupGoogleSignin()
    .then(() => {
      setTimeout(() => {
        this.setState({ isValidating: false });
      }, 2000)
    })
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
    .catch((err) => this._showAlertWithMessage(err.message))
    .done(() => { this.setState({revokingAccess: false}) })
  }

  _showAlertWithMessage = (msg, action) => {
    Alert.alert(
      'Unauthorized\n',
      msg,
      [
        {text: 'OK', onPress: () => action},
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
        this._showAlertWithMessage(this.props.validationResponse.error, this._revokeGoogleSigninAccess())
      }
    } else {
      throw 'err'
    }
  }

  _getConfig = () => {
    if (Platform.OS === 'ios') {
      return {
        iosClientId: IOS_GOOGLE_CLIENT_ID,
        offlineAccess: false
      }
    } else {
      return {
        webClientId: ANDROID_GOOGLE_CLIENT_ID,
        offlineAccess: false
      }
    }
  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure(this._getConfig());
    }
    catch(err) {
      this._showAlertWithMessage(GOOGLE_PLAY_SERVICE_ERROR.message)
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
        this._showAlertWithMessage('Error Occured:', err.message)
      })
      .done(() => this.setState({ isValidating: false }))
    })
    .catch((err) => {
      this._showAlertWithMessage('Error Occured:',err.message)
    })
    .done(() => this.setState({ disableBtn: false }))
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
        <View style={style.buttonContainer}>
          {
            this.state.isValidating &&
            <ActivityIndicator size="large" color={colors.IOS_GREEN} style={[style.activityIndicator]} />
          }
          <Button
            ref={component => this.googleSigninButton = component}
            style={[style.googleLoginButton, {backgroundColor: this.state.disableBtn || this.state.isValidating ? 'gray' : colors.GOOGLE_BLUE}]}
            title={'Sign in with Google'}
            titleStyle={style.googleTitle}
            source={googleLogo}
            disabled={this.state.revokingAccess || this.state.disableBtn || this.state.isValidating}
            imageStyle={style.googleImage}
            onPress={() => this._googleSignIn()}
          />
        </View>
      </View>
    );

  }

 }

 export default LoginScreen
