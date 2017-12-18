import React, { Component, BackAndroid } from 'react';
import { 
  View,
  Text,
  Image,
  Alert,
  FlatList,
  LayoutAnimation,
  TouchableOpacity,
  ActivityIndicator,
 } from 'react-native';
 
import FastImage from 'react-native-fast-image'
import ActionSheet from 'react-native-actionsheet'; 
import Communications from 'react-native-communications'; 
import { GoogleSignin } from 'react-native-google-signin';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import colors from 'App/config/colors';
import Button from 'App/components/Button';
import StateFullScreen from 'App/components/stateFullScreen';
import EmptyProfileImage from 'App/components/emptyProfileImage';
import { startLoginScreen } from 'App/navigator/loginScreenNavigator';

import moreImage from './../../../assets/images/more.png';
import callImage from './../../../assets/images/call.png';
import messageImage from './../../../assets/images/message.png';
import favouriteImage from './../../../assets/images/favorite.png';
import emailImage from './../../../assets/images/mail.png';
import locationImage from './../../../assets/images/location.png';
import githubImage from './../../../assets/images/github.png';
import skypeImage from './../../../assets/images/skype.png';

import { getWidth, getHeight } from 'App/utils/dimension';
import style, { AVATAR_SIZE, STICKY_HEADER_HEIGHT, DOT_MARGIN, PARALLAX_HEADER_HEIGHT } from './styles'; 

// const PHONE_NUMBER = 0
const EMAIL = 0
const ADDRESS = 1
const SKYPE = 2
const GITHUB = 3

const CANCEL_INDEX = 0
const GUEST_DESTRUCTIVE_INDEX = 1
const DESTRUCTIVE_INDEX = 2
const GUEST_EMAIL = 'guest@lftechnology.com'
const options = ['Cancel', 'Sync with LMS', 'Logout']
const guestOptions = ['Cancel', 'Logout']
class ProfileScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isFav: false
    }
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentDidMount() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);  
    let fav = this.props.favEmployees.filter(emp => emp.empId === this.data.empId).length > 0 ? true : false
    this.setState({ isFav: fav });
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress' && event.id == 'backPress') {
      this.props.navigator.popToRoot({ animated: false });
    }
  }


  _startLogin = () => {
    this.props.logout(); 
    startLoginScreen();      
  }

  _logout = () => {
    if (!this.isGuest) {
      GoogleSignin.signOut().then(() => {
        this._startLogin()
      })
      .done();
    } else {
      this._startLogin()
    }
  }

  _moreButtonAction = () => {
    this.actionSheet.show();
  }

  _favAction = () => {
    if (this.state.isFav) {
      // remove
      let newArr = this.props.favEmployees.filter(emp => emp.empId !== this.data.empId )
      this.props.setFavEmployees(newArr)
    } else {
      // add
      let newArr = []
      newArr.push(this.data)      
      this.props.setFavEmployees(newArr.concat(this.props.favEmployees))      
    }
    this.setState(oldState => { return { isFav: !oldState.isFav }})
  }

  _actionSheetSelection = (index) => {
    switch (index) {
      case 0:
      break
      case 1: // Update
      this.isGuest ? this._logout() : this.props.fetchEmployeesAndDepartments();
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
            <View style={style.tableHeaderBackgroundOverlay}/>
          </View>
        )}

        renderForeground={() => (
          <View style={style.profileContainer}>
            <View style={style.imageNumberContainer}>
              { !this.props.data.fromProfileTab &&
              <View style={[style.messageContainer, style.buttonContainer]}>
                <TouchableOpacity style={style.messageButton} onPress={() => Communications.text(this.data.contact.mobilePhone)}>
                  <Image source={messageImage} style={style.phoneAndMessageButtonImage}/>
                </TouchableOpacity>
              </View>
              }
              <View style={ style.photoContainer }>
                <View style={style.imageProfileContainer}>
                  <EmptyProfileImage
                    firstName={this.data.firstName}
                    lastName={this.data.lastName}
                    textSize={38}
                    style={style.avatar}
                  />
                  {
                    this.data.avatarUrl &&
                    // <Image style={[style.avatar, {resizeMode: 'contain', position: 'absolute'}]} source={{uri: this.data.avatarUrl}}/>
                    <FastImage
                      style={[style.avatar, {position: 'absolute', zIndex: 10}]}
                      source={{
                        uri: this.data.avatarUrl,
                        priority: FastImage.priority.normal,
                      }}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  }
                </View>
              </View>
              { !this.props.data.fromProfileTab &&
              <View style={[style.phoneContainer, style.buttonContainer]}>
                <TouchableOpacity style={style.phoneButton} onPress={() => Communications.phonecall(this.data.contact.mobilePhone, true)}>
                  <Image source={callImage} style={style.phoneAndMessageButtonImage}/>
                </TouchableOpacity>
              </View>
              }
            </View>
            <View style={style.nameNumberFavContainer}>
              <View style={style.nameNumberContainer}>
                <Text style={ style.sectionSpeakerText }>
                  { this.data.firstName } { this.data.lastName }
                </Text>
                <Text style={ style.designationText }>
                  { this.data.designation }
                </Text>
                <Text style={ style.sectionTitleText }>
                  { this.data.contact.mobilePhone }
                </Text>
              </View>
              <TouchableOpacity style={style.favButton} onPress={() => this._favAction()}>
                {
                  !this.props.data.fromProfileTab &&
                  <Image source={favouriteImage} style={[style.favImage, this.state.isFav ? {tintColor: colors.MILD_RED}: {tintColor: colors.LIGHT_GRAY}]}/>
                }
              </TouchableOpacity>
            </View>
          </View>
        )}

      />
    );
  }

  _renderItems = (item, index) => {
    switch (index) {
      case EMAIL: return this._renderTextCell('E-mail', this.data.username || '-', emailImage);      
      case ADDRESS: return this._renderTextCell('Address', this.data.address.temporaryAddress || '-', locationImage);
      case GITHUB: return this._renderTextCell('Github ID', this.data.contact.githubId || '-', githubImage);
      case SKYPE: return this._renderTextCell('Skype ID', this.data.contact.skypeId || '-', skypeImage);
      // case DOB: return this._renderTextCell('DOB', this.data.dateofBirth || '-');
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

  _renderTextCell = (text, data, image) => {
    return (
      <View style={[style.simpleTextCell, style.cell]}>
        <View style={style.simpleTextCellContainer}>
          <Text style={style.titleText}>{text}</Text>
          <Text style={style.dataText}>{data}</Text>
        </View>
        <View style={style.iconsContainer}>
          <Image source={image} style={style.icons}/>
        </View>
        <View style={style.separator}/>
      </View>
    );
  }

  _renderTableView = () => {
    var data = [{key: '1'}, {key: '2'}, {key: '3'}, {key: '4'}, {key: '5'}]
    return (
      <View style={{height: getHeight()}}>
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
      </View>
    );
  }

  _renderActionSheet = () => {
    return (
      <View>
        <ActionSheet
          ref={component => this.actionSheet = component}
          options={this.isGuest ? guestOptions : options}
          cancelButtonIndex={CANCEL_INDEX}
          destructiveButtonIndex={this.isGuest ? GUEST_DESTRUCTIVE_INDEX : DESTRUCTIVE_INDEX}
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
    this.isGuest = (this.data && this.data.username === GUEST_EMAIL);    
    return (
      <View style={ style.mainContainer }>
        {
          <StateFullScreen
            style={style.mainContainer}
            state={this._getScreenState()} // fetch, normal and error
            contentView={this._renderTableView()}
            bottomMargin={-145}
            reloadButtonAction={() => this.props.fetchEmployeesAndDepartments()}            
          />
        }
        {
          this.props.data.fromProfileTab &&                    
          this._renderMoreButtonWithActionSheet()
        }
      </View>      
    )
  }

 }

 export default ProfileScreen;
