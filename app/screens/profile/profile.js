import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  FlatList,
  LayoutAnimation,
  TouchableOpacity,
  ActivityIndicator,
 } from 'react-native';

import ActionSheet from 'react-native-actionsheet'; 
import Communications from 'react-native-communications'; 
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import colors from 'App/config/colors';
import Button from 'App/components/Button';
import StateFullScreen from 'App/components/stateFullScreen';
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
// const DOB = 3
const GITHUB = 3
const SKYPE = 4

const CANCEL_INDEX = 0
const DESTRUCTIVE_INDEX = 2
const options = ['Cancel', 'Update', 'Logout']
class ProfileScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);    
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
      this.props.fetchEmployeesAndDepartments();
      break
      case 2: // logout
      this._logout();
      break
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
            <Image source={{uri: this.data.avatarUrl || 'https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg'}} style={style.tableHeaderBackgroundImage}/>
            <View style={style.tableHeaderBackgroundOverlay}/>
          </View>
        )}

        renderForeground={() => (
          <View key="parallax-header" style={ style.parallaxHeader }>
            <Image style={ style.avatar } source={{uri: this.data.avatarUrl || 'https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg'}}/>
            <Text style={ style.sectionSpeakerText }>
            { this.data.firstName } { this.data.lastName }
            </Text>
            <Text style={ style.sectionTitleText }>
              { this.data.department.name }
            </Text>
          </View>
        )}

      />
    );
  }

  _renderItems = (item, index) => {
    switch (index) {
      case PHONE_NUMBER: return this._renderPhoneCell();
      case ADDRESS: return this._renderTextCell('Address', this.data.address.temporaryAddress || '-');
      case EMAIL: return this._renderTextCell('E-mail', this.data.username || '-');
      // case DOB: return this._renderTextCell('DOB', this.data.dateofBirth || '-');
      case GITHUB: return this._renderTextCell('Github ID', this.data.contact.githubId || '-');
      case SKYPE: return this._renderTextCell('Skype ID', this.data.contact.skypeId || '-');
    }
  }

  _renderPhoneCell = () => {
    return (
      <View style={[style.phoneCell, style.cell]}>
        <View style={style.numberTextContainer}>
          <Text style={style.dataText}>{ this.data.contact.mobilePhone }</Text>
          <Text style={style.titleText}>Phone Number</Text>
        </View>
        { !this.props.data.fromProfileTab &&
          <View style={style.phoneMessageContainer}>
            <TouchableOpacity style={style.phoneButton} onPress={() => Communications.phonecall(this.data.contact.mobilePhone, true)}>
              <Image source={callImage} style={style.phoneAndMessageButtonImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={style.messageButton} onPress={() => Communications.text(this.data.contact.mobilePhone)}>
              <Image source={messageImage} style={style.phoneAndMessageButtonImage}/>
            </TouchableOpacity>
          </View>
        }
      </View>
    );
  }

  _renderTextCell = (text, data) => {
    return (
      <View style={[style.simpleTextCell, style.cell]}>
        <Text style={style.dataText}>{data}</Text>
        <Text style={style.titleText}>{text}</Text>
      </View>
    );
  }

  _renderTableView = () => {
    var data = [{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}, {key: '5'}]
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

  _renderMoreButtonWithActionSheet = () => {
    return (
      <View style={style.moreButtonContainer}>
        {
          this._renderActionSheet()
        }
        <TouchableOpacity style={style.moreButton} onPress={() => this._moreButtonAction()}>
          <Image source={moreImage} style={style.moreButtonImage}/>
        </TouchableOpacity>
      </View>
    );
  }

  _getScreenState = () => {
    if (this.props.isFetching) {
      return 'fetch';
    }
    if (!this.data) {
      return 'error';
    }
    return 'normal';
  }

  render() {
    this.data = this.props.data.fromProfileTab ? this.props.me : this.props.data.profile;
    return (
      <View style={ style.mainContainer }>
        {
          this.props.data.fromProfileTab &&                    
          this._renderMoreButtonWithActionSheet()
        }
        {
          <StateFullScreen
            style={style.mainContainer}
            state={this._getScreenState()} // fetch, normal and error
            contentView={this._renderTableView()}
            reloadButtonAction={() => this.props.fetchEmployeesAndDepartments()}            
          />
        }
      </View>      
    )
  }

 }

 export default ProfileScreen;
