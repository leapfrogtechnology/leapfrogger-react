import React, { Component, PropTypes } from 'react';
import { 
  Animated,
  View,
  Image,
  ActivityIndicator
  } from 'react-native';

import style from './style';
import colors from 'App/config/colors';
import Button from 'App/components/Button';

const FETCH_STATE = "fetch";
const NORMAL_STATE = "normal";
const ERROR_STATE = "error";

class StateFullScreen extends Component {

  constructor(props) {
    super(props)

  }

  _renderEmptyScreen = () => {
    return (
      <View style={style.emptyView}>
          <Button 
            style={style.reloadButton}
            title={'Reload'}
            onPress={this.props.reloadButtonAction}
          />
      </View>
    )
  }

  _renderActivityIndicator = () => {
    return (
      <View style={[style.activityContainer, style.container, style.horizontal]}>
        <ActivityIndicator size="large" color={colors.GRAY} />
      </View>
    )
  }

  _conditionalRender = () => {
    switch (this.props.state) {
      case NORMAL_STATE:
        return this.props.contentView
        break
      case FETCH_STATE:
        return this._renderActivityIndicator();
        break
      case ERROR_STATE:
        return this._renderEmptyScreen();
        break
      default:
        break
    }
  }

  render() {
    return (
      <View style={[style.mainContainer, this.props.style]}>
        {
          this._conditionalRender()
        }
      </View>
    )
  }

}

StateFullScreen.defaultProps = {
  state: NORMAL_STATE,
  style: {},
  onPress: {}
}

export default StateFullScreen;
