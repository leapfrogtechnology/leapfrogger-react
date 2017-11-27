import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  TouchableOpacity
 } from 'react-native';
import style from './styles';

import placeHolderImage from './../../../../assets/images/default.png';

 class ContactCell extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMoreButtonPressed: false
    }
  }

  _moreButtonPressed = (event) => {
    this.setState((oldState) => {
      return { isMoreButtonPressed: !oldState.isMoreButtonPressed }
    })
  }

  _showCallMessageButtons = (event) => {
    console.log('x0x0x0x0')
    // return (
    // <View style={style.callMessageButtonsContainer}>
    //   <TouchableOpacity style={style.callButton}>
      
    //   </TouchableOpacity>
    //   <TouchableOpacity style={style.messageButton}>

    //   </TouchableOpacity>
    // </View>
    // )
  }

  render() {
    return (
      <View style={ style.mainContainer }>
        <View style={style.imageContainer}>
          <Image source={placeHolderImage} style={style.contactImage}/>
        </View>
        <View style={style.titleContainer}>
          <View style={style.titleSubContainer}>
            <Text style={style.titleLabel}>Name</Text>
            <Text style={style.subTitleLabel}>work</Text>
          </View>
        </View>
        <View style={style.buttonContainer}>
          <View>
          {
            this._showCallMessageButtons.bind(this)
          }
          </View>
          <TouchableOpacity style={style.moreButton} onPress={this._moreButtonPressed.bind(this)}>
            <Text>more</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

 }

 export default ContactCell
