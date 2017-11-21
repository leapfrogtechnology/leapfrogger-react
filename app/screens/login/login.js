import React, { Component } from 'react';
import { 
  View, 
  Text,
  Image,  
  TextInput,
 } from 'react-native';

import { BlurView } from 'react-native-blur';

import Button from './../../components/Button';

import style from './styles';
import logo from '../../../assets/images/logo-with-name.png';
import splash from '../../../assets/images/splash-screen.png';

 class LoginScreen extends Component {

  constructor() {
    super();
  }

  componentWillMount() {

  }

  _login = (event) => {
    console.log('x0x0x0x0', this.email);
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
              onPress={console.log('asd')}
            />
          </View>
        </View>
      <View style={style.buttonContainer}>
        <Button 
          style={style.googleLoginButton}
          title={'Signin with Google'}
          onPress={console.log('asd')}
        />
      </View>
    </View>
    );
  }

 }

 export default LoginScreen
