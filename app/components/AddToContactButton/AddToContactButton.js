import React, {Component} from 'react';
import {Image, StyleSheet, TouchableHighlight} from 'react-native';
import Contacts from 'react-native-contacts';

export default class AddToContactButton extends Component {
  constructor(props) {
    super(props);
  }

  _handleClick() {
    let employee = this.props.employee;
    let newPerson = {
      company: "leapfrog",
      emailAddresses: [{
        label: "work",
        email: employee.username,
      }],
      familyName: employee.firstName,
      middleName: employee.middleName,
      givenName: employee.lastName,
      phoneNumbers: [{
        label: "mobile",
        number: employee.contact.mobilePhone,
      }, {
        label: "home",
        number: employee.contact.homePhone,
      }]
    };

    Contacts.addContact(newPerson, (err) => {
      if (err) {
        console.log('contact could not be created', err)
      } else {
        console.log(newPerson)
      }
    });
  }

  render() {
    return (
      <TouchableHighlight
        onPress={this._handleClick.bind(this)}
        underlayColor='#ff3c00'
        style={styles.favIconContainer}>
        <Image style={styles.favIcon} source={require('../../images/ic_add_black_24dp.png')}/>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  favIconContainer: {
    backgroundColor: '#FF5722',
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -20,
    right: 20,
    elevation: 10
  },
  favIcon: {
    height: 25,
    width: 25,
    tintColor: 'white'
  }
});
