import React, {Component} from 'react';
import {Image, StyleSheet, TouchableHighlight} from 'react-native';
import Contacts from 'react-native-contacts';

export default class AddToContactButton extends Component {
  constructor(props) {
    super(props);
    this._addEmployeeToContact = this._addEmployeeToContact.bind(this);
  }

  _handleClick() {
    Contacts.checkPermission((err, permission) => {
      if (permission === 'undefined') {
        alert('You are required to give permission to access the contact')
        Contacts.requestPermission((err, permission) => {
          alert(err)
        })
      }
      else if (permission === 'authorized') {
        this._addEmployeeToContact();
      }
      else if (permission === 'denied') {
        alert('Cant add to contacts. Please give permission.')
      }
    })
  }

  _addEmployeeToContact() {
    alert('Authorized')
    Contacts.getAll((err, contacts) => {
      console.log(contacts[0])
      // check for old contact
      // let someRecord = contacts[0]
      // someRecord.emailAddresses.push({
      //   label: "junk",
      //   email: "mrniet+junkmail@test.com",
      // })
      // Contacts.updateContact(someRecord, (err) => { /*...*/ })
    })

    let employee = this.props.employee;
    let newPerson = {
      company: "Leapfrog",
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
        alert('Contact could not be created', err);
        console.log('contact could not be created', err)
      } else {
        alert('Contact saved, Yay');
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
