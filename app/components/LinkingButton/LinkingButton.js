import React, {Component}from 'react';
import {Linking} from 'react-native'

export default class LinkingButton extends Component {
  _handleClick() {
    if (!(this.props.linkType === null)) {
      const link = (( this.state === null || this.state.linkType === '' || this.state.linkType === null) ? '' : this.state.linkType)
        + this.props.url;
      Linking.canOpenURL(link).then(supported => {
        if (supported) {
          Linking.openURL(link);
        } else {
          console.log('Don\'t know how to open URI: ' + link);
        }
      });
    }
  };
}

