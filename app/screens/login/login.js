import React, { Component } from 'react';
import { 
  View, 
  Text,
  Image,  
  TextInput,
 } from 'react-native';

import { BlurView } from 'react-native-blur';
import { setInterval } from 'core-js/library/web/timers';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

import style from './styles';
import Button from './../../components/Button';
import { IOS_GOOGLE_CLIENT_ID } from './../../constants/keysConstant';

import logo from '../../../assets/images/logo-with-name.png';
import splash from '../../../assets/images/splash-screen.png';

 class LoginScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._setupGoogleSignin();
  }

  _login = () => {
    console.log('mock login');
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

  render() {
    return (
      <View style={style.mainContainer}>
        <View style={style.logoContainer}>
          <Image source={logo} style={style.logoImage}/>
        </View>
        <View style={style.formContainer}>
          <View style={style.formSubContainer}>
            <View style={style.emailFieldWrapper}>
              <TextInput
                ref={(email) => this.email = email }
                placeholder='Email'
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={ false }
                style={ style.emailField }
                keyboardType='email-address'
                onChangeText={
                  (text) => {
                    this.setState({ email: text });

                    // this._validateEmail(text);
                  }
                }
                underlineColorAndroid='#bbb'
                placeholderTextColor='#bbb'
                onSubmitEditing={ () => this.refs.Password.focus() }
              />
            </View>
            <View style={style.passwordFieldWrapper}>
              <TextInput
                ref='Password'
                placeholder='Password'
                secureTextEntry={ true }
                style={ style.passwordField }
                placeholderTextColor='#bbb'
                underlineColorAndroid='transparent'
                onChangeText={ (text) => this.setState({ password: text, isValidPassword: true }) }
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
