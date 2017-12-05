import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  SectionList
 } from 'react-native';
import Swiper from 'react-native-swiper'; 
import Search from 'react-native-search-box';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import colors from 'App/config/colors';
import ContactCell from './contactCell';
import screens from 'App/constants/screens';
import { getWidth, getHeight } from 'App/utils/dimension';
import style, { AVATAR_SIZE, STICKY_HEADER_HEIGHT, DOT_MARGIN, PARALLAX_HEADER_HEIGHT } from './styles';

const DEPARTMENT_LIST = [{
                            name: 'iOS', 
                            avatar: require('../../../assets/images/SteveJobs.jpg'), 
                            wallpaper: require('../../../assets/images/SteveJobs.jpg'),
                            quote: '\"Stay hungry. Stay foolish\"'
                          }, 
                          {
                            name: 'Android', 
                            avatar: require('../../../assets/images/SundarPichai.jpg'), 
                            wallpaper: require('../../../assets/images/SundarPichai.jpg'),
                            quote: '\"Wear your failure as your badge of honour\"'
                          }, 
                          {
                            name: 'Java', 
                            avatar: require('../../../assets/images/SteveJobs.jpg'), 
                            wallpaper: require('../../../assets/images/SteveJobs.jpg'),
                            quote: '\"Stay hungry. Stay foolish\"'
                          }, 
                          {
                            name: 'php', 
                            avatar: require('../../../assets/images/SteveJobs.jpg'), 
                            wallpaper: require('../../../assets/images/SteveJobs.jpg'),
                            quote: '\"Stay hungry. Stay foolish\"'
                          }, 
                          {
                            name: 'ReactNative', 
                            avatar: require('../../../assets/images/SteveJobs.jpg'), 
                            wallpaper: require('../../../assets/images/SteveJobs.jpg'),
                            quote: '\"Stay hungry. Stay foolish\"'
                          }, 
                          {
                            name: 'PM', 
                            avatar: require('../../../assets/images/SteveJobs.jpg'), 
                            wallpaper: require('../../../assets/images/SteveJobs.jpg'),
                            quote: '\"Stay hungry. Stay foolish\"'
                          }];

 class ContactScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentSwipeIndex: 0,
    }
  }

  _onSearchBarTextChange = () => {
    console.log('bigno');
  }

  _onSearchBarFocus = () => {
    console.log('focus');    
  }

  _onSearch = () => {
    console.log('search');        
  }

  _onSearchCancel = () => {
    console.log('cancel');
  }

  _onCellSelection = () => {
    this.props.navigator.push({
      screen: screens.CONTACT_DETAIL_SCREEN.id,
      animated: true,
      overrideBackPress: true,
      navigatorStyle: {},
      title: 'Detail Page',
      passProps: {
        data: {
          department: DEPARTMENT_LIST[this.state.currentSwipeIndex]          
        }
      }        
    });
  }

  _renderParallaxTableHeaderView = (data, index) => {
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
            <Image source={DEPARTMENT_LIST[0].wallpaper} style={style.tableHeaderBackgroundImage}/>
            <View style={style.tableHeaderBackgroundOverlay}/>
          </View>
        )}

        renderForeground={() => (
          <View key="parallax-header" style={ style.parallaxHeader }>
            <Image style={ style.avatar } source={{uri: 'https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg'}}/>
            <Text style={ style.sectionSpeakerText }>
              {
                DEPARTMENT_LIST[index].name
              }
            </Text>
            <Text style={ style.sectionTitleText }>
              Leapfrog, Inc.
            </Text>
          </View>
        )}

        renderStickyHeader={() => (
          <View key="sticky-header" style={style.stickySection}>
            <Text style={style.stickySectionText}>iOS</Text>
          </View>
        )}
      />
    );
  }

  _renderTableView = (data, index) => {
    return (
      <SectionList
        ref="ListView"
        key={data}                  
        sections={[
          {title: 'D', data: ['Devin']},
          {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
        ]}
        keyExtractor={(item, index) => index}
        renderItem={({item, section, index}) => 
          <ContactCell 
            index={index} 
            section={section} 
            data={item} 
            onPress={this._onCellSelection}/>
          }
        renderSectionHeader={({section}) => <Text style={style.sectionHeader}>{section.title}</Text>}
        renderScrollComponent={props => (
          this._renderParallaxTableHeaderView(props, index)
        )}
      />
    );
  }

  _onMomentumScrollEnd = (index) => {
    console.log('cxcxcxcxcxc',index);
    this.setState({
      currentSwipeIndex: index,
    })
  }

  render() {
    return (
      <View style={ style.mainContainer }>
        <Search
          ref={component => this.searchBar = component}
          backgroundColor={colors.LIGHT_GRAY}
          titleCancelColor={colors.SYSTEM_BLUE}
          onChangeText={this._onSearchBarTextChange}
          onFocus={this._onSearchBarFocus}
          afterSearch={this.onSearch}
          afterCancel={this.onCancel}
          keyboardDismissOnSubmit={true}
          blurOnSubmit={true}
        />
        <Swiper
          style={style.wrapper}
          loop={false} 
          onIndexChanged ={this._onMomentumScrollEnd}          
          activeDotStyle={{marginBottom: DOT_MARGIN}} 
          dotStyle={{marginBottom: DOT_MARGIN}}>
            {
              DEPARTMENT_LIST.map((data, index) => this._renderTableView(data, index))
            }
        </Swiper>
      </View>
    );
  }

 }

 export default ContactScreen;
