import React, { Component } from 'react';
import { 
  View, 
  Text,
  Image,  
  TextInput,
 } from 'react-native';

import { BlurView } from 'react-native-blur';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

import Button from './../../components/Button';

import style from './styles';
import logo from '../../../assets/images/logo-with-name.png';
import splash from '../../../assets/images/splash-screen.png';

 class LoginScreen extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this._setupGoogleSignin();
  }

  _login = (event) => {
    console.log('x0x0x0x0', this.email);
  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        iosClientId: '663889381642-iqslrisaiqqrr5dhbmmol8ahtos97v2d.apps.googleusercontent.com',
        offlineAccess: false
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
      this.setState({user});
    }
    catch(err) {
      console.log("Play services error", err.code, err.message);
    }
  }

  _googleSignIn() {
    GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
      this.setState({user: user});
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
              onPress={console.log('asssd')}
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
