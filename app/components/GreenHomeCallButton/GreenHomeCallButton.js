import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinkingButton from '../LinkingButton/LinkingButton';

export default class GreenHomeCallButton extends LinkingButton {
  constructor(props) {
    super(props);
    this.state = {linkType: 'tel:'};
  }

  render() {
    if (this.props.url === null) {
      return (
        <Image style={[styles.contactRowImage, this.props.color && {tintColor: this.props.color}]}
               source={require('../../images/ic_home_black_24dp.png')}/>
      )
    } else {
      return (
        <TouchableOpacity
          onPress={this._handleClick.bind(this)}>
          <Image style={[styles.contactRowImage, this.props.color && {tintColor: this.props.color}]}
                 source={require('../../images/ic_home_black_24dp.png')}/>
        </TouchableOpacity>
      )
    }
  }
}

const styles = StyleSheet.create({
  contactRowImage: {
    height: 28,
    width: 28
  }
});
