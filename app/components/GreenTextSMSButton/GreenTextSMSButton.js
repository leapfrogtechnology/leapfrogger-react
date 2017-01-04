import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinkingButton from '../LinkingButton/LinkingButton';


export default class GreenTextSMSButton extends LinkingButton {
  constructor(props) {
    super(props);
    this.state = {linkType: 'sms:'};
  }

  render() {
    if (this.props.url === null) {
      return (
        <Image style={[styles.phoneImage, styles.contactRowImage]}
               source={require('../../images/ic_message_white_24dp.png')}/>
      )
    } else {
      return (
        <TouchableOpacity
          onPress={this._handleClick.bind(this)}>
          <Image style={[styles.phoneImage, styles.contactRowImage]}
                 source={require('../../images/ic_message_white_24dp.png')}/>
        </TouchableOpacity>
      )
    }
  }
}

const styles = StyleSheet.create({
  phoneImage: {
    height: 25,
    width: 25,
    tintColor: 'green'
  },
  contactRowImage: {
    height: 20,
    width: 20
  }
});
