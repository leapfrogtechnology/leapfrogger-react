import React, { Component, PropTypes } from 'react';
import { 
  Animated,
  View,
  Text,
  Image,
  ActivityIndicator
  } from 'react-native';

import style from './style';
import colors from 'App/config/colors';
import Button from 'App/components/Button';

const FETCH_STATE = "fetch";
const NORMAL_STATE = "normal";
const EMPTY_STATE = "empty";
const ERROR_STATE = "error";

class StateFullScreen extends Component {

  constructor(props) {
    super(props)

  }

  _renderErrorScreen = () => {
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
      <View style={[style.activityContainer, style.container]}>
        <View style={[style.container, {flex: 1, marginBottom: this.props.bottomMargin}]}>
          <ActivityIndicator size="large" color={colors.IOS_GREEN} style={[style.activityIndicator, {paddingBottom: 8}]} />
          <Text style={style.messageLabel}>{this.props.message}</Text>
        </View>
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
        return this._renderErrorScreen();
        break
      default: // emptyState
        return this.props.emptyScreen;      
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
  message: 'LOADING DATA',
  style: {},
  onPress: {},
  bottomMargin: 0,
  emptyScreen: null,
}

export default StateFullScreen;
