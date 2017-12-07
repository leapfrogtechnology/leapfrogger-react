import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity
 } from 'react-native';

import ActionSheet from 'react-native-actionsheet'; 
import Communications from 'react-native-communications'; 
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import Button from 'App/components/Button';
import { startLoginScreen } from 'App/navigator/loginScreenNavigator';

import moreImage from './../../../assets/images/more.png';
import callImage from './../../../assets/images/call.png';
import messageImage from './../../../assets/images/message.png';
import placeHolderImage from './../../../assets/images/default.png';

import { getWidth, getHeight } from 'App/utils/dimension';
import style, { AVATAR_SIZE, STICKY_HEADER_HEIGHT, DOT_MARGIN, PARALLAX_HEADER_HEIGHT } from './styles'; 

const PHONE_NUMBER = 0
const ADDRESS = 1
const EMAIL = 2
const DEPARTMENT = 3
const DOB = 4
const SKYPE = 5

const CANCEL_INDEX = 0
const DESTRUCTIVE_INDEX = 2
const options = ['Cancel', 'Update', 'Logout']
class ProfileScreen extends Component {

  constructor(props) {
    super(props);
  }

  _logout = () => {
    // TODO: Clear all data
    this.props.logout();
    startLoginScreen();
  }

  _moreButtonAction = () => {
    this.actionSheet.show();
  }

  _actionSheetSelection = (index) => {
    switch (index) {
      case 0:
      break
      case 1: // Update
      break
      case 2: // logout
      this._logout();
      default:
      break
    }
  }

  _renderParallaxTableHeaderView = (data) => {
    return (
      <ParallaxScrollView
        onScroll={this.props.onScroll}
        bounce={true}
        headerBackgroundColor="#333"
        stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
        parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
        backgroundSpeed={10}
        renderBackground={() => (
          <View key="background">
            <Image source={{uri: 'https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg'}} style={style.tableHeaderBackgroundImage}/>
            <View style={style.tableHeaderBackgroundOverlay}/>
          </View>
        )}

        renderForeground={() => (
          <View key="parallax-header" style={ style.parallaxHeader }>
            <Image style={ style.avatar } source={{uri: 'https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg'}}/>
            <Text style={ style.sectionSpeakerText }>
              {/* { this.props.data.department.name } */}
            </Text>
            <Text style={ style.sectionTitleText }>
              {/* { this.props.data.department.name } */}
            </Text>
          </View>
        )}

      />
    );
  }

  _renderItems = (item, index) => {
    switch (index) {
      case PHONE_NUMBER: return this._renderPhoneCell();
      case ADDRESS: return this._renderTextCell('Address', '');
      case EMAIL: return this._renderTextCell('Email', this.props.me.username);
      case DEPARTMENT: return this._renderTextCell('Department', '');
      case DOB: return this._renderTextCell('Dob', '');
      case SKYPE: return this._renderTextCell('Skype ID', '');
      case LOGOUT: return this._renderLougoutCell();
    }
  }

  _renderPhoneCell = () => {
    return (
      <View style={style.phoneCell}>
        <View style={style.nameTextContainer}>
          <Text style={style.titleText}>{ this.props.me.firstName } {this.props.me.lastName}</Text>
        </View>
        <View style={style.phoneMessageContainer}>
          <TouchableOpacity style={style.phoneButton} onPress={() => Communications.phonecall('0123456789', true)}>
            <Image source={callImage} style={style.phoneAndMessageButtonImage}/>
          </TouchableOpacity>
          <TouchableOpacity style={style.messageButton} onPress={() => Communications.text('0123456789')}>
            <Image source={messageImage} style={style.phoneAndMessageButtonImage}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _renderTextCell = (text, data) => {
    return (
      <View style={style.simpleTextCell}>
        <Text style={style.titleText}>{text}</Text>
        <Text style={style.dataText}>{data}</Text>
      </View>
    );
  }

  _renderLougoutCell = () => {
    return (
      <View style={style.logoutButtonContainer}>
        <Button 
        style={style.logoutButton}
        title={'Logout'}
        titleStyle={style.logoutTitle}
        onPress={() => this._logout()}
      />
      </View>
    );
  }

  _renderTableView = () => {
    var data = [{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'}]
    // this.props.data.fromProfileTab ? data.push({key: 'f'}) : null
    return (
      <FlatList
        ref="ListView"
        style={style.listView}
        data={data}
        renderItem={({item, index}) => this._renderItems(item, index) }
        renderScrollComponent={props => (
          this._renderParallaxTableHeaderView(props)
        )}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={style.separator}/>}        
      />
    );
  }

  _renderMoreButton = () => {
    return (
      <View style={style.moreButtonContainer}>
        <TouchableOpacity style={style.moreButton} onPress={() => this._moreButtonAction()}>
          <Image source={moreImage} style={style.moreButtonImage}/>
        </TouchableOpacity>
      </View>
    );
  }

  _renderActionSheet = () => {
    return (
      <View>
        <ActionSheet
          ref={component => this.actionSheet = component}
          options={options}
          cancelButtonIndex={CANCEL_INDEX}
          destructiveButtonIndex={DESTRUCTIVE_INDEX}
          onPress={(index) => this._actionSheetSelection(index)}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={ style.mainContainer }>
        {
          this.props.data.fromProfileTab &&                    
          this._renderMoreButton()
        }
        {
          this._renderTableView()
        }
        {
          this._renderActionSheet()
        }
      </View>
    );
  }

 }

 export default ProfileScreen;
