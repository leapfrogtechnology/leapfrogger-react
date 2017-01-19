import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinkingButton from '../LinkingButton/LinkingButton';


export default class GreenPhoneCallButton extends LinkingButton {
  constructor(props) {
    super(props);
    this.state = {linkType: 'tel:'};
  }

  render() {
    if (this.props.url === null) {
      return (
        <Image
          style={styles.contactRowImage}
          source={require('../../images/ic_phone_white_24dp.png')}/>
      )
    } else {
      return (
        <TouchableOpacity
          onPress={this._handleClick.bind(this)}>
          <Image
            style={styles.contactRowImage}
            source={require('../../images/ic_phone_white_24dp.png')}/>
        </TouchableOpacity>
      )
    }
  }
}

const styles = StyleSheet.create({
  contactRowImage: {
    tintColor: 'green',
    height: 28,
    width: 28
  }
});
