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

import style, { AVATAR_SIZE, STICKY_HEADER_HEIGHT, DOT_MARGIN } from './styles';
import colors from 'App/config/colors';
import ContactCell from './contactCell';
import screens from 'App/constants/screens';
import { getWidth, getHeight } from './../../utils/dimension';

const PARALLAX_HEADER_HEIGHT = 250;
const DEPARTMENT_LIST = ["ios", "android", "java", "php", "reactnative", "pm"];
 class ContactScreen extends Component {

  constructor(props) {
    super(props);
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
    console.log('xcxcxcx', this.props.navigator);
    this.props.navigator.push({
      screen: screens.CONTACT_DETAIL_SCREEN.id,
      animated: true,
      overrideBackPress: true,
      navigatorStyle: {}
    });
  }

  _renderParallaxTableHeaderView = () => {
    return (
      <ParallaxScrollView
        onScroll={this.props.onScroll}

        headerBackgroundColor="#333"
        stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
        parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
        backgroundSpeed={10}

        renderBackground={() => (
          <View key="background">
            <Image source={{uri: 'https://i.ytimg.com/vi/P-NZei5ANaQ/maxresdefault.jpg',
                            width: getWidth(),
                            height: PARALLAX_HEADER_HEIGHT}}/>
            <View style={{position: 'absolute',
                          top: 0,
                          width: getWidth(),
                          backgroundColor: 'rgba(0,0,0,.4)',
                          height: PARALLAX_HEADER_HEIGHT}}/>
          </View>
        )}

        renderForeground={() => (
          <View key="parallax-header" style={ style.parallaxHeader }>
            <Image style={ style.avatar } source={{
              uri: 'https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg',
              width: AVATAR_SIZE,
              height: AVATAR_SIZE
            }}/>
            <Text style={ style.sectionSpeakerText }>
              Rich Hickey
            </Text>
            <Text style={ style.sectionTitleText }>
              CTO of Cognitec, Creator of Clojure
            </Text>
          </View>
        )}

        renderStickyHeader={() => (
          <View key="sticky-header" style={style.stickySection}>
            <Text style={style.stickySectionText}>Rich Hickey</Text>
          </View>
        )}
      />
    );
  }

  _renderTableView = (key) => {
    return (
      <SectionList
        ref="ListView"
        key={key}                  
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
          this._renderParallaxTableHeaderView()
        )}
      />
    );
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
          activeDotStyle={{marginBottom: DOT_MARGIN}} 
          dotStyle={{marginBottom: DOT_MARGIN}}>
            {
              DEPARTMENT_LIST.map((key) => this._renderTableView(key))
            }
        </Swiper>
      </View>
    );
  }

 }

 export default ContactScreen;
