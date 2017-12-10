import React, { Component } from 'react';
import { 
  View,
  Text,
  Image,
  SectionList,
  ActivityIndicator,
  LayoutAnimation,
 } from 'react-native';
import Swiper from 'react-native-swiper'; 
import Search from 'react-native-search-box';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import * as util from 'App/utils/dataNormalization';
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

  // _animateOnMount = () => {
  //   LayoutAnimation.configureNext({
  //     duration: 700,
  //     create: {
  //       type: LayoutAnimation.Types.linear,
  //       property: LayoutAnimation.Properties.opacity,
  //     },
  //     update: {
  //       type: LayoutAnimation.Types.spring,
  //       springDamping: 0.75,
  //     },
  //   });
  // }

  componentDidMount() {
    // this._animateOnMount();
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    
    this.props.employees ? null : this.props.fetchEmployees()
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
    // this.props.navigator.push({
    //   screen: screens.PROFILE_SCREEN.id,
    //   animated: true,
    //   overrideBackPress: true,
    //   navigatorStyle: {
    //     drawUnderNavBar: true,
    //     navBarTranslucent: true,
    //     navBarTransparent: true,
    //     navBarTextColor: 'white',
    //     navBarTransparency: 1,  
    //     navBarButtonColor: 'white',                  
    //     navBarLeftButtonColor: 'white',
    //     navBarRightButtonColor: 'white',
    //   },
    //   title: '',
    //   passProps: {
    //     data: {
    //       department: DEPARTMENT_LIST[this.state.currentSwipeIndex]          
    //     }
    //   }        
    // });
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
                // DEPARTMENT_LIST[index].name
              }
            </Text>
            <Text style={ style.sectionTitleText }>
              Leapfrog, Inc.
            </Text>
          </View>
        )}

        renderStickyHeader={() => (
          <View key="sticky-header" style={style.stickySection}>
            <Text style={style.stickySectionText}>aaa</Text>
          </View>
        )}
      />
    );
  }

  _renderTableView = (employees, index) => {
    console.log('-----', employees, index);
    const { onScroll = () => {} } = this.props;    
    return (
      <SectionList
        ref="ListView"
        key={index}                  
        sections={util.groupByAlphabets(employees.data)}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => 
          <ContactCell 
            {...this.props}          
            data={item} 
            onPress={this._onCellSelection}/>
          }
        renderSectionHeader={({section}) => <Text style={style.sectionHeader}>{section.title}</Text>}
        // renderScrollComponent={props => (
        //   this._renderParallaxTableHeaderView(props, index)
        // )}
        renderSeparator={() => <View style={{backgroundColor: colors.GRAY, height: 1}}></View>}
      />
    );
  }

  _onMomentumScrollEnd = (index) => {
    this.setState({
      currentSwipeIndex: index,
    })
  }

  _renderStatusBar = () => {
    return (
      <View style={[style.statusBar, {height: 20}]}/>
    )
  }

  _renderSearchBar = () => {
    return (
      <Search
        ref={component => this.searchBar = component}
        backgroundColor={colors.LF_DARK_GRREEN}
        titleCancelColor='white'
        onChangeText={this._onSearchBarTextChange}
        onFocus={this._onSearchBarFocus}
        afterSearch={this.onSearch}
        afterCancel={this.onCancel}
        keyboardDismissOnSubmit={true}
        blurOnSubmit={true}
      />
    )
  }

  _renderSwiper = () => {
    return (
      <Swiper
        style={style.wrapper}
        loop={false} 
        onIndexChanged ={this._onMomentumScrollEnd}          
        activeDotStyle={{marginBottom: DOT_MARGIN}} 
        activeDotColor={colors.LF_DARK_GRREEN}
        dotStyle={{marginBottom: DOT_MARGIN}}>
          {
            util.groupByDepartment(this.props.employees).map((data, index) => this._renderTableView(data, index))
          }
      </Swiper>
    )
  }

  _renderActivityIndicator = () => {
    return (
      <View style={[style.container, style.horizontal]}>
        <ActivityIndicator size="large" color={colors.GRAY} />
      </View>
    )
  }

  render() {
    // console.log('-----', this.props.groupedEmp);
    return (
      <View style={ style.mainContainer }>
        { this._renderStatusBar() }
        <View style={style.searchContainer}>
          { this._renderSearchBar() }
        </View>
        <View style={style.tableContainer}>
          { this.props.employees ? this._renderSwiper() : this._renderActivityIndicator() }
        </View>
      </View>
    );
  }

 }

 export default ContactScreen;
