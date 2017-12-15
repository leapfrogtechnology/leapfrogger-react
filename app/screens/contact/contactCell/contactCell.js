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
import EmptyProfileImage from 'App/components/emptyProfileImage';

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

  _toggleButtonState = () => {
    this.setState((oldState) => {
      return { isMoreButtonPressed: !oldState.isMoreButtonPressed }
    })
  }

  _moreButtonPressed = (event) => {
    this._toggleButtonState();
  }

  _showAlertWithMessage = (msg) => {
    Alert.alert(
      'Unauthorized\n',
      msg,
      [
        {text: 'OK'},
      ],
      { cancelable: false }
    )
  }

  _callButtonPressed = (event) => {
    if (this.props.data.contact.mobilePhone) {
      Communications.phonecall(this.props.data.contact.mobilePhone, true)
    } else {
      this._showAlertWithMessage('Cannot Call')
    }
    this._toggleButtonState();    
  }

  _messageButtonPressed = (event) => {
    if (this.props.data.contact.mobilePhone) {      
      Communications.text(this.props.data.contact.mobilePhone);    
    } else {
      this._showAlertWithMessage('Cannot Message')
    }
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
  if (this.props.data === null) { return <View/> }
    return (
      <TouchableHighlight onPress={() => this.props.onPress(this.props.data)} underlayColor={colors.LIGHT_GRAY} activeOpacity={0.4}>
        <View style={ style.mainContainer }>
          <View style={style.imageContainer}>
            {
              this.props.data.avatarUrl ? 
              <Image source={{uri: this.props.data.avatarUrl}} style={[style.contactImage, {resizeMode: 'contain'}]}/>
              :
              <EmptyProfileImage
                firstName={this.props.data.firstName}
                lastName={this.props.data.lastName}
                textSize={18}
                style={style.contactImage}
              />
            }
          </View>
          <View style={style.titleContainer}>
            <View style={style.titleSubContainer}>
              <Text style={style.titleLabel}>{this.props.data.firstName} {this.props.data.lastName}</Text>
              <Text style={style.subTitleLabel}>{this.props.data.contact.mobilePhone || ''}</Text>
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
