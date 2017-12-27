import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight
 } from 'react-native';

import FastImage from 'react-native-fast-image'
import Communications from 'react-native-communications'; 
 
import style from './styles';
import colors from 'App/config/colors';
import screens from 'App/constants/screens';
import ProgressiveImage from 'App/components/progressiveImage';
import EmptyProfileImage from 'App/components/emptyProfileImage';

import moreImage from './../../../../assets/images/more.png';
import callImage from './../../../../assets/images/call.png';
import messageImage from './../../../../assets/images/message.png';
import placeHolderImage from './../../../../assets/images/default.png';
import phoneCallImage from './../../../../assets/images/phone-call.png';
import phoneMsgImage from './../../../../assets/images/msg.png';

 class ContactCell extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMoreButtonTurnedOn: false
    }
  }

  // _onCellSelection = () => {
  //   this.props.navigator.push({
  //     screen: screens.PROFILE_SCREEN.id,
  //     animated: true,
  //     overrideBackPress: true,
  //     navigatorStyle: {
  //       drawUnderNavBar: true,
  //       navBarTranslucent: true,
  //       navBarTransparent: true,
  //       navBarTextColor: 'white',
  //       navBarTransparency: 1,  
  //       navBarButtonColor: 'white',                  
  //       navBarLeftButtonColor: 'white',
  //       navBarRightButtonColor: 'white',
  //     },
  //     title: '',
  //     passProps: {
  //       data: {
  //         profile: this.props.data
  //       }
  //     }        
  //   });
  // }
  componentWillReceiveProps() {
    // console.log('qqqqq')
  }


  _toggleButtonState = () => {
    this.setState((oldState) => {
      return { isMoreButtonTurnedOn: !oldState.isMoreButtonTurnedOn }
    })
    this.props.moreButtonAction(this.props.data.empId)
  }

  _moreButtonPressed = (event) => {
    this._toggleButtonState();
  }

  _callButtonPressed = (event) => {
    Communications.phonecall(this.props.data.contact.mobilePhone, true)
    this._toggleButtonState();    
  }

  _messageButtonPressed = (event) => {
    Communications.text(this.props.data.contact.mobilePhone)    
    this._toggleButtonState();    
  }

  _showCallMessageButtons = (event) => {
    return (
    <View style={style.callMessageButtonsContainer}>
      <TouchableOpacity style={style.callButton} onPress={() => this._callButtonPressed()}>
        <View style={style.phoneButtonInsideWrapper}>
          <Image source={phoneCallImage} style={style.callImage}/>
        </View>
      </TouchableOpacity>
    </View>
    )
  }

  _imageLoadComplete = () => {
    // console.log('=====00000')
  }

  render() {
    console.log('=====00000', this.props)
    return (
      <TouchableHighlight onPress={() => this.props.onPress(this.props.data)} underlayColor={colors.LIGHT_GRAY} activeOpacity={0.4}>
        <View style={ style.mainContainer }>
          <View style={style.imageContainer}>
            <EmptyProfileImage
              firstName={this.props.data.firstName}
              lastName={this.props.data.lastName}
              textSize={16}
              style={style.contactImage}
            />
            {
              this.props.data.avatarUrl &&
              // <Image 
              //   style={[style.contactImage, {resizeMode: 'contain', position: 'absolute', zIndex: 10}]} 
              //   source={{uri: this.props.data.avatarUrl}}
              //   onLoad={() => this._imageLoadComplete()}
              // />
              <FastImage
                style={[style.contactImage, {position: 'absolute', zIndex: 10}]}
                source={{
                  uri: this.props.data.avatarUrl,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            }
          </View>
          <View style={style.titleContainer}>
            <View style={style.titleSubContainer}>
              <Text style={style.titleLabel}>{this.props.data.firstName} {this.props.data.lastName}</Text>
              <Text style={style.subTitleLabel}>{this.props.data.contact.mobilePhone}</Text>
            </View>
          </View>
          <View style={style.buttonContainer}>
            {
              this._showCallMessageButtons()
            }
          </View>
          <View style={style.separator}/>
        </View>
      </TouchableHighlight>
    );
  }

 }

 export default ContactCell
