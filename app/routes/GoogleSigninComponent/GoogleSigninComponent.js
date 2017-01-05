import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

class GoogleSigninComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._setupGoogleSignin();
  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        // scopes: ["https://www.googleapis.com/auth/drive.readonly"],
        iosClientId: '515510993234-ifd7bhc5hgsujd53j6fhlltuovg75l02.apps.googleusercontent.com',
        webClientId: '515510993234-ifd7bhc5hgsujd53j6fhlltuovg75l02.apps.googleusercontent.com',
        offlineAccess: false
      });

      const user = await GoogleSignin.currentUserAsync();
      if (user) {
      	this.props.logInSuccess(user)
      }
    }
    catch(err) {
      console.log("Google signin error", err.code, err.message);
    }
  }

  _signIn() {
    GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
      this.props.logInSuccess(user)
      // this.setState({user: user});
      console.log('This is props after login success')
      console.log(this.props.user)
      
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }

  _signOut() {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      this.props.logOut()
    })
    .done();
  }

   render() {
   	console.log("#######", this.props)
    if (!this.props.session.isLoggedIn) {
     console.log("User from props in GoogleSigninComponent (no user case)")

      return (
        <View style={styles.container}>
          <GoogleSigninButton style={{width: 212, height: 48}} size={GoogleSigninButton.Size.Standard} color={GoogleSigninButton.Color.Light} onPress={this._signIn.bind(this)}/>
        </View>
      );
    }

    if (this.props.session.isLoggedIn) {
    console.log("User from props in GoogleSigninComponent", this.props.user)
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Welcome {this.props.session.user.name}</Text>
          <Text>Your email is: {this.props.session.user.email}</Text>
          <TouchableOpacity onPress={() => {this._signOut(); }}>
            <View style={{marginTop: 50}}>
              <Text>Log out</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default GoogleSigninComponent;