import React, { Component, BackAndroid } from 'react';
import { 
  View,
  Text,
  Image,
  Alert,
  FlatList,
  Linking,
  LayoutAnimation,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  TouchableWithoutFeedback,
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
import ToolTip from 'App/components/toolTip';

import moreImage from './../../../assets/images/more.png';
import callImage from './../../../assets/images/call.png';
import messageImage from './../../../assets/images/message.png';
import favouriteImage from './../../../assets/images/favorite.png';
import emptyFavouriteImage from './../../../assets/images/favorite-empty.png';
import emailImage from './../../../assets/images/mail.png';
import locationImage from './../../../assets/images/location.png';
import githubImage from './../../../assets/images/github.png';
import skypeImage from './../../../assets/images/skype.png';
import phoneCallImage from './../../../assets/images/phone-call.png';
import phoneMsgImage from './../../../assets/images/msg.png';

import { getWidth, getHeight } from 'App/utils/dimension';
import style, { AVATAR_SIZE, STICKY_HEADER_HEIGHT, DOT_MARGIN, PARALLAX_HEADER_HEIGHT } from './styles'; 

const CALL_AND_MESSAEGE = 0
const EMAIL = 1
const ADDRESS = 2
const SKYPE = 3
const GITHUB = 4

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
    // if (!this.isGuest) {
    //   GoogleSignin.signOut().then(() => {
    //     this._startLogin()
    //   })
    //   .catch(() => this._startLogin())
    //   .done();
    // } else {
      this._startLogin()
    // }
  }

  _syncWithLMS = () => {
    this.props.fetchEmployeesAndDepartments();
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
      this.isGuest || this.props.isFetching ? this._logout() : this._syncWithLMS();
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
        headerBackgroundColor="pink"
        stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
        parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
        backgroundSpeed={20}
        renderBackground={() => (
          <View key="background">
            <View style={style.tableHeaderBackgroundOverlay}/>
          </View>
        )}

        renderForeground={() => (
          <View style={style.profileContainer}>
            <View style={style.imageNumberContainer}>
              <View style={ style.photoContainer }>
                <View style={style.imageProfileContainer}>
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
                  <EmptyProfileImage
                    firstName={this.data.firstName}
                    lastName={this.data.lastName}
                    textSize={38}
                    style={style.avatar}
                  />
                </View>
                <View style={style.favButtonContainer}>
                  <TouchableOpacity style={style.favButton} onPress={() => this._favAction()}>
                    {
                      !this.props.data.fromProfileTab &&
                      <Image source={this.state.isFav ? favouriteImage : emptyFavouriteImage} style={[style.favImage]}/>
                    }
                  </TouchableOpacity>
                </View>
              </View>
              {/* {
                !this.props.data.fromProfileTab &&
                <View style={style.importButtonContainer}>
                  <TouchableOpacity>
                    <Image source={callImage}/>
                  </TouchableOpacity>
                </View>
              } */}
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
            </View>
          </View>
        )}

      />
    );
  }

  _renderCallAndMsgCell = () => {
    return (
      <View style={style.callMessageContainer}>
        <View style={style.msgButtonContainer}>
          <Button
            style={style.googleLoginButton}
            title={''}
            source={phoneMsgImage}
            imageStyle={style.googleImage}
            onPress={() => Communications.text(this.data.contact.mobilePhone)}
          />
        </View>
        <View style={style.callButtonContainer}>
          <Button
            style={style.googleLoginButton}
            title={''}
            source={phoneCallImage}
            imageStyle={style.googleImage}
            onPress={() => Communications.phonecall(this.data.contact.mobilePhone, true)}
          />
        </View>
      </View>
    )
  }

  _mailAction = () => {
    if (this.data.username) if (this.data.username.length > 3) {
      Linking.openURL(`mailto:${this.data.username}`)
    }
  }

  _skypeAction = () => {
    if (this.data.contact.skypeId) if (this.data.contact.skypeId.length > 3) {
      Linking.openURL(`skype:${this.data.contact.skypeId}`)
    }
  }

  _githubAction = () => {
    if (this.data.contact.githubId) if (this.data.contact.githubId.length > 3) {
      Linking.openURL(`https://github.com/${this.data.contact.githubId}`)
    }
  }

  _mapAction = () => {
    if (this.data.address.temporaryAddress) if (this.data.address.temporaryAddress.length > 3) {
      Linking.openURL(`https://www.google.com/maps/place/${this.data.address.temporaryAddress}`)
    }
  }

  _copyText = () => {
    console.log('asd')
  }

  _renderItems = (item, index) => {
    switch (index) {
      case CALL_AND_MESSAEGE: return this.props.data.fromProfileTab ? null : this._renderCallAndMsgCell()
      case EMAIL: return this._renderTextCell('E-mail', this.data.username || '-', emailImage, this._mailAction);      
      case ADDRESS: return this._renderTextCell('Address', this.data.address.temporaryAddress || '-', locationImage, this._mapAction);
      case GITHUB: return this._renderTextCell('Github ID', this.data.contact.githubId || '-', githubImage, this._githubAction);
      case SKYPE: return this._renderTextCell('Skype ID', this.data.contact.skypeId || '-', skypeImage, this._skypeAction);
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

  _renderToolTip = (event) => {
    //todo
  }

  _renderTextCell = (text, data, image, action) => {
    return (
      <View style={[style.simpleTextCell, style.cell]}>
        <TouchableWithoutFeedback onLongPress={() => this._renderToolTip()} style={{flex: 1}}>
          <View style={style.simpleTextCellContainer}>
            <Text style={style.titleText}>{text}</Text>
            <Text style={style.dataText}>{data}</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={style.iconsContainer}>
          <TouchableOpacity onPress={() => action()}>
            <Image source={image} style={style.icons}/>
          </TouchableOpacity>
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
          options={this.isGuest || this.props.isFetching ? guestOptions : options}
          cancelButtonIndex={CANCEL_INDEX}
          destructiveButtonIndex={this.isGuest || this.props.isFetching ? GUEST_DESTRUCTIVE_INDEX : DESTRUCTIVE_INDEX}
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
    // this.isGuest = (this.data && this.data.username === GUEST_EMAIL);
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
