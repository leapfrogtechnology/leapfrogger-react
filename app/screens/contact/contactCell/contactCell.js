import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight
 } from 'react-native';

import Communications from 'react-native-communications'; 
 
import style from './styles';
import colors from 'App/config/colors';
import screens from 'App/constants/screens';
import ProgressiveImage from 'App/components/progressiveImage';

import moreImage from './../../../../assets/images/more.png';
import callImage from './../../../../assets/images/call.png';
import messageImage from './../../../../assets/images/message.png';
import placeHolderImage from './../../../../assets/images/default.png';

 class ContactCell extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMoreButtonPressed: false
    }
  }

  _onCellSelection = () => {
    this.props.navigator.push({
      screen: screens.PROFILE_SCREEN.id,
      animated: true,
      overrideBackPress: true,
      navigatorStyle: {
        drawUnderNavBar: true,
        navBarTranslucent: true,
        // navBarTransparent: true,
        navBarTextColor: 'white',
        navBarTransparency: 1,  
        navBarButtonColor: 'white',                  
        navBarLeftButtonColor: 'white',
        navBarRightButtonColor: 'white',
      },
      title: '',
      passProps: {
        data: {
          profile: this.props.data
        }
      }        
    });
  }

  _toggleButtonState = () => {
    this.setState((oldState) => {
      return { isMoreButtonPressed: !oldState.isMoreButtonPressed }
    })
  }

  _moreButtonPressed = (event) => {
    this._toggleButtonState();
  }

  _callButtonPressed = (event) => {
    console.log('call');
    Communications.phonecall(this.props.data.contact.mobilePhone, true)
    this._toggleButtonState();    
  }

  _messageButtonPressed = (event) => {
    console.log('message');
    Communications.text(this.props.data.contact.mobilePhone)    
    this._toggleButtonState();    
  }

  _showCallMessageButtons = (event) => {
    return (
    <View style={style.callMessageButtonsContainer}>
      <TouchableOpacity style={style.callButton} onPress={() => this._callButtonPressed()}>
        <Image source={callImage} style={style.callImage}/>
      </TouchableOpacity>
      <TouchableOpacity style={style.messageButton} onPress={() => this._messageButtonPressed()}>
        <Image source={messageImage} style={style.messageImage}/>
      </TouchableOpacity>
    </View>
    )
  }

  render() {
    return (
      <TouchableHighlight onPress={() => this._onCellSelection()} underlayColor={colors.LIGHT_GRAY} activeOpacity={0.4}>
        <View style={ style.mainContainer }>
          <View style={style.imageContainer}>
            {/* <ProgressiveImage source={{uri: this.props.avatarUrl}} thumbnail={placeHolderImage} style={style.contactImage} /> */}
            <Image source={{uri: this.props.avatarUrl}} style={style.contactImage}/>
          </View>
          <View style={style.titleContainer}>
            <View style={style.titleSubContainer}>
              <Text style={style.titleLabel}>{this.props.data.firstName} {this.props.data.lastName}</Text>
              <Text style={style.subTitleLabel}>{this.props.data.contact.mobilePhone}</Text>
            </View>
          </View>
          <View style={style.buttonContainer}>
            {
              this.state.isMoreButtonPressed ? this._showCallMessageButtons() : null
            }
            <TouchableOpacity style={style.moreButton} onPress={() => this._moreButtonPressed()}>
              <Image source={moreImage} style={style.moreImage}/>
            </TouchableOpacity>
          </View>
          <View style={style.separator}/>
        </View>
      </TouchableHighlight>
    );
  }

 }

 export default ContactCell
