import React, { Component } from 'react';
import { 
  Text,   
  View,
  StyleSheet
 } from 'react-native';
import PropTypes from 'prop-types'; 

import colors from 'App/config/colors';

class EmptyProfileImage extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[style.mainContainer, {backgroundColor: this.props.bgColor}, this.props.style]}>
        <Text style={[style.text, {color: this.props.textColor, fontSize: this.props.textSize}]}>{this.props.firstName.substring(0, 1)}{this.props.lastName.substring(0, 1)}</Text>
      </View>
    )
  }
}

EmptyProfileImage.defaultProps = {
  bgColor: colors.SYSTEM_LIGHT_GRAY,
  textColor: colors.IOS_GREEN,
  firstName: '',
  lastName: '',
  textSize: 14,
}

const style = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
  }
})

export default EmptyProfileImage;
