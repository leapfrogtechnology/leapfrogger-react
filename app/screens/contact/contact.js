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

import colors from 'App/config/colors';
import ContactCell from './contactCell';
import Button from 'App/components/Button';
import screens from 'App/constants/screens';
import * as util from 'App/utils/dataNormalization';
import SearchContactView from 'App/screens/searchContact';
import { getWidth, getHeight } from 'App/utils/dimension';
import StateFullScreen from 'App/components/stateFullScreen';
import { searchEmployeesOfName } from 'App/utils/dataNormalization';
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
      isSearching: false,      
      currentSwipeIndex: 0,
      searchedEmployees: [],
      screenState: 'normal',
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
    if ((this.props.employees.length === 0) || (this.props.departments.length === 0)) { this.props.fetchEmployeesAndDepartments() }
  }

  _onSearchBarTextChange = (text) => {
    var employees = searchEmployeesOfName(this.props.employees, text);    
    this.setState({ searchedEmployees: employees });    
  }

  _onSearchBarFocus = () => {
    this.setState({ isSearching: true });    
  }

  _onReturnAction = () => {
    // also cancels on done button action 
    this._onSearchCancel();     
  }

  _onSearchCancel = () => {
    this.setState({ searchedEmployees: [] });
    this.setState({ isSearching: false });    
  }

  _onCellSelection = (data) => {
    this.props.navigator.push({
      screen: screens.PROFILE_SCREEN.id,
      animated: true,
      overrideBackPress: true,
      navigatorStyle: {
        drawUnderNavBar: true,
        navBarTranslucent: true,
        navBarTransparent: true,
        navBarTextColor: 'white',
        navBarTransparency: 1,  
        navBarButtonColor: 'white',                  
        navBarLeftButtonColor: 'white',
        navBarRightButtonColor: 'white',
      },
      title: '',
      passProps: {
        data: {
          profile: data
        }
      }        
    });
  }

  _renderTableView = (employees, index) => {
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
        onChangeText={(text) => this._onSearchBarTextChange(text)}
        onFocus={() => this._onSearchBarFocus()}
        afterSearch={() => this._onReturnAction()}
        afterCancel={() => this._onSearchCancel()}
        keyboardDismissOnSubmit={true}
        returnKeyType={'done'}
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
            this.props.groupedEmp.map((data, index) => this._renderTableView(data, index))
          }
      </Swiper>
    )
  }

  _renderSearchView = () => {
    return (
      <View style={style.searchViewContainer}>
        <SearchContactView
          data={this.state.searchedEmployees}
          onPress={this._onCellSelection}
        />
      </View>
    )
  }

  _getScreenState = () => {
    if (this.props.isFetching) {
      return 'fetch';
    }
    if (this.props.employees.length > 0 || this.props.departments.length > 0) {
      return 'normal'
    }
    return 'error'; // error or empty
  }

  render() {
    return (
      <View style={ style.mainContainer }>
        { this._renderStatusBar() }
        <View style={style.searchContainer}>
          { this._renderSearchBar() }
        </View>
        <View style={style.tableContainer}>
          {
            <StateFullScreen
              style={style.mainContainer}
              state={this._getScreenState()} // fetch, normal and error
              contentView={this._renderSwiper()}
              reloadButtonAction={() => this.props.fetchEmployeesAndDepartments()}
            />
          }
          {
            ((this._getScreenState() === 'normal') && (this.state.isSearching)) &&
            this._renderSearchView()
          }
        </View>
      </View>
    );
  }

 }

 export default ContactScreen;
