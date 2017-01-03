// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
// } from 'react-native';

// import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

// class GoogleSigninComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: null
//     };
//   }

//   componentDidMount() {
//     this._setupGoogleSignin();
//   }

//   async _setupGoogleSignin() {
//     try {
//       await GoogleSignin.hasPlayServices({ autoResolve: true });
//       await GoogleSignin.configure({
//         // scopes: ["https://www.googleapis.com/auth/drive.readonly"],
//         iosClientId: '515510993234-ifd7bhc5hgsujd53j6fhlltuovg75l02.apps.googleusercontent.com',
//         webClientId: '515510993234-ifd7bhc5hgsujd53j6fhlltuovg75l02.apps.googleusercontent.com',
//         offlineAccess: false
//       });

//       const user = await GoogleSignin.currentUserAsync();
//       console.log(user);
//       this.setState({user});
//     }
//     catch(err) {
//       console.log("Google signin error", err.code, err.message);
//     }
//   }

//   _signIn() {
//     GoogleSignin.signIn()
//     .then((user) => {
//       console.log(user);
//       this.setState({user: user});
      
//     })
//     .catch((err) => {
//       console.log('WRONG SIGNIN', err);
//     })
//     .done();
//   }

//   _signOut() {
//     GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
//       this.setState({user: null});
//     })
//     .done();
//   }

//    render() {

//     return ;
//   }

// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
// AppRegistry.registerComponent('GoogleSigninComponent', () => GoogleSigninComponent);